#! /usr/bin/env python
# -*- coding: UTF-8 -*-
from handlers.base_handler import BaseHandler, RenderInfo
from utils.common_data import MovieInfo, MovieInfoName
import tornado.web
import tornado.gen


class MovieHandler(BaseHandler):

    @tornado.web.asynchronous
    @tornado.gen.coroutine
    def get(self, *args, **kwargs):
        #获取电影信息
        cursor = self.db.movie.find()
        movie_list = []
        item_list = yield cursor.to_list(length=30)
        for item in item_list:
            movie = MovieInfo(item.get(MovieInfoName.ID.value)\
                      , category=item.get(MovieInfoName.Categeroy.value)\
                      , born=item.get(MovieInfoName.Born.value)\
                      , name=item.get(MovieInfoName.Name.value)\
                      , score=item.get(MovieInfoName.Score.value)\
                      , performer=item.get(MovieInfoName.Performer.value)\
                      , image_path=self.static_url(item.get(MovieInfoName.ImagePath.value)))
            movie_list.append(movie)
        self.render("movie.html", movie_info= movie_list)

class MovieInfoHandler(BaseHandler):
    """
    电影详情页
    """
    @tornado.web.asynchronous
    @tornado.gen.coroutine
    def get(self, *args, **kwargs):
        if args and 0 < len(args):
            movie_id = args[0]
            movie_info = yield self.db.movie.find_one({"movie_id":movie_id})

            render_info = RenderInfo(movie_info)
            if hasattr(render_info, "movie_image_path"):
                render_info.movie_image_path = self.static_url(render_info.movie_image_path)
            self.render("movie_info.html", movie_info=render_info)
        else:
            self.send_error()

class MovieProcHandler(BaseHandler):
    """
    电影信息管理
    """

