const hurl = "https://filestore-ismartboiujjwal.koyeb.app/watch/969";
const videoUrl = hurl.replace("/watch/", "/dl/");


function vlc() {
    const nlink = videoUrl;
    const vlc = `vlc://${nlink}`;
    window.location.href = vlc;
}

function mx() {
    const nlink = videoUrl;
    const openMx = `intent:${nlink}#Intent;package=com.mxtech.videoplayer.ad;end`;
    window.location.href = openMx;
}

function playit() {
    const nlink = videoUrl;
    const pli = `playit://playerv2/video?url=${nlink}`;
    window.location.href = pli;
}

function s() {
    const nlink = videoUrl;
    const spl = `intent:${nlink}#Intent;action=com.young.simple.player.playback_online;package=com.young.simple.player;end`;
    window.location.href = spl;
}

function km() {
    const nlink = videoUrl;
    const kmp = `intent:${nlink}#Intent;package=com.kmplayer;end`;
    window.location.href = kmp;
}

function hd() {
    const nlink = videoUrl;
    const hdp = `intent:${nlink}#Intent;package=uplayer.video.player;end`;
    window.location.href = hdp;
}

function dl() {
    const nlink = videoUrl;
    window.location.href = nlink;
}
