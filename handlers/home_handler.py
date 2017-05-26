#! /usr/bin/env python
# -*- coding: UTF-8 -*-

import sys
import tornado.web
import tornado.gen

from handlers.base_handler import BaseHandler, RenderInfo
from utils.common_data import TVInfoName, MovieInfoName, to_str

class RenderCommentInfo():
    def __init__(self, content):
        if content and isinstance(content, dict):
            for key, item in content.items():
                if not hasattr(self, key):
                    setattr(self, key, item)

class HomeHandler(BaseHandler):
    @tornado.web.asynchronous
    @tornado.gen.coroutine
    def get(self, *args, **kwargs):
        recomment_cursor = self.db.recomment.find()
        recomment_lists = yield recomment_cursor.to_list(length=20)
        scan_info_list = []
        for item in recomment_lists:
            render_comment = RenderCommentInfo(item)
            if hasattr(render_comment, "media_image_path"):
                render_comment.media_image_path = self.static_url(render_comment.media_image_path)
            scan_info_list.append(render_comment)

        #查找首页显示电视剧 #算法以后更新
        tv_cousor = self.db.tv.find()
        tv_lists = yield tv_cousor.to_list(length=10)
        tv_info_list = []
        for item in tv_lists:
            tv_render = RenderInfo(item)
            if hasattr(tv_render, TVInfoName.ImagePath.value):
                tv_render.tv_image_path = self.static_url(tv_render.tv_image_path)
            tv_info_list.append(tv_render)

        #查找首页显示电影 #算法以后更新
        movie_cursor = self.db.movie.find()
        movie_lists = yield movie_cursor.to_list(length=10)
        movie_info_list = []
        for item in movie_lists:
            movie_render = RenderInfo(item)
            if hasattr(movie_render, MovieInfoName.ImagePath.value):
                image_path = to_str(movie_render.movie_image_path)
                movie_render.movie_image_path = self.static_url(image_path)
                # movie_render.movie_image_path = self.static_url(movie_render.movie_image_path)
            movie_info_list.append(movie_render)

        self.render("home.html", scan_info=scan_info_list, tv_info=tv_info_list, movie_info=movie_info_list)
        # self.render("home.html")
