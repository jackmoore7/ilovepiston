(function() {
'use strict';

function applyRandomToggle() {
    const index = Math.floor(Math.random() * tracks.length);
    try { localStorage.setItem(storageKey, String(index)); } catch (e) {}
    setTrack(index);
}

const tracks = ['477403989', '325155296'];
const storageKey = 'sc-current-track-index';

function buildSrc(trackId) {
    return `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${trackId}&color=ff5500&inverse=false&auto_play=false&show_user=true`;
}

function setTrack(index) {
    const iframe = document.getElementById('sc-player');
    if (!iframe) return;
    const id = tracks[index];
    iframe.src = buildSrc(id);
    const btn = document.getElementById('change-song-btn');
    if (btn) {
        btn.setAttribute('aria-pressed', String(index !== 0));
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('change-song-btn');
    const iframe = document.getElementById('sc-player');
    if (iframe) {
        let index = parseInt(localStorage.getItem(storageKey), 10);
        if (Number.isNaN(index) || index < 0 || index >= tracks.length) index = 0;
        setTrack(index);

        if (btn) {
            btn.addEventListener('click', function() {
                index = (index + 1) % tracks.length;
                setTrack(index);
                try { localStorage.setItem(storageKey, String(index)); } catch (e) {}
            });

            btn.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    btn.click();
                }
            });
        }
    }

    applyRandomToggle();
});

})();