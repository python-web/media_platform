#! /usr/bin/env python
# -*- coding: UTF-8 -*-

from handlers.home_handler import HomeHandler
from handlers.play_handler import PlayHandler
from handlers.movie_handler import MovieHandler, MovieInfoHandler
from handlers.tv_handler import TVHandler, TVInfoHandler
from handlers.cartoon_handler import CartoonHandler
from handlers.m3d_handler import M3DHandler
urls = [(r"/", HomeHandler)\
    , (r"/home", HomeHandler)\
    , (r"/play/(.*)/(.*)", PlayHandler)\
    , (r"/movie", MovieHandler) \
    , (r"/movie/(.*)", MovieInfoHandler)\
    , (r"/cartoon", CartoonHandler) \
    , (r"/tv", TVHandler) \
    , (r"/tv/(.*)", TVInfoHandler)\
    , (r"/3D", M3DHandler)]
