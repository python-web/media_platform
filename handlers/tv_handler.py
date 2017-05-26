#! /usr/bin/env python
# -*- coding: UTF-8 -*-

import tornado.web
import tornado.gen
from handlers.base_handler import BaseHandler

class TVHandler(BaseHandler):
    @tornado.web.asynchronous
    @tornado.gen.coroutine
    def get(self, *args, **kwargs):
        cursor = self.db.tv.find()
        tv_list = []
        item_list = yield cursor.to_list(length=10)
        for item in item_list:
            render_info = TVRenderInfo(item)
            if hasattr(render_info, "tv_image_path"):
                render_info.tv_image_path = self.static_url(render_info.tv_image_path)
            tv_list.append(render_info)
        self.render("tv.html", tv_info=tv_list)


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

            render_info = TVRenderInfo(tv_info)
            if hasattr(render_info, "tv_image_path"):
                render_info.tv_image_path = self.static_url(render_info.tv_image_path)
            self.render("tv_info.html", tv_info=render_info)
        else:
            self.send_error()