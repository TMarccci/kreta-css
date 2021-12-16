// ==UserScript==
// @name        Kreta CSS
// @namespace   Violentmonkey Scripts
// @match       https://idp.e-kreta.hu/*
// @run-at      document-start
// @version     1.1
// @author      TMarccci
// @resource   IMPORTED_CSS https://raw.githubusercontent.com/TMarccci/kreta-css/main/login.css
// @grant      GM_getResourceText
// @grant      GM_addStyle
// @updateURL  https://raw.githubusercontent.com/TMarccci/kreta-css/main/login.js
// @downloadURL https://raw.githubusercontent.com/TMarccci/kreta-css/main/login.js
// ==/UserScript==


const my_css = GM_getResourceText("IMPORTED_CSS")
GM_addStyle (my_css);