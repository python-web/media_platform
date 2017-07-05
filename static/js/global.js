/**
 * Created by lee on 2017/6/29.
 */

jQuery.support.cors = true;
var ajaxUrl = "http://180.76.184.135:8002/";

$.ajaxSetup({
    error: function (XMLHttpRequest, textStatus, errorThrown) {
        jsprint("错误：" + XMLHttpRequest + "|" + +textStatus + "|" + errorThrown);
    },
    beforeSend: function (XMLHttpRequest) {
        //        if (window.parent.frames.length > 0) {
        //            if ($.cookie('username') == null || $.cookie('password') == null) {
        //                window.parent.frames.location.href = "/login.htm";
        //            }
        //        }
    },
    complete: function (XMLHttpRequest, textStatus) {
        if ($.cookie('token') == null) {
            if (window.parent.frames.length > 0) {
                window.parent.frames.location.href = "../login.htm";
            }
        }
    }
});
