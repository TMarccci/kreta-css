// ==UserScript==
// @name        Kreta CSS
// @namespace   Violentmonkey Scripts
// @match       https://idp.e-kreta.hu/*
// @run-at      document-start
// @version     1.0
// @author      TMarccci
// @description 9/14/2021, 9:29:46 PM
// @resource   IMPORTED_CSS https://raw.githubusercontent.com/TMarccci/kreta-css/main/login.css
// @grant      GM_getResourceText
// @grant      GM_addStyle
// ==/UserScript==


const my_css = GM_getResourceText("IMPORTED_CSS")
GM_addStyle (my_css);