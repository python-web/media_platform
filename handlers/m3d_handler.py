#! /usr/bin/env python
# -*- coding: UTF-8 -*-
from handlers.base_handler import BaseHandler

class M3DHandler(BaseHandler):
    def get(self, *args, **kwargs):
        self.render("3d.html")
