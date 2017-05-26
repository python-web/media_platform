#! /usr/bin/env python
# -*- coding: UTF-8 -*-

from handlers.base_handler import BaseHandler

class CartoonHandler(BaseHandler):
    def get(self, *args, **kwargs):
        self.render("cartoon.html")