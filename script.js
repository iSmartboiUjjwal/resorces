const hurl = "https://filestore-ismartboiujjwal.koyeb.app/watch/969";
const videoUrl = hurl.replace("/watch/", "/dl/");


function vlc() {
    const nlink = videoUrl;
    const vlc = `vlc://${nlink}`;
    window.location.href = vlc;
}

function mx() {
    const nlink = videoUrl;
    const openMx = `intent:${openbisallink}#Intent;package=com.mxtech.videoplayer.ad;end`;
    window.location.href = openMx;
}

function playit() {
    const nlink = videoUrl;
    const pl = `playit://playerv2/video?url=${nlink}`;
    window.location.href = pl;
}

function s() {
    const nlink = videoUrl;
    const sp = `intent:${nlink}#Intent;action=com.young.simple.player.playback_online;package=com.young.simple.player;end`;
    window.location.href = sp;
}

function km() {
    const nlink = videoUrl;
    const km = `intent:${nlink}#Intent;package=com.kmplayer;end`;
    window.location.href = km;
}

function Hd() {
    const nlink = videoUrl;
    const hd = `intent:${nlink}#Intent;package=uplayer.video.player;end`;
    window.location.href = hd;
}

function dl() {
    const nlink = videoUrl;
    window.location.href = nlink;
}
