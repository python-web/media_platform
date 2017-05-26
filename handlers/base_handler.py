#! /usr/bin/env python
# -*- coding: UTF-8 -*-

import json
from utils.common_data import UserType, UserInfoName, UserInfoTableName, CurrentUserName
from torndsession.sessionhandler import SessionBaseHandler

class RenderInfo():
    def __init__(self, content):
        if content and isinstance(content, dict):
            for key, item in content.items():
                if not hasattr(self, key):
                    setattr(self, key, item)

class BaseHandler(SessionBaseHandler):
    def set_default_headers(self):
        self.set_header("Access-Control-Allow-Origin", "*")

    def initialize(self):
        self.db = self.settings.get("database")
    def prepare(self):
        self.power = UserType.Guest

        #检测是否登录
    def check_login(self):
        try:
            assert type(self.current_user) is dict
            assert self.current_user.has_key(UserInfoTableName.UserName)
        except AssertionError:
            if self.get_cookie(UserInfoName):
                self.clear_cookie(UserInfoName)
            if self.request.path == "/":
                self.redirect("/home")
    def set_session(self, user):
        try:
            assert ("_id" in user and UserInfoTableName.UserName in user)
            session = {UserInfoTableName.ID:str(user[UserInfoTableName.ID])\
                , UserInfoTableName.UserName:user[UserInfoTableName.UserName]\
                , UserInfoTableName.UserName:user[UserInfoTableName.UserName]\
                , UserInfoTableName.Power:user[UserInfoTableName.Power]\
                , UserInfoTableName.LoginTime:user[UserInfoTableName.LoginTime]}
            self.session.set(CurrentUserName, session)
            return session
        except:
            return None


    def get_current_user(self):
        try:
            user = self.session.get(CurrentUserName)
            if not user and self.get_cookie(UserInfoName):
                scookie = self.get_secure_cookie(UserInfoName)
                user = json.loads(scookie)
                if not self.set_seesion(user):
                    assert False
        except:
            user = None
        return user
