import { Switch } from "../../class/Switch";
import { Numpad } from '../../class/Numpad.js';
import { Page } from "../../class/Page";
const axios = require('axios').default;
import leave from '../../leave.js';

var success = [];

localStorage.setItem('question', localStorage.getItem('question') || 1);
localStorage.setItem('succesA', localStorage.getItem('succesA') || false);
localStorage.setItem('succesB', localStorage.getItem('succesB') || false);
localStorage.setItem('success', JSON.stringify(success));
localStorage.setItem('bonusPoints', 0);

const succes = new Page('#succes');

const resPannel = new Page('#res-pannel');

const q1p1 = new Switch('#q1p1', '#q1-pannel', '#res-pannel');
const q1p2 = new Switch('#q1p2', '#q1-pannel', '#res-pannel');
const q1p3 = new Switch('#q1p3', '#q1-pannel', '#res-pannel');
const q1p4 = new Switch('#q1p4', '#q1-pannel', '#res-pannel');
const q1p5 = new Switch('#q1p5', '#q1-pannel', '#res-pannel');

const q2p1 = new Switch('#q2p1', '#q2-pannel', '#res-pannel');
const q2p2 = new Switch('#q2p2', '#q2-pannel', '#succes');

const q3p1 = new Switch('#q3p1', '#q3-pannel', '#res-pannel');
const q3p2 = new Switch('#q3p2', '#q3-pannel', '#res-pannel');

const q4p1 = new Switch('#q4p1', '#q4-pannel', '#res-pannel');
const q4p2 = new Switch('#q4p2', '#q4-pannel', '#succes');
const q4p3 = new Switch('#q4p3', '#q4-pannel', '#res-pannel');
const q4p4 = new Switch('#q4p4', '#q4-pannel', '#res-pannel');

const q5p1 = new Switch('#q5p1', '#q5-pannel', '#res-pannel');
const q5p2 = new Switch('#q5p2', '#q5-pannel', '#res-pannel');
const q5p3 = new Switch('#q5p3', '#q5-pannel', '#res-pannel');
const q5p4 = new Switch('#q5p4', '#q5-pannel', '#res-pannel');
const q5p5 = new Switch('#q5p5', '#q5-pannel', '#res-pannel');

const q6Numpad = new Numpad('#numpad-zip', '#zip-code-output', 5)

const propositions = [
    [q1p1, q1p2, q1p3, q1p4, q1p5],
    [q2p1, q2p2],
    [q3p1, q3p2],
    [q4p1, q4p2, q4p3, q4p4],
    [q5p1, q5p2, q5p3, q5p4, q5p5],
];

window.addEventListener('DOMContentLoaded', () => {
    q6Numpad.start();
    propositions.forEach((group, index) => {
        group.forEach((prop, subIndex) => {
            prop.element.addEventListener('click', () => {
                updateAnswerPannel(index + 1, subIndex + 1)
                document.querySelector('#page-audio').currentTime = 0;
                document.querySelector('#page-audio').play();
            })
        })
    });
    document.querySelector('#res-suite').addEventListener('click', () => {
        (new Switch('#res-img', '#res-pannel', `#q${localStorage.getItem('question')}-pannel`)).change();
        document.querySelector('#page-audio').currentTime = 0;
        document.querySelector('#page-audio').play();
    });
    document.querySelector('#zip-code-validate').addEventListener('click', () => {
        let zip = document.querySelector('#zip-code-output').innerHTML.toString();
        zip.length == 0 ? zip = '00000' : false;
        if (zip.match(/[0-9]{5}/)) {
            axios.post('/game/final', {
                Zip: zip,
                numberPlayers: localStorage.getItem('numberPlayers'),
                successes: JSON.parse(localStorage.getItem('success')),
                bonusPoints: localStorage.getItem('bonusPoints'),
            })
                /* .then(() => leave()) */
                .then(() => window.location.replace('/game/scoreboard'))
                .catch(e => console.log(e))
        }
    })
})

function updateAnswerPannel(question, proposition) {
    switch (question) {
        case 1:
            localStorage.setItem('question', 2);
            localStorage.setItem('numberPlayers', proposition)
            document.querySelector('#res-img').style.backgroundImage = "url('/build/questionnaire_fin/reponses/question_1/reponse_b.png')";
            if (proposition == 1) document.querySelector('#res-img').style.backgroundImage = "url('/build/questionnaire_fin/reponses/question_1/reponse_a.png')";
            q1p1.change();
            break;
        case 2:
            localStorage.setItem('question', 3);
            if (proposition == 2) {
                document.querySelector('#jingle-bonus-audio').currentTime = 0;
                document.querySelector('#jingle-bonus-audio').play();
                document.querySelector('#res-img').style.backgroundImage = "url( '/build/questionnaire_fin/reponses/question_2/reponse_b.png')";
                document.querySelector('#succes').style.backgroundImage = `url('/build/succes/succes_1.jpeg')`;
                q2p2.change();
                localStorage.setItem('success', JSON.stringify(JSON.parse(localStorage.getItem('success')).concat(["Salon de thé"])));
                localStorage.setItem('bonusPoints', parseInt(localStorage.getItem('bonusPoints')) + 100)
                function listenNow() {
                    document.querySelector('#page-audio').currentTime = 0;
                    document.querySelector('#page-audio').play();
                    succes.hide();
                    resPannel.show();
                    document.querySelector('#succes').removeEventListener('click', listenNow)
                }
                document.querySelector('#succes').addEventListener('click', listenNow)
            } else {
                document.querySelector('#res-img').style.backgroundImage = "url( '/build/questionnaire_fin/reponses/question_2/reponse_a.png')";
                q2p1.change();

            }
            break;
        case 3:
            localStorage.setItem('question', 4);
            if (proposition == 1) document.querySelector('#res-img').style.backgroundImage = "url( '/build/questionnaire_fin/reponses/question_3/reponse_aa.png')";
            if (proposition == 1 && localStorage.getItem('succesA') == 'true') document.querySelector('#res-img').style.backgroundImage = "url( '/build/questionnaire_fin/reponses/question_3/reponse_a.png')";
            if (proposition == 2) document.querySelector('#res-img').style.backgroundImage = "url( '/build/questionnaire_fin/reponses/question_3/reponse_b.png')";
            if (proposition == 2 && localStorage.getItem('succesA') == 'true') document.querySelector('#res-img').style.backgroundImage = "url( '/build/questionnaire_fin/reponses/question_3/reponse_bb.png')";
            q3p1.change();
            break;
        case 4:
            localStorage.setItem('question', 5);
            if (proposition == 1) {
                document.querySelector('#res-img').style.backgroundImage = "url( '/build/questionnaire_fin/reponses/question_4/reponse_a.png')";
                q4p1.change();
            }
            if (proposition == 2) {
                document.querySelector('#jingle-bonus-audio').currentTime = 0;
                document.querySelector('#jingle-bonus-audio').play();
                document.querySelector('#res-img').style.backgroundImage = "url( '/build/questionnaire_fin/reponses/question_4/reponse_b.png')";
                document.querySelector('#succes').style.backgroundImage = `url('/build/succes/succes_3.jpeg')`;
                q4p2.change();
                localStorage.setItem('success', JSON.stringify(JSON.parse(localStorage.getItem('success')).concat(["Superstition"])));
                localStorage.setItem('bonusPoints', parseInt(localStorage.getItem('bonusPoints')) + 100)
                document.querySelector('#succes').addEventListener('click', () => {
                    document.querySelector('#page-audio').currentTime = 0;
                    document.querySelector('#page-audio').play();
                    succes.hide();
                    resPannel.show();
                })
            }
            if (proposition == 3) {
                document.querySelector('#res-img').style.backgroundImage = "url( '/build/questionnaire_fin/reponses/question_4/reponse_c.png')";
                q4p1.change();
            }
            if (proposition == 4) {
                document.querySelector('#res-img').style.backgroundImage = "url( '/build/questionnaire_fin/reponses/question_4/reponse_d.png')";
                q4p1.change();
            }
            break;
        case 5:
            localStorage.setItem('question', 6);
            document.querySelector('#res-img').style.backgroundImage = "url('/build/questionnaire_fin/reponses/question_5/reponse_b.png')";
            if (proposition == 1 || proposition == 2) document.querySelector('#res-img').style.backgroundImage = "url('/build/questionnaire_fin/reponses/question_5/reponse_a.png')";
            q5p1.change();
            break;
        /*   case 6:
              localStorage.setItem('question', 7);
              document.querySelector('#final-res-img').style.backgroundImage = "url('/build/questionnaire_fin/reponses/question_5/reponse_b.png')";
              if (proposition == 1 || proposition == 2) document.querySelector('#final-res-img').style.backgroundImage = "url('/build/questionnaire_fin/reponses/question_5/reponse_a.png')";
              q5p1.change();
              break; */
    }
}
