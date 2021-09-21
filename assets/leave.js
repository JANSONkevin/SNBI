window.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('#leave-suite')) {
        document.querySelector('#leave-suite').addEventListener('click', () => {
            leave();
            window.location.href = "/";
        })
    }
    if (document.querySelector('#final-leave')) {
        document.querySelector('#final-leave').addEventListener('click', () => {
            leave();
            window.location.href = "/";
        })
    }
})

function leave() {
    if (localStorage.getItem('stepStartTimer') !== null) localStorage.clear('stepStartTimer')
    if (localStorage.getItem('currentTime') !== null) localStorage.clear('currentTime')
    if (localStorage.getItem('score') !== null) localStorage.clear('score')
    if (localStorage.getItem('teamname') !== null) localStorage.clear('teamname')
    if (localStorage.getItem('currentStep') !== null) localStorage.clear('currentStep')
    if (localStorage.getItem('timer') !== null) localStorage.clear('timer')
    if (localStorage.getItem('firstStepTimer') !== null) localStorage.clear('firstStepTimer')
    if (localStorage.getItem('startTime') !== null) localStorage.clear('startTime')
    if (localStorage.getItem('hints') !== null) localStorage.clear('hints')
    window.clearInterval(localStorage.getItem('interval'))
    /* switchView('#'); */
    localStorage.clear('i')
}

export default leave;
