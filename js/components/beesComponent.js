'use strict';

class BeesComponent{
    constructor(pMain, pUIManager){
        this.main = pMain;
        this.uiManager = pUIManager;
        this.beesElement = document.getElementById('beesComponent');
    }

    showBees(bees){
        this.beesElement.innerHTML = '';
        bees.map(bee => new BeeComponent(bee, this.beesElement, this.uiManager));
    }
};