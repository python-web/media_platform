#! /usr/bin/env python
# -*- coding: UTF-8 -*-
from you_get import *
from you_get.extractors import *
from you_get.common import *

def get_acfan(url):
    acfun_download(url, info_only=True)

def get_bilibili(url):
    bilibili_download(url)

def get_letv(url):
    urls = letv_download(url, info_only=True)
    for item in urls:
        print("urls:{0}".format(item))
if __name__ == "__main__":
    # result = iqiyi.download_playlist("http://www.iqiyi.com/v_19rr794vlc.html?src=focustext_1_20130410_1", info_only=True)
    # result = iqiyi.download("http://www.iqiyi.com/v_19rr794vlc.html?src=focustext_1_20130410_1", info_only=True)
    # result = iqiyi.download("http://www.iqiyi.com/dianying/20120618/f0faf21d5f12f65e.html#vfrm=2-4-0-1", info_only=True)
    # site = iqiyi.Iqiyi()
    # site.download_by_url("http://www.iqiyi.com/dianying/20120618/f0faf21d5f12f65e.html#vfrm=2-4-0-1", info_only=True)
    # print("result:{0}".format(site.streams))
    # result = iqilu_download()

    #bilibili can play in html5 player
    # json_output = True
    # bilibili_mp4_url = "http://www.bilibili.com/video/av10767461/"
    # get_bilibili(bilibili_mp4_url)
    #acfan
    # acfan_url = "http://www.acfun.cn/v/ac3728795"
    # get_acfan(acfan_url)
    #letv
    letv_url  = "http://www.le.com/ptv/vplay/1756257.html"
    get_letv(letv_url)


