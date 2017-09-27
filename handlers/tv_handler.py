#! /usr/bin/env python
# -*- coding: UTF-8 -*-

import tornado.web
import tornado.gen
from tornado.log import access_log
from handlers.base_handler import BaseHandler

class TVHandler(BaseHandler):
    @tornado.web.asynchronous
    @tornado.gen.coroutine
    def get(self, *args, **kwargs):
        cursor = self.db.tv.find()
        tv_list = []
        item_list = yield cursor.to_list(None)
        for item in item_list:
            render_info = TVRenderInfo(item)
            if hasattr(render_info, "tv_image_path"):
                render_info.tv_image_path = self.static_url(render_info.tv_image_path)
            tv_list.append(render_info)
        if 30 < len(tv_list):
            tv_list = tv_list[0:30]
        cur_page_index = 1
        page_count = int(len(item_list)/30) +1
        self.render("tv.html", tv_info=tv_list, cur_page_index=cur_page_index, page_count=page_count)

class TVRenderInfo():
    # def __init__(self, tv_id=None, tv_name=None, tv_performer=None\
    #              , tv_born=None, tv_content=None, tv_image_path=None\
    #              , tv_categeory=None, tv_count=None, tv_state=None, tv_area=None, tv_language=None):
    #     pass

    def __init__(self, content):
        if content and isinstance(content, dict):
            for key, item in content.items():
                if not hasattr(self, key):
                    setattr(self, key, item)


class TVInfoHandler(BaseHandler):

    @tornado.web.asynchronous
    @tornado.gen.coroutine
    def get(self, *args, **kwargs):
        if args and 0 < len(args):
            tv_id = args[0]
            tv_info = yield self.db.tv.find_one({"tv_id":tv_id})
            access_log.info(tv_info)
            render_info = TVRenderInfo(tv_info)
            if hasattr(render_info, "tv_image_path"):
                render_info.tv_image_path = self.static_url(render_info.tv_image_path)
            self.render("tv_info.html", tv_info=render_info)
        else:
            self.send_error()

class TVPageHandler(BaseHandler):
    @tornado.web.asynchronous
    @tornado.gen.coroutine
    def get(self, *args, **kwargs):
        cursor = self.db.tv.find()
        #movie_list = []
        item_list = yield cursor.to_list(None)
        page_count = int(len(item_list)/30) +1
        page_index = int(args[0])
        if page_index and page_index < page_count:
            render_list = item_list[30*(page_index-1):page_index*30]
        else:
            render_list = item_list[30*(page_index-1):]
        tv_list = []
        for item in render_list:
            render_info = TVRenderInfo(item)
            if hasattr(render_info, "tv_image_path"):
                render_info.tv_image_path = self.static_url(render_info.tv_image_path)
            tv_list.append(render_info)
        self.render("tv.html", tv_info=tv_list, cur_page_index=page_index, page_count=page_count)
