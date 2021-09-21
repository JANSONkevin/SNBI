function musicPlaylist() {
    var currentMusic = localStorage.getItem('music') || '#intro-music';
    localStorage.setItem('music', currentMusic)
    document.querySelector(currentMusic).loop = true;
    document.querySelector(currentMusic).muted = false;
    document.querySelector(currentMusic).volume = 0.5;
    const promise = document.querySelector(localStorage.getItem('music')).play();
    if (promise !== undefined) {
        promise.catch(e => {
                console.log('Music can\'t be restarted without user interaction', e);
                document.querySelector('#music-volume').classList.remove('visually-hidden');
        })
    }
}
export default musicPlaylist;
