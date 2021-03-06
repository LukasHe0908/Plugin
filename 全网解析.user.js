// ==UserScript==
// @name              全网解析
// @namespace         Lukas
// @version           1.2.14
// @description       自用解析脚本
// @author            Lukas
// @icon              https://cdn.jsdelivr.net/gh/LukasHe0908/imgur@main/img/%E5%85%A8%E7%BD%91%E8%A7%A3%E6%9E%90.user.js.22uhef9d3cyo.png
// @updateURL         https://cdn.jsdelivr.net/gh/LukasHe0908/Plugin@main/%E5%85%A8%E7%BD%91%E8%A7%A3%E6%9E%90.user.js
// @downloadURL       https://cdn.jsdelivr.net/gh/LukasHe0908/Plugin@main/%E5%85%A8%E7%BD%91%E8%A7%A3%E6%9E%90.user.js
// @homepage          https://github.com/LukasHe0908/Plugin
// @supportURL        https://github.com/LukasHe0908/Plugin/blob/main/README.md
// @compatible        chrome
// @compatible        firefox
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
        { name:"线路四*", type:"1", url:"https://www.h8jx.com/jiexi.php?url="},
        { name:"线路五*", type:"1", url:"https://jsap.attakids.com/?url="},
        { name:"线路六", type:"1", url:"https://jx.m3u8.tv/jiexi/?url="},
        { name:"线路七", type:"1", url:"https://www.41478.net/?url="},
        { name:"线路八", type:"1", url:"https://jx.yparse.com/index.php?url="},
        { name:"线路九", type:"1", url:"https://jx.youyitv.com/?url="},
        { name:"线路十*", type:"1", url:"https://www.8090.la/api/?url="},
        { name:"线路十二", type:"1", url:"https://okjx.cc/?url="},
        { name:"线路十二^", type:"1", url:"https://www.administrator5.com/index.php?url="},
        { name:"线路十三", type:"1", url:"https://www.cuan.la/m3u8.php?url="},
        //--------------------------------------------------------------------------------------
        { name:"Parwix解析*", type:"2", url:"https://vip.parwix.com:4433/player/?url="},
        { name:"枫林解析", type:"2", url:"https://titan.mgtv.com.imaple.co/player/?url="},
        { name:"万能解析", type:"2", url:"https://www.cuan.la/m3u8.php?url="},
        { name:"380k解析", type:"2", url:"https://jiexi.380k.com/?url="},
        { name:"云解析", type:"2", url:"https://jx.yparse.com/index.php?url="},
        { name:"tv920解析", type:"2", url:"https://api.tv920.com/vip/?url="},
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
<div style='font-size:12px; text-align:center; color:#389fff; line-height:15px;'>*代表占用高,^代表速度慢</div>
<div style='font-size:20px; text-align:center; color:#389fff; line-height:21px;'>VIP视频解析（内嵌)</div>
<ul style='margin:0 10px;'>
` + innerli + `
<div style='clear:both;'></div>
</ul>
<div style='font-size:20px; text-align:center; color:#389fff; line-height:21px;'>B站大会员解析（内嵌)</div>
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
