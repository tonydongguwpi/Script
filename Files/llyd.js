/*
流利说•阅读 

因缓存机制，使用脚本后可能需要重装一次「流利说•阅读」后方可生效；生效标志是点进详解不再有限制
Surge:
http-response ^https?:\/\/vira\.llsapp\.com\/api\/v2\/readings\/(accessible|limitation) requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/otherbanana/Script/master/Files/llyd.js

Quantumult X:
^https?:\/\/vira\.llsapp\.com\/api\/v2\/readings\/(accessible|limitation) rurl script-response-body Myself/llyd.js


MitM = vira.llsapp.com

*/

if ($response.status == 200 && $request.method == 'GET') {
 const bodyObj = JSON.parse($response.body);

 if ($request.url.indexOf('limitation') != -1) {
  bodyObj.modules = [];
  bodyObj.auditionDuration = 72000;
 } else {
  bodyObj.from = 1482071586
  bodyObj.to = 1671373986
 }

 $done({body: JSON.stringify(bodyObj)})
} else {
 $done({})
}