// ==UserScript==
// @name        Kreta CSS/4
// @namespace   Violentmonkey Scripts/4
// @match       https://eugyintezes.e-kreta.hu/*
// @run-at      document-start
// @version     1.0
// @author      TMarccci
// @description 9/14/2021, 9:29:46 PM
// @resource   IMPORTED_CSS https://raw.githubusercontent.com/TMarccci/kreta-css/main/eugyintezes.css
// @grant      GM_getResourceText
// @grant      GM_addStyle
// @updateURL  https://raw.githubusercontent.com/TMarccci/kreta-css/main/eugyintezes.js
// @downloadURL https://raw.githubusercontent.com/TMarccci/kreta-css/main/eugyintezes.js
// ==/UserScript==


const my_css = GM_getResourceText("IMPORTED_CSS")
GM_addStyle (my_css);