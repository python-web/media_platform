#! /usr/bin/env python
# -*- coding: UTF-8 -*-
from handlers.base_handler import BaseHandler
from utils.common_data import MovieInfoName, MediaTypeName, TVInfoName
from you_get import *
from you_get.extractors import *
from you_get.common import *
import tornado.web
import tornado.gen
class PlayHandler(BaseHandler):


    @tornado.web.asynchronous
    @tornado.gen.coroutine
    def get(self, *args, **kwargs):
        if args and 1 < len(args):
            if MediaTypeName.TVName.value == args[0]:
                tv_id = args[1]
                tv_index = int(self.get_argument("index", None))#集数
                item = yield self.db.tv.find_one({"tv_id":tv_id})
                if tv_index and item and isinstance(item, dict) and TVInfoName.PlayUrl.value in item:
                    play_url_list = item.get(TVInfoName.PlayUrl.value)
                    if tv_index <= len(play_url_list):#当前集数存在
                        target_play_url_list = play_url_list[tv_index-1]
                        if target_play_url_list and isinstance(target_play_url_list, list) and 0 < len(target_play_url_list):
                            target_url = [play_url for play_url in target_play_url_list]#清晰度判断
                            #通过视频解析接口播放视频
                            if target_url[0][0] == "remote":#播放类型为remote
                                self.redirect(target_url[0][1])
                            else:
                                self.render("html5_player.html", video_lists=target_url)

            elif MediaTypeName.MovieName.value == args[0]:
                movie_id = args[1]
                choice = self.get_argument("type", None)
                item = yield self.db.movie.find_one({"movie_id":movie_id})
                if choice and item and isinstance(item, dict) and MovieInfoName.PlayUrl.value in item:
                    play_url_list = item.get(MovieInfoName.PlayUrl.value)
                    if play_url_list and isinstance(play_url_list, list) and 0 < len(play_url_list):
                        target_url = [play_url for play_url in play_url_list if play_url[2] == choice]
                        bool_iqyi = False
                        result = self._get_xiongmao_play_url(target_url)
                        if result:
                            target_url = result
                        #bilibli
                                # url[0] = "application/vnd.apple.mpegurl"
                        bili_result = self._get_bilibili_play_url(target_url)
                        if bili_result:
                            target_url = bili_result
                        flv_contents = [item for item in target_url if item[0] == "video/flv"]
                        bool_use_flv = False;
                        if 0 < len(flv_contents):
                            bool_use_flv = True
                        iqyi_result = self._get_iqyi_play_url(target_url, choice=choice)
                        if iqyi_result:
                            target_url = iqyi_result
                        self.render("html5_player.html", video_lists=target_url, use_flv = bool_use_flv)
            elif MediaTypeName.CartoonName.value == args[0]:
                pass;
            elif MediaTypeName.M3D.value == args[0]:
                pass;
            else:
                self.send_error()
            # item = yield self.db.movie.find_one({"movie_id":movie_id})
            # # print("items:{0}".format(item))
            # if isinstance(item, dict) and MovieInfoName.PlayUrl.value in item:
            #     #for the ck player
            #     play_url_list = item.get(MovieInfoName.PlayUrl.value)
            #     m3u8_url = "http://125.88.92.166:30001/PLTV/88888956/224/3221227724/1.m3u8"
            #     play_url = "http://47.93.23.32:9007/test.mp4"
            #     if isinstance(play_url_list, list) and 0 < len(play_url_list):
            #         play_url = play_url_list[1]
            #         video_type = play_url_list[0]
            #     else:
            #         self.write("error")
            #
            #     #use the videojs and videojs-hls
            #     play_list = [[play_url, "video/mp4", "标清", 0]]
            #     #play_list = [[m3u8_url, "application/x-mpegURL", "标清", 0]]
            #     # play_list = [[m3u8_url, "application/vnd.apple.mpegurl", "标清", 0]]
            #     self.render("html5_player.html", video_lists=play_list)
            #
            #     #for the ckplayer
            #     # self.render("player.html", video_url=play_url, video_type=video_type)
            #
            #     #for the ch player
            #
            #     # play_list = [[play_url, "video/mp4", "标清", 0], [play_url, "video/mp4", "高清", 5]]
            #     # self.render("ch_player.html", video_url=play_url)
            #     # self.render("ch_player.html", video_url=play_list)


    def _get_bilibili_play_url(self, play_list):
        is_true = False
        if play_list and 0 < len(play_list):
            for item in play_list:
                if item[0] == "application/bili_mp4":
                    item[0] = "video/mp4"
                    real_url = bilibili_download(item[1], info_only=True)
                    if real_url and 0 < len(real_url):
                        item[1] = ",".join(real_url)
                    is_true = True
        if is_true:
            return  play_list
        else:
            return None
    def _get_xiongmao_play_url(self, play_list):
        is_ture = False
        if play_list and 0 < len(play_list):
            for item in play_list:
                if item[0] == "video/xiongmao_flv":
                    item[0] = "video/flv"
                    read_url = panda_download(item[1], info_only=True)
                    item[1] = read_url
                    is_ture = True

        if is_ture:
            return play_list
        else:
            return None

    def _get_iqyi_play_url(self, play_list, choice=None):
        is_ture = False
        for url in play_list:
            if url[0] == "application/m3u8_iqyi":
                is_ture = True
                url[0] = "application/vnd.apple.mpegurl"
                iqiyi_site = iqiyi.Iqiyi()
                iqiyi_site.download_by_url(url[1], info_only=True)
                if choice == "高清":
                    choice = "TD"
                elif choice == "标清":
                    choice == "SD"
                print("streams:{0}".format(iqiyi_site.streams))
                url[1] = iqiyi_site.streams.get(choice).get("src")[0]
        if is_ture:
            return play_list
        else:
            return None


