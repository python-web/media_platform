#! /usr/bin/env python
# -*- coding: UTF-8 -*-
import re
import tornado.gen
import tornado.web
from handlers.base_handler import BaseHandler, RenderInfo
from utils.common_data import MovieInfoName
PageCount=30

class SearchItem(RenderInfo):
    def __init__(self, id, name, image_url,**kwargs):
        self._id = id
        self._image_url = image_url
        self._name = name


class SearchHandler(BaseHandler):

    @tornado.web.asynchronous
    @tornado.gen.coroutine
    def get(self, *args, **kwargs):
        keyword = self.get_argument("search_key", "")
        search_items = []
        if keyword:
            pattern = re.compile(".*{0}.*".format(keyword))
            movie_query = {"movie_name":keyword}
            tv_query = {"tv_name":keyword}
            movie_find_count = yield self.db.movie.find(movie_query).count()
            tv_find_count = yield self.db.tv.find(tv_query).count()
            movie_cursor = self.db.movie.find(movie_query).limit(PageCount)
            movie_info = yield movie_cursor.to_list(None)
            tv_cursor = self.db.tv.find(tv_query).limit(PageCount)
            tv_info = yield tv_cursor.to_list(None)
            print("tv:{0} movie:{1}".format(tv_info, movie_info))
            for item in movie_info:
                search_item = SearchItem(item.get(MovieInfoName.ID.value)\
                                         , item.get(MovieInfoName.Name.value) \
                                         , self.static_url(item.get(MovieInfoName.ImagePath.value)))
                search_items.append(search_item)
        self.render("search.html", keyword=keyword, search_items=search_items)

    def post(self, *args, **kwargs):
        keyword = self.get_argument("keyword")
        pattern = re.compile(".*{0}.*".format(keyword))
        movie_query = {"movie_name":keyword}
        tv_query = {"tv_name":keyword}
        movie_find_count = yield self.db.movie.find(movie_query).count()
        tv_find_count = yield self.db.tv.find(tv_query).count()
        movie_cursor = self.db.movie.find(movie_query).limit(PageCount)
        movie_info = yield movie_cursor.to_list(None)
        tv_cursor = self.db.tv.find(tv_query).limit(PageCount)
        tv_info = yield tv_cursor.to_list(None)
        print("tv:{0} movie:{1}".format(tv_info, movie_info))
        search_items = []
        self.render("search.html", keyword=keyword, search_items=search_items)
        pass