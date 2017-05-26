#! /usr/bin/env python
# -*- coding: UTF-8 -*-

import tornado
import tornado.web
import tornado.httpserver
import tornado.autoreload
import tornado.ioloop
from tornado.options import define, options
from etc import etc
from urls import urls

import os.path
import configparser

from motor import MotorClient

define("port", default=8002, help="run on the given port", type=int)

class MediaApp(tornado.web.Application):
    def __init__(self):
        handler = urls
        settings = etc
        tornado.web.Application.__init__(self, handler, **settings)

def start_media_app(db_config_name):
    if os.path.exists(db_config_name) and os.path.isfile(db_config_name):
        config = configparser.ConfigParser()
        config.read(db_config_name)
    mongo_url = config.get('mongodb', 'config')
    mongo_db_name = config.get('mongodb', 'db')
    client = MotorClient(mongo_url)
    db = client[mongo_db_name]
    etc.update({"database": db})
    server = tornado.httpserver.HTTPServer(MediaApp())
    server.listen(options.port)
    tornado.autoreload.start(tornado.ioloop.IOLoop.instance())
    tornado.ioloop.IOLoop.instance().start()

if __name__ == "__main__":
    db_name = "mongodb.ini"
    start_media_app(db_name)


