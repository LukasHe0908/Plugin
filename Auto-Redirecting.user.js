// ==UserScript==
// @name                自动跳转
// @name:zh-cn          自动跳转
// @name:en             Auto Redirecting
// @description         自动跳转
// @description:zh-cn   自动跳转
// @description:en      Auto Redirecting
// @namespace           Lukas
// @version             0.1.0
// @author              Lukas
// @match               *.jjwxc.net/*
// @grant               none
// ==/UserScript==

(function() {
    var domain = document.domain;
    //alert(domain)
    var url = document.URL;
    //alert(url);
    var arrUrl = url.split("//");
    var arrWord=arrUrl[1].split(".");
    var country=arrWord[0];
    if(domain!="jjwxc.net"){
        window.location.href="http://jjwxc.net/";
    }
})();