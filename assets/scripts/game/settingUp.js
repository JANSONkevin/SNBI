import { Image } from '../../class/Image.js';
import { Switch } from '../../class/Switch.js';
import musicPlayList from '../../components/music.js';
import formatScore from '../../components/scoreFormatter.js';
//validation btn
const validation = new Switch('#lets-go', '#setting-up', '#first-code');

const firstCodeValidation = new Switch('#first-code-validation', '#first-code', '#game-board');

//display enable step, hint and change game-start
const step = new Image('#step', 'etapes_enable', 'etapes_disable', 'menu_principal');

const barCharge = document.querySelector('#bar-charge');

window.addEventListener('DOMContentLoaded', () => {
    validation.element.addEventListener('click', () => {
        localStorage.setItem('currentStep', 1);
        validation.change();
        document.querySelector('#page-audio').currentTime = 0;
        document.querySelector('#page-audio').play();
        localStorage.setItem('firstStepTimer', 120);
        firstStepTimer();
        globalTimer();
        updateBar();
        document.querySelector('#bar-charge-container').classList.remove('visually-hidden');
        document.querySelector('#bar-charge').classList.remove('visually-hidden');
        document.querySelector(localStorage.getItem('music')).pause();
        localStorage.setItem('music', '#mini-jeu-music');
        musicPlayList();
    })

    firstCodeValidation.element.addEventListener('click', () => {
        document.querySelector('#separator').classList.add('visually-hidden')
        firstCodeValidation.change();
        document.querySelector('#page-audio').currentTime = 0;
        document.querySelector('#page-audio').play();
        step.activate();
        document.querySelector('#game-start').style.backgroundImage = "url('/build/menu_principal/abandonnerpartie.png')";
    })

    setTimeout(() => {
        if (!document.querySelector('#first-code').classList.contains('visually-hidden')) {
            firstCodeValidation.change();
            document.querySelector('#separator').classList.add('visually-hidden')
            document.querySelector('#page-audio').currentTime = 0;
            document.querySelector('#page-audio').play();
            step.activate();
            document.querySelector('#game-start').style.backgroundImage = "url('/build/menu_principal/abandonnerpartie.png')";
        }
    }, 30000)
})

function firstStepTimer() {
    const baseInterval = window.setInterval(() => {
        if (localStorage.getItem('firstStepTimer') != '0') {
            localStorage.setItem('firstStepTimer', localStorage.getItem('firstStepTimer') - 1)
        }
        else {
            document.querySelector('#bar-charge-container').classList.add('visually-hidden');
            document.querySelector('#bar-charge').classList.add('visually-hidden');
            clearInterval(baseInterval);
        }
        if (localStorage.getItem('firstStepTimer') == '1'){
            document.querySelector('#jingle-loose-audio').currentTime = 0;
            document.querySelector('#jingle-loose-audio').play();
        } 
        if (localStorage.getItem('currentStep') == 2) {
            clearInterval(baseInterval);
            document.querySelector('#bar-charge-container').classList.add('visually-hidden');
            document.querySelector('#bar-charge').classList.add('visually-hidden');
        };
    }, 1000);
    localStorage.setItem('interval', baseInterval)
}

function updateBar() {
    var i = parseInt(localStorage.getItem('i')) || 0;
    barCharge.style.width = '86%';
    document.querySelector('#bar-charge-container').style = "animation: fadeIn 5s; -webkit-animation: fadeIn 5s; -moz-animation: fadeIn 5s; -o-animation: fadeIn 5s; -ms-animation: fadeIn 5s; background-image: url('/build/menu_principal/cadre_jauge.png')";
    barCharge.style = "animation: fadeIn 5s; -webkit-animation: fadeIn 5s; -moz-animation: fadeIn 5s; -o-animation: fadeIn 5s; -ms-animation: fadeIn 5s;";
    setInterval(() => {
        if (localStorage.getItem('firstStepTimer') != '0') {
            i += .1;
            localStorage.setItem('i', i);
            barCharge.style.width = (86 - i * .72) + '%';
            if (i <= 20) {
                barCharge.style.backgroundColor = '#69B34C';
            } else if (i <= 40) {
                barCharge.style.backgroundColor = '#ACB334';
            } else if (i <= 60) {
                barCharge.style.backgroundColor = '#FAB733';
            } else if (i <= 80) {
                barCharge.style.backgroundColor = '#FF8E15';
            } else if (i <= 100) {
                barCharge.style.backgroundColor = '#FF4E11';
            } else if (i <= 120) {
                barCharge.style.backgroundColor = '#FF0D0D';
            }
        }
        else {
            clearInterval();
        }
    }, 100)
}

function globalTimer() {
    var currentDate = new Date().getTime();
    //Game start timer (actual current date irl)
    if (localStorage.getItem('startTime') === null) {
        localStorage.setItem('startTime', currentDate);
    }
    //Actual timer of the game (updated every second with a new date)
    if (localStorage.getItem('currentTime') === null) {
        localStorage.setItem('currentTime', currentDate);
    }
    //This timer will be changed every new step (so we keep track when it started)
    if (localStorage.getItem('stepStartTime') === null) {
        localStorage.setItem('stepStartTime', currentDate);
    }
    if (localStorage.getItem('score') === null) {
        localStorage.setItem('score', 10000);
    }
    var countDownDate = currentDate + 5400000;

    setInterval(function () {
        var now = new Date().getTime();
        localStorage.setItem('currentTime', now);
        localStorage.setItem('score', parseInt(localStorage.getItem('score')) - 1);

        var timeleft = countDownDate - now;

        // Calculating the hours, minutes and seconds left
        var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

        // Result is output to the specific element
        document.getElementById("time").innerHTML = hours + " : " + (minutes.toString().length == 2 ? minutes : '0' + minutes.toString()) + " : " + (seconds.toString().length == 2 ? seconds : '0' + seconds.toString());
        document.getElementById("score").innerHTML = formatScore(localStorage.getItem('score')) + " pts";
        // Display the message when countdown is over
        if (timeleft < 0) {
            clearInterval();
            document.getElementById("time").innerHTML = ""
        }
        if (localStorage.getItem('currentStep') == '2') return clearInterval();
    }, 1000);
}

export default updateBar;