// ==UserScript==
// @name              全网解析hGze8h!@nPorO^
// @namespace         全网解析hGze8h!@nPorO^
// @version           1.1.0
// @description       解析脚本(不定时更新)
// @author            Lukas
// @icon              data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAgCAYAAACVU7GwAAABgUlEQVRYhe2W33HCMAzGPUJH8EkLdIMyQjYoG5THSC/NBnQDGKEbJBvAnZXwGDaADeiD49SBlPy5QKAX330vvrP8i6R8lhKkWJBPDyPgjRodokYllPKW0eFMkE8GKVE3WAY4EuSTAY4q+0jJBDVBTVBPB5VqfhWkWICWuY5ebga10/TmZIA/rkG5oEXggyC994ES4JV/rwBvKlB1agPlPw9Gh7NOUE2ObpASJwHatoFKkeeC/H0Gt2oqqZepvX+vATr27qmyJ4rMGB3OBHjvlzQF/myCGrTRz6H8ffe1NhOU15X0rlBKKbXTob4oKVLsl/TuUG5lSEG112gxKpQALaxVlJlaj5Yp2/CUV/7osXrK9tHvWG2AjinyvO5sJygbtFDhrE1QGVIgQEu/d1Lgr/Y+Rbl/ryv5YI5ukJKdDvU1mGvn6x0dOHISpHVrKOB9hhS0gTk/b13cu7cw4N5TggvYBeYC6t/PUxPUBPW0ULWObufveHC59/EvR3d0DyOg7Q+CgAuYIqmDFAAAAABJRU5ErkJggg==
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
        { name:"线路一 (速度慢,可选线)", type:"1", url:"https://2.08bk.com/?url="},
        { name:"线路二 (速度中,不可选线)", type:"1", url:"https://www.administrator5.com/index.php?url="},
        { name:"更多线路正在寻找... 敬请期待!", type:"1", url:"https://www.baidu.com/baidu?wd="},
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
        { url:"vip.1905.com", node:"#player"},
    ];
    for(var i in player_nodes) {
        if (player_nodes[i].url == host) {
            node = player_nodes[i].node;
        }
    }

    var videoPlayer = $("<div id='iframe-div' style='width:100%;height:100%;z-index:1000;'><iframe id='iframe-player' frameborder='0' allowfullscreen='true' width='100%' height='100%'></iframe></div>");
    var ImgBase64 =`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE7WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTAyLTAyVDE4OjI0OjA2KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wMi0wMlQxODoyNzo0MSswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0wMi0wMlQxODoyNzo0MSswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjVlMDVkYjQtOWZkNy0zYjRmLThmMTgtOWE1NWEzYmNkNWViIiB4bXBNTTpEb2N1bWVudElEPSJ4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`;
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
<div style='font-size:20px; text-align:center; color:#389fff; line-height:21px;'>VIP视频解析</div>
<ul style='margin:0 10px;'>
` + innerli + `
<div style='clear:both;'></div>
`);

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
})();
