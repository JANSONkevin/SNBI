import { Switch } from './../class/Switch.js';

function initSwitch() {
    //Déclarations des switch
    //hintCode
    const hintBack = new Switch('#hint-back', '#hint-pannel', '#game-board', true);
    //rule-success
    const retourBtn = new Switch('#retour', '#rules-pannel', '#game-board', true);
    //stepCode
    const stepDetail = new Switch('#steps-detail', '#step-pannel', '#step-detail-pannel');
    const stepDetailBack = new Switch('#step-detail-back', '#step-detail-pannel', '#game-board', true);
    const buttonStepCode = new Switch('#bouton-step-code', '#step-detail-pannel', '#step-pannel');
    //selectHint
    const selectHintBack = new Switch('#select-hint-back', '#select-hint', '#game-board', true);
    const showHintBack = new Switch('#back-gb', '#show-hint', '#game-board', true);
    //teamName
    const teamnameBack = new Switch('#teamname-back', '#teamname-pannel', '#game-board', true);
    //settingUp
    const settingUpBack = new Switch('#setting-up-back', '#setting-up', '#game-board', true);


    //Passiv listening of the switches (ie eventlistener on click)
    stepDetail.watch();
    buttonStepCode.watch();

    hintBack.watch();
    selectHintBack.watch();
    showHintBack.watch();
    teamnameBack.watch();
    showHintBack.watch();
    settingUpBack.watch();
    stepDetailBack.watch();
    retourBtn.watch();
}

export default initSwitch;