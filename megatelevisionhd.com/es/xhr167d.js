var rnd = Math.floor(Math.random() * 9999) + 1;

(function (open) {
    XMLHttpRequest.prototype.open = function (method, url, async, user, pass) {
  
var rewrittenUrl = url;

if (url.indexOf("x-live-fox-stgec") != -1) {
     rewrittenUrl = url.replace("x-live-fox-stgec", "x-default-stgec");
}

else if (url.indexOf("cbsi.live.ott.irdeto.com") != -1) {
     //rewrittenUrl = url.replace("https://cbsi.live.ott.irdeto.com/licenseServer/hls/v1/cbsi/key?", "/bm/proxy46.php?id="+btoa(url));
     rewrittenUrl =  "/pp/key.php?id="+btoa(url);
}

else if (url.indexOf("bet.ccp.xcal.tv") != -1) {
     rewrittenUrl =  "data:;base64,v7Ms5p/lzB2/KY4Szl2aLw=="; //nbcsn
}

else if (url.indexOf("getckc") != -1) {
     rewrittenUrl =  "data:;base64,QWTS3tOQQWXPted3GPgBBg==";
}

else if (url.indexOf("vmf.edge-apps.net/keys") != -1) {
     rewrittenUrl = url.replace("https://vmf.edge-apps.net/keys/", "/bm/proxy45.php?id=");
}

else if (url.indexOf("foxmedia.global.ssl.fastly.net") != -1) {
     rewrittenUrl = url.replace("foxmedia.global.ssl.fastly.net", "x-default-stgec.uplynk.com");
}

else if (url.indexOf("d3vxlq79yira0y.cloudfront.net") != -1) {
     rewrittenUrl = url.replace("d3vxlq79yira0y.cloudfront.net", "x-default-stgec.uplynk.com/ause");
}

else if (url.indexOf("media-api") != -1) {
    //rewrittenUrl = "/fox/key.php?url=" + btoa(url); 
    rewrittenUrl = url.replace("https://media-api.foxsportsgo.com/programs/", "/fox/fskey?id=");
}

else if (url.indexOf("mlbnetwork") != -1 && url.indexOf("key") != -1) {
    //rewrittenUrl = url.replace("http://mlbnetwork-ws-key.media.mlb.com/key-service/mlbnKid?kid=", "/tv/mlbnkey.php?id=");
    rewrittenUrl = "https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=fbk&url=" + encodeURIComponent(url);
}

else if (url.indexOf("itv.com") != -1) {
    //rewrittenUrl = "/keys/abcddLe_2.key";
    rewrittenUrl =  "data:;base64,3cDQQ2PABg9KQmwXzhnJag==";
}

else if (url.indexOf("http://") != -1) {
    rewrittenUrl = url.replace("http://", "https://");
}

else if (url.indexOf("east/slate/keys") != -1) {
    //rewrittenUrl = "https://images4-focus-opensocial.googleusercontent.com/gadgets/proxy?container=fbk&url=" + encodeURIComponent(url);
    rewrittenUrl = "/keys/tntkey.php?url=" + btoa(url);
}

else if (url.indexOf("cnn_slate/keys") != -1 || url.indexOf("hln/keys") != -1) {
    //rewrittenUrl = "https://images4-focus-opensocial.googleusercontent.com/gadgets/proxy?container=fbk&url=" + encodeURIComponent(url);
}

else if (url.indexOf("turnerlive.akamaized.net") !== -1) { 
    //rewrittenUrl = url.replace("https://turnerlive.akamaized.net/", "https://tve-live-lln.warnermediacdn.com/");
    //rewrittenUrl = "/keys/tntkey.php?url=" + btoa(url);
    rewrittenUrl = "https://images4-focus-opensocial.googleusercontent.com/gadgets/proxy?container=fbk&url=" + encodeURIComponent(url);
}

else if (url.indexOf("playback.svcs.plus.espn") != -1) {
    rewrittenUrl = url.replace("https://playback.svcs.plus.espn.com/events/", "/espn/espnpkey.php?url=");
    //rewrittenUrl = url.replace("https://playback.svcs.plus.espn.com/events/", "/espn/espnpkeyx.php?url=");
    //rewrittenUrl = "/keys/p2.key";
}

else if (url.indexOf("sony247channels") != -1 && url.indexOf("master_") != -1) {
    //rewrittenUrl = url+"?t="+Math.random().toString(36).substr(2, 5);
}

else if (url.indexOf("sony247channels") != -1 && url.indexOf("master.m3u8") != -1) {
    //rewrittenUrl = url+"&t="+Math.random().toString(36).substr(2, 5);
}

else if (url.indexOf("sony247channels") != -1) {
    //rewrittenUrl = "https://happy.thar101.xyz/proxy.php/"+url;
}

else if (url.indexOf("ctl.nfl.com") != -1) {
    //window.location.reload(false);
    rewrittenUrl = "https://images"+rnd+"-focus-opensocial.googleusercontent.com/gadgets/proxy?container=fbk&refresh=30&url="+ encodeURIComponent(url);
}

else if (url.indexOf("cedexis.cbsaavideo") != -1) {
    rewrittenUrl = "https://images"+rnd+"-focus-opensocial.googleusercontent.com/gadgets/proxy?container=blogger&url="+encodeURIComponent(url);
    //rewrittenUrl = "https://cdncbsall.azureedge.net/gadgets/proxy?container=focus&url="+encodeURIComponent(url);
}

else if (url.indexOf("ustvnowmsl2") != -1) {
     rewrittenUrl = url.replace("ustvnowmsl2", "ustvnowmsl");
}

else if (url.indexOf("foxsportsgo") != -1) {
    //rewrittenUrl = "https://images"+rnd+"-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&url="+encodeURIComponent(url);
}

else if (url.indexOf("fite.tv") != -1 && url.indexOf('hls.key') != -1){
rewrittenUrl =  "data:;base64,y7VZB7qQpa2iy8FtfA6J3w==";
}

else rewrittenUrl = url

open.call(this, method, rewrittenUrl, async, user, pass);

};
})(XMLHttpRequest.prototype.open);

