// ==UserScript==
// @name              全网解析
// @namespace         Lukas
// @version           1.2.5
// @description       自用解析脚本
// @author            Lukas
// @icon              data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAJmElEQVR4nO2d0VUbORiFXYLkCiiBDpYS6AB3sOlg6cC8SH6EDqAD0kHyLPmcSQfQQfbBZAks0WiMRlcjf/ec7zH4/++f6xlpZHu1QgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIILVRmOxjj91fWx3vrwre1jz9/YVzYjP37tQ93v/+bWozV1mpdS6hPVZt14Zv18d74/ZXZDWc5Ps4q4/dX1sWnpRpqdvGiybpaD8mIb8ra3uDCrSQoZjsY6+N9TpHWxSfjwvn43wvfaxs4VlurdS2hPlVtH9bq95djXhaT2Q7m/a1UVpEjST783fijvoHhm9kOpr26xj1r2TdlbR+Re1X+tNYu3M5mqAvn1sdnxbBbrWvMM3V9rdb2EbOHxOziRQ1DJQa6cNtiXTmeteybtLYPyLl1PVrWx8dKhm4k5vn4pcW6cjxr2Tepd+/IfcOZrKLvAi5ej76ej180w04v6FR1rd3+JmtOjfom9e59rRm7cJO1dvG6aJGNbv/m7NCw/Xucb0rv3hLucnycJOvj1xkGPmqodfGh+rB9GMYWx4q61j7vnbpl35TevdYZv+Z4OEnWh6F4oQ3vp4/ubDX8DKJl35S1/c5YjZM1m6F+/F3n5cFk/a3CsZ0tUV3Wxaes7d9GfZPW9sJYfZM178DbfUYytqHAM5LjfJPW5hcWkIOhGe86n3wOcyxji2NVXdbHx5zZteqbsrYc3yapSuEZW5mK/fSstRLPSI7yTVVbjmeTVKvwrO3fwlvO2cMeuaVR1LX2Met2pmXfFLXl+DVJNYtv9Th1zn0/z0iO8612bTleTVJdQ/MuzXM8mxkl45ZGUpfPf0Lcqm81a8upZZJqG5q//SvYTx/b2eIZyVG+1axtrI7Jqm6mz9z+3Q1niq3C8Z0tTV25T7Nb9a1WbWM1TFZtI/8j8zi1aNhjO1s8IznCtxq1jb3+ZNU28Q1Zp3/3l/X/I2Z8UlJQ19rHn9bH+5y5turb3LXleDNJiiH/TtalWbLXn3UKgGckR/g2Z205vkySZMDvyDpO7fY31Yed8W6tqGvt8z7M1LJvc9WW87qTpBju/wzNvDRLnkVknALgGclxvs1RW85rTpJisB+Re2lWbGPm/EdUHfPO/Sx2q76Vri3n9SZJMdQ/kXNpVu31t/v5lrafkdSubey1Jqu2YaPkHWysvo2ZebCR7d8jfCtZ29jrTJYsCAkyd7YEw2738y1th6RebWOvMVnKIPzZ0HaPU+d8VoPt3+N8K1FbzmtMkmSQWYZmHq1Q/Gds+DvAWg5Jjdpy/v4kSYaYSe5+OkIIIYQQQgghhBBCCCGE0EdSP+sAKAkBAUhAQAASEBCABAQEIAEBAUhAQAASEBCABAQEIAEBAUhAQAASEBCABAQEIAEBAUhAQAASEBCABAQEIAEBAUhAQAASEBCABAQEIAEBAUhAQAASEBCABAQEIAEBqcDhd/LCnfHxi9nFi/e/dGVcODc+frEu/lDXCm8hIDNifXw2LmxyfvpttTr8fPHahzt13fAKAZkJ6+JDbjDey+ziBVeTNiidDwLi48+1D3clvDQ+flH8BDS8UmKOb6RuSI318WtJP7nt0lJylqvVioCY3XBW3NTVYSFvffyq7u/UKD5IdUNKrIsPxQ19J+P3l6xP6lF8gOqGlBgXNsUN/UBmO5i1i9esT+an+PDUDSkxLpwXNzQhsxvOWJ/MS/GhqRvqysxMmV28YH2ykJmqG+rKzIkyLmy47Wp8puqGujLzCP1an6i96IXiA1I31JWZn5DZDWfWxQe1J0un+GDUDXVlZgFxbKWxmaob6srMguLYSiMzVTfUlZmFdVif7G/UPi2J4kNQN9SVmTPJ7IYztoVFM1U31JWZM4tjK4KZqhvqysxK4thKxZmqG+rKzIriWH2lmaob6spMgTi2QkCWY6ZQxoUN6xMC0raZYnGsnoC0bWYjOuVjK8XNVDfUlZmN6bA+Cd/VPi96puqGujKzUZ3Ssfri5qkb6srMhnUqx1aKG6duqCszF6Dej60UN0zdUFdmLkjG7y97vO0qbpS6oa7MXJjMdjC9XU2Km6RuqCszF6qedrqKm6NuqCszF6qXK0kXt1vFzVE31JWZC5ZxYaOeR5MzVTfUlZkLVw9nuYqbom6oKzMXrh6+fqi8KQ001Y2ZC5fZxQv1TJqbqbqhrsxcuIwL5+qZNDdTdUMqrIs/ipvZgdRzISCNUPqXpXrQ4dvn9bMhIA1AQP4v1iAfSN0QAWlHPTwLKW6KuiEC0o6sj4/quRCQRiAgb9XD+oOAEJDZZH28V8+EgDQEAXlVD2sPAkJAZpFx4dy6+KSeBwFpDALSXzgICAEppp5uqwgIASmmly9teFT7T0Aa59QCcvjan3Cr9p2ALIRTCsh6F//pba1BQAjIp3X4ap8wqL0mIAuk54C8/GbIo9pjArJgegyI2Q1np7DOICAEZJLMdjCntM4gIDVw8bq4mQIZv786tXUGAanBwgNidvHCuvBN7mNjFDda3ZCMhQbk5UFfFydv56C44eqGZCwsIL/WGXLfGqe48eqGZCwoIMaFv1mA51HcfHVDMhYQkJffGBzkXi2I4kNQNySj4YD0fqBwTooPQ92QCuPCpriZn9SpHCick+JDUTekwuziRXEzPyEe9JWh/GAaaEpBKwE5xQOFc1J8QOqGVJjdcFbczAk65QOFc1J8UOqGujEyUxwoXNhc1Q2pMC6cFzczIQ4U1qH44NQNqTB+f1nczD+IA4X1KD48dUM6wl1xM9+JA4X1KT5EdUNKzHYwxQ1dcaBQSfFhqhtSYn28L+klBwr1lJznarU67YC8sC3hIwcK26DELN9I3VATuHB77O0WBwrbonQ+CMgL1ofB+P3VtGDwoK81CMjMWBef1i7cGr+/Mj7+9SYUPv5lXPibK0a7EBCABAQEIAEBAUhAQAASEBCABAQEIAEBAUhAQAASEBCABAQEIAEBAUhAQAASEBCABAQEIAEBAUhAQAASEBCABAQEIAEBAUhAQAASEBCABMUDYn34rm4KoATWh+/lA+Lig7oxgBJYFx+KB8S4sFE3BlCCWX6Y1WwHY318VjcH8Fnm+rb+1drFa3VzAJ/C7W9mCcdqxVUElo318Xm2q8d/IXHhXN0owDFU+71JFuywNGZZmCdDcvhaf263oGmsj8+1f6n4NSTbwazd/kZtAsB7rI/PaxevZ19z5AbFuLCxLj7wxB1UWB++WxcfjAubJoKBEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBD6hP4FOd7oqwt2LkwAAAAASUVORK5CYII=
// @require           https://cdn.bootcss.com/jquery/3.5.1/jquery.min.js
// @match             *://v.qq.com/x/cover/*
// @match             *://m.v.qq.com/x/cover/*
// @match             *://v.qq.com/x/page/*
// @match             *://m.v.qq.com/x/page/*
// @match             *://m.v.qq.com/*
// @match             *://www.iqiyi.com/v*
// @match             *://m.iqiyi.com/*
// @match             *://www.iqiyi.com/*
// @match             *://m.iqiyi.com/kszt/*
// @match             *://www.iqiyi.com/kszt/*
// @match             *://v.youku.com/v_show/*
// @match             *://m.youku.com/alipay_video/*
// @match             *://w.mgtv.com/b/*
// @match             *://m.mgtv.com/b/*
// @match             *://www.mgtv.com/b/*
// @match             *://tv.sohu.com/v/*
// @match             *://m.tv.sohu.com/v/*
// @match             *://film.sohu.com/album/*
// @match             *://m.film.sohu.com/album/*
// @match             *://www.le.com/ptv/vplay/*
// @match             *://m.le.com/ptv/vplay/*
// @match             *://v.pptv.com/show/*
// @match             *://m.pptv.com/show/*
// @match             *://vip.pptv.com/show/*
// @match             *://www.acfun.cn/v/*
// @match             *://m.acfun.cn/v/*
// @match             *://www.bilibili.com/bangumi/play/*
// @match             *://m.bilibili.com/bangumi/play/*
// @license           GPL License
// @grant             unsafeWindow
// @grant             GM_openInTab
// @grant             GM.openInTab
// @grant             GM_getValue
// @grant             GM.getValue
// @grant             GM_setValue
// @grant             GM.setValue
// @grant             GM_xmlhttpRequest
// @grant             GM.xmlHttpRequest
// @grant             GM_registerMenuCommand
// ==/UserScript==

(function () {
    'use strict';
    var $ = $ || window.$;
    var log_count = 1;
    var host = location.host;
    var parseInterfaceList = [];
    var selectedInterfaceList = [];
    var originalInterfaceList = [
        { name:"线路一", type:"1", url:"https://z1.m1907.cn/?jx="},
        { name:"线路二", type:"1", url:"https://vip.66parse.club/?url="},
        { name:"线路三", type:"1", url:"https://api.tv920.com/jx/?url="},
        { name:"线路四", type:"1", url:"https://www.h8jx.com/jiexi.php?url="},
        { name:"线路五", type:"1", url:"https://jsap.attakids.com/?url="},
        { name:"线路六", type:"1", url:"https://jx.m3u8.tv/jiexi/?url="},
        { name:"线路七", type:"1", url:"https://www.41478.net/?url="},
        { name:"线路八", type:"1", url:"https://jx.yparse.com/index.php?url="},
        { name:"线路九", type:"1", url:"https://jiexi.q-q.wang/?url="},
        { name:"线路十", type:"1", url:"https://jx.youyitv.com/?url="},
        { name:"线路十一", type:"1", url:"https://api.bingdou.net/?url="},
        { name:"线路十二", type:"1", url:"https://www.8090.la/api/?url="},
        { name:"线路十三", type:"1", url:"https://okjx.cc/?url="},
        { name:"线路十三", type:"1", url:"https://www.administrator5.com/index.php?url="},
        { name:"线路十四", type:"1", url:"https://www.cuan.la/?url="},
        //--------------------------------------------------------------------------------------
        { name:"思古解析", type:"2", url:"https://jsap.attakids.com/?url="},
        { name:"380k解析", type:"2", url:"https://jiexi.380k.com/?url="},
        { name:"冰豆解析", type:"2", url:"https://api.bingdou.net/?url="},
        { name:"云解析", type:"2", url:"https://jx.yparse.com/index.php?url="},
        { name:"tv920解析", type:"2", url:"https://api.tv920.com/vip/?url="},
        { name:"全网解析", type:"2", url:"https://jx.116kan.com/?url="},
        { name:"金桥解析", type:"2", url:"http://5.nmgbq.com/jx.php?url="},
        { name:"万能解析", type:"2", url:"https://www.cuan.la/?url="},
    ];


    function innerParse(url) {
        $("#iframe-player").attr("src", url);
    }


    function GMopenInTab(url, open_in_background) {
        if (typeof GM_openInTab === "function") {
            GM_openInTab(url, open_in_background);
        } else {
            GM.openInTab(url, open_in_background);
        }
    }


    function GMgetValue(name, value) {
        if (typeof GM_getValue === "function") {
            return GM_getValue(name, value);
        } else {
            return GM.getValue(name, value);
        }
    }


    function GMsetValue(name, value) {
        if (typeof GM_setValue === "function") {
            GM_setValue(name, value);
        } else {
            GM.setValue(name, value);
        }
    }


    function GMaddStyle(css) {
        var myStyle = document.createElement('style');
        myStyle.textContent = css;
        var doc = document.head || document.documentElement;
        doc.appendChild(myStyle);
    }

    var node = "";
    var player_nodes = [
        { url:"v.qq.com", node:"#mod_player"},
        { url:"www.iqiyi.com", node:"#flashbox"},
        { url:"v.youku.com", node:"#player"},
        { url:"w.mgtv.com", node:"#mgtv-player-wrap"},
        { url:"www.mgtv.com", node:"#mgtv-player-wrap"},
        { url:"tv.sohu.com", node:"#player"},
        { url:"film.sohu.com", node:"#playerWrap"},
        { url:"www.le.com", node:"#le_playbox"},
        { url:"video.tudou.com", node:".td-playbox"},
        { url:"v.pptv.com", node:"#pptv_playpage_box"},
        { url:"vip.pptv.com", node:".w-video"},
        { url:"www.wasu.cn", node:"#flashContent"},
        { url:"www.acfun.cn", node:"#player"},
        { url:"www.bilibili.com", node:"#player_module"},
        { url:"vip.1905.com", node:"#player"},
    ];
    for(var i in player_nodes) {
        if (player_nodes[i].url == host) {
            node = player_nodes[i].node;
        }
    }

    var videoPlayer = $("<div id='iframe-div' style='width:100%;height:100%;z-index:1000;'><iframe id='iframe-player' frameborder='0' allowfullscreen='true' width='100%' height='100%'></iframe></div>");
    var ImgBase64 =`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAABiklEQVR4nO3VMU4CURhF4YtBl2DjRqR3D5ZKYsmGCCSExj2AlhRuxEI2gSGRxj9kwvjMnOJ85X0zrzmZzOh+dTjkvM8kuyTLJO+npz6mo7Mv6G+uOt6+S/KY5C3JIslNeUJNjS+47CXJdZLncqJmur6Q356SPJRVgwU5mpVFzfQJMimLBg1yWxY10yeI/pFBYAwCYxAYg8AYBMYgMAaBMQiMQWAMAmMQGIPAGATGIDAGgTEIjEFgDAJjEBiDwBgExiAwBoExCIxBYAwCYxAYg8AYBMYgMAaBMQiMQWAMAmMQGIPAGATGIDAGgTEIjEFgDAJjEBiDwBgExiAwBoExCIxBYAwCYxAYg8AYBMYgMAaBMQiMQWAMAmMQGIPAGATGIDAGgTEIjEFgDAJjEBiDwBgExiAwBoExCIxBYAwCYxAYg8AYBMYgMAaBMQiMQWAMAmMQGIPAGATGIDB9guzLomb6BNmVRYMGmZdFzVwa5DXJtqwaJMg6ybSsamrccdnXzz9jkWRTTtVWkm8mnRNrZqgq5QAAAABJRU5ErkJggg==`;
    var innerList = [];
    var outerList = [];
    var innerli = "";
    var innerli1 = "";
    var outerli = "";
    originalInterfaceList.forEach((item, index) => {
        if (item.type == "0") {
            innerList.push(item);
            innerli1 += "<li>" + item.nme + "</li>";
        }
        if (item.type == "1") {
            innerList.push(item);
            innerli += "<li>" + item.name + "</li>";
        }
        if (item.type == "2") {
            outerList.push(item);
            outerli += "<li>" + item.name + "</li>";
        }
    });
    parseInterfaceList = innerList.concat(outerList);

    var left = 0;
    var top = 100;
    var Position = GMgetValue("Position_" + host);
    if(!!Position){
        left = Position.left;
        top = Position.top;
    }
    GMaddStyle(`#vip_movie_box {cursor:pointer; position:fixed; top:` + top + `px; left:` + left + `px; width:0px; background-color:#2E9AFE; z-index:2147483647; font-size:20px; text-align:left;}
#vip_movie_box .item_text {width:28px; padding:4px 0px; text-align:center;}
#vip_movie_box .item_text img {width:35px; height:35px; display:inline-block; vertical-align:middle;}
#vip_movie_box .vip_mod_box_action {display:none; position:absolute; left:28px; top:0; text-align:center; background-color:#272930; border:1px solid gray;}
#vip_movie_box .vip_mod_box_action li{font-size:12px; color:#DCDCDC; text-align:center; width:60px; line-height:21px; float:left; border:1px solid gray; padding:0 4px; margin:4px 2px;}
#vip_movie_box .vip_mod_box_action li:hover{color:#FF4500;}
#vip_movie_box .selected_text {width:28px; padding:4px 0px; text-align:center;}
#vip_movie_box .selected_text img {width:35px; height:35px;display:inline-block; vertical-align:middle;}
#vip_movie_box .vip_mod_box_selected {display:none; position:absolute; left:28px; top:0; text-align:center; background-color:#F5F6CE; border:1px solid gray;}
#vip_movie_box .vip_mod_box_selected ul{height:455px; overflow-y: scroll;}
#vip_movie_box .vip_mod_box_selected li{font-size:14px; color:#00FF00; text-align:center; width:120px; line-height:27px; float:left; border:1px dashed gray; padding:0 4px; margin:4px 2px;}
#vip_movie_box .vip_mod_box_selected li:hover{color:#FF4500;}`);

    var html = $(`<div id='vip_movie_box'>
<div class='item_text'>
<img src='`+ ImgBase64 +`' title='视频解析'/>
<div class='vip_mod_box_action' >
<div style='display:flex;'>
<div style='width:320px; padding:30px 0;'>
<div style='font-size:20px; text-align:center; color:#389fff; line-height:21px;'>VIP视频解析(内嵌)</div>
<ul style='margin:0 10px;'>
` + innerli + `
<div style='clear:both;'></div>
</ul>
<div style='font-size:20px; text-align:center; color:#389fff; line-height:21px;'>B站大会员解析(内嵌)</div>
<ul style='margin:0 10px;'>
` + outerli + `
<div style='clear:both;'></div>
</ul>`);

    $("body").append(html);

    $(".item_text").on("mouseover", () => {
        $(".vip_mod_box_action").show();
    });
    $(".item_text").on("mouseout", () => {
        $(".vip_mod_box_action").hide();
    });

    $(".selected_text").on("mouseover", () => {
        $(".vip_mod_box_selected").show();
    });
    $(".selected_text").on("mouseout", () => {
        $(".vip_mod_box_selected").hide();
    });

    $(".vip_mod_box_action li").each((index, item) => {
        item.addEventListener("click", () => {
            if (parseInterfaceList[index].type == "1","2") {
                if (document.getElementById("iframe-player") == null) {
                    var player = $(node);
                    player.empty();
                    player.append(videoPlayer);
                }
                innerParse(parseInterfaceList[index].url + location.href);
            }
            if (parseInterfaceList[index].type == "0")
            {
                GMopenInTab(parseInterfaceList[index].url + location.href, false);
            }
        });
    });

    var movie_box = $("#vip_movie_box");
    movie_box.mousedown(function(e) {

        if (e.which == 3) {
            e.preventDefault() //
            movie_box.css("cursor", "move");
            var positionDiv = $(this).offset();
            var distenceX = e.pageX - positionDiv.left;
            var distenceY = e.pageY - positionDiv.top;

            $(document).mousemove(function(e) {
                var x = e.pageX - distenceX;
                var y = e.pageY - distenceY;
                if (x < 0) {
                    x = 0;
                } else if (x > $(document).width() - movie_box.outerWidth(true)) {
                    x = $(document).width() - movie_box.outerWidth(true);
                }
                if (y < 0) {
                    y = 0;
                } else if (y > $(document).height() - movie_box.outerHeight(true)) {
                    y = $(document).height() - movie_box.outerHeight(true);
                }

                movie_box.css("left", x);
                movie_box.css("top", y);
                GMsetValue("Position_" + host,{ "left":x, "top":y});
            });
            $(document).mouseup(function() {
                $(document).off('mousemove');
                movie_box.css("cursor", "pointer");
            });
            $(document).contextmenu(function(e) {
                e.preventDefault();
            })
        }
    });

    var localurl = location.href;
    function addScript(url){
        var s = document.createElement('script');
        s.setAttribute('src',url);
        document.body.appendChild(s);
    }


    switch (host) {
        case 'www.iqiyi.com':
            //--------------------------------------------------------------------------------
            unsafeWindow.rate = 0;
            unsafeWindow.Date.now = () => {
                return new unsafeWindow.Date().getTime() + (unsafeWindow.rate += 1000);
            }
            setInterval(() => {
                unsafeWindow.rate = 0;
            }, 600000);
            //--------------------------------------------------------------------------------
            setInterval(() => {
                if (document.getElementsByClassName("cupid-public-time")[0] != null) {
                    $(".skippable-after").css("display", "block");
                    document.getElementsByClassName("skippable-after")[0].click();
                }
                $(".qy-player-vippay-popup").css("display", "none");
                $(".black-screen").css("display", "none");
            }, 500);
            break
        case 'v.qq.com':
            //--------------------------------------------------------------------------------
            setInterval(() => { //视频广告加速
                $(".txp_ad").find("txpdiv").find("video")[0].currentTime = 1000;
                $(".txp_ad").find("txpdiv").find("video")[1].currentTime = 1000;
            }, 1000)
            //--------------------------------------------------------------------------------
            setInterval(() => {
                var txp_btn_volume = $(".txp_btn_volume");
                if (txp_btn_volume.attr("data-status") === "mute") {
                    $(".txp_popup_volume").css("display", "block");
                    txp_btn_volume.click();
                    $(".txp_popup_volume").css("display", "none");
                }
                //$("txpdiv[data-role='hd-ad-adapter-adlayer']").attr("class", "txp_none");
                $(".mod_vip_popup").css("display", "none");
                $(".tvip_layer").css("display", "none");
                $("#mask_layer").css("display", "none");
            }, 500);
            break
        case 'v.youku.com':
            //--------------------------------------------------------------------------------
            window.onload = function () {
                if (!document.querySelectorAll('video')[0]) {
                    setInterval(() => {
                        document.querySelectorAll('video')[1].playbackRate = 16;
                    }, 100)
                }
            }
            //--------------------------------------------------------------------------------
            setInterval(() => {
                var H5 = $(".h5-ext-layer").find("div")
                if(H5.length != 0){
                    $(".h5-ext-layer div").remove();
                    var control_btn_play = $(".control-left-grid .control-play-icon");
                    if (control_btn_play.attr("data-tip") === "播放") {
                        $(".h5player-dashboard").css("display", "block");
                        control_btn_play.click();
                        $(".h5player-dashboard").css("display", "none");
                    }
                }
                $(".information-tips").css("display", "none");
            }, 500);
            break
        case 'www.mgtv.com':
            break
        case 'tv.sohu.com':
            setInterval(() => {
                $(".x-video-adv").css("display", "none");
                $(".x-player-mask").css("display", "none");
                $("#player_vipTips").css("display", "none");
            }, 500);
            break

        case 'www.bilibili.com':
            setInterval(() => {
                $(".player-limit-mask").remove();
            }, 500);
            break
    }
})();
