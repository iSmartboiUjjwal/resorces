const hurl = window.location.href;
const videoUrl = hurl.replace("/watch/", "/dl/");


function openExternalPlayer(playerName) {
    const playerUrl = getPlayerUrl(playerName);
    if (playerUrl) {
        launchPlayer(playerUrl);
    } else {
        alert('Player not supported');
    }
}

function getPlayerUrl(playerName) {
    switch (playerName) {
        case 'MX Player':
            return `intent:${videoUrl}#Intent;package=com.mxtech.videoplayer.ad;end`;
        case 'VLC Player':
            return `vlc://${videoUrl}`;
        case 'PlayIt':
            return `playit://playerv2/video?url=${videoUrl}`;
        case 'SPlayer':
            return `intent:${videoUrl}#Intent;action=com.young.simple.player.playback_online;package=com.young.simple.player;end`;
        default:
            return '';
    }
}

function launchPlayer(url) {
    window.open(url, '_blank');
}

function startFastDownload() {
    window.location.href = videoUrl;
}
