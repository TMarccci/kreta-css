// ==UserScript==
// @name        Kreta CSS/2
// @namespace   Violentmonkey Scripts/2
// @match       https://*.e-kreta.hu/Adminisztracio/BelepesKezelo
// @run-at      document-start
// @version     1.1
// @author      TMarccci
// @resource   IMPORTED_CSS https://raw.githubusercontent.com/TMarccci/kreta-css/main/agentselect.css
// @grant      GM_getResourceText
// @grant      GM_addStyle
// @updateURL  https://raw.githubusercontent.com/TMarccci/kreta-css/main/agentselect.js
// @downloadURL https://raw.githubusercontent.com/TMarccci/kreta-css/main/agentselect.js
// ==/UserScript==


const my_css = GM_getResourceText("IMPORTED_CSS")
GM_addStyle (my_css);