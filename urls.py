#! /usr/bin/env python
# -*- coding: UTF-8 -*-

from handlers.home_handler import HomeHandler
from handlers.play_handler import PlayHandler
from handlers.movie_handler import MovieHandler, MovieInfoHandler, MoviePageHandler
from handlers.tv_handler import TVHandler, TVInfoHandler, TVPageHandler
from handlers.cartoon_handler import CartoonHandler
from handlers.m3d_handler import M3DHandler
from handlers.search_handler import SearchHandler
urls = [(r"/", HomeHandler)\
    , (r"/home", HomeHandler)\
    , (r"/play/(.*)/(.*)", PlayHandler)\
    , (r"/movie", MovieHandler) \
    , (r"/movie/page/(.*)", MoviePageHandler)\
    , (r"/movie/(.*)", MovieInfoHandler)\
    , (r"/cartoon", CartoonHandler) \
    , (r"/tv", TVHandler) \
    , (r"/tv/page/(.*)", TVPageHandler)\
    , (r"/tv/(.*)", TVInfoHandler)\
    , (r"/3D", M3DHandler)\
    , (r"/search", SearchHandler)]
