// ==UserScript==
// @name        Kreta CSS/3
// @namespace   Violentmonkey Scripts/3
// @match       https://*.e-kreta.hu/*
// @run-at      document-start
// @version     1.0
// @author      TMarccci
// @description 9/14/2021, 9:29:46 PM
// @resource   IMPORTED_CSS https://raw.githubusercontent.com/TMarccci/kreta-css/main/site.css
// @grant      GM_getResourceText
// @grant      GM_addStyle
// @updateURL  https://raw.githubusercontent.com/TMarccci/kreta-css/main/site.js
// @downloadURL https://raw.githubusercontent.com/TMarccci/kreta-css/main/site.js
// ==/UserScript== 


const my_css = GM_getResourceText("IMPORTED_CSS")
GM_addStyle (my_css);