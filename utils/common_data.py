#! /usr/bin/env python
# -*- coding: UTF-8 -*-
from enum import IntEnum

from enum import Enum


def to_str(bytes_or_str):
  if isinstance(bytes_or_str, bytes):
    value = bytes_or_str.decode('utf-8')
  else:
    value = bytes_or_str
  return value # Instance of str

class MediaType(Enum):
    TV = 0
    Movie = 1
    Cartoon = 2
    M3D = 3

class MediaTypeName(Enum):
    TVName = "tv"
    MovieName = "movie"
    CartoonName = "cartoon"
    M3D = "3d"
class UserType(IntEnum):
    Admin = 0
    User = 1
    Guest = 2

UserInfoName = "user_info"
CurrentUserName = "current_user"

class UserInfoTableName(Enum):
    ID = "_id"
    UserName="username"
    Power="power"
    LoginTime="time"

class MovieInfoName(Enum):
    ID = "movie_id"
    Name = "movie_name"
    ImagePath = "movie_image_path"
    Born = "movie_born"
    Categeroy = "movie_category"
    Score = "movie_score"
    Performer = "movie_performer"
    Content = "movie_content"
    PlayUrl = "movie_play_url"

class TVInfoName(Enum):
    ID = "tv_id"
    Name = "tv_name"
    ImagePath = "tv_image_path"
    Born = "tv_born"
    Categeroy = "tv_category"
    Score = "tv_score"
    Performer = "tv_performer"
    Content = "tv_content"
    PlayUrl = "tv_play_url"
    Index = "tv_index"
    State = "tv_state"
    Area = "tv_area"
    Language = "tv_language"

class MovieInfo():
    def __init__(self, id, category=None\
                 , name=None\
                 , score=None\
                 , performer=None\
                 , born=None\
                 , image_path=None):
        self._movie_id = id
        self._born = born
        self._category = category
        self._movie_name = name
        self._score = score
        self._performer = performer
        self._image_path = image_path
        self._play_url = None

    @property
    def play_url(self):
        return "/play/{0}".format(self._movie_id)

    @property
    def image_path(self):
        return self._image_path

    @property
    def movie_id(self):
        return self._movie_id

    @property
    def born(self):
        return self._born

    @property
    def category(self):
        return self._category

    @property
    def movie_name(self):
        return self._movie_name

    @property
    def score(self):
        return self._score

    @property
    def performer(self):
        return self._performer
class MediaType(Enum):
    M3U8= "application/vnd.apple.mpegurl"
    MP4 = "video/mp4"
    FLV = "video/flv"
class TVPlayURL():
    def __init__(self):
        self._media_type = self._resolution_type = self._profile = self._src = ""
    @property
    def src(self):
        return self._src
    @src.setter
    def src(self, src):
        self._src = src
    @property
    def resolution_type(self):
        return self._resolution_type
    @resolution_type.setter
    def resolution_type(self, type):
        self._resolution_type = type
    @property
    def profile(self):
        return self._profile
    @profile.setter
    def profile(self, profile):
        self._profile = profile
    @property
    def media_type(self):
        return self._media_type
    @media_type.setter
    def media_type(self, media_type):
        self._media_type = media_type
