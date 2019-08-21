'use strict';

class BeesComponent{
    constructor(pMain, pUIManager){
        this.main = pMain;
        this.uiManager = pUIManager;
        this.beesElement = document.createElement('section');
        this.beesElement.setAttribute('id', 'beesComponent');
        this.beesElement.classList.add(
            'col-6'
        );

        pMain.prepend(this.beesElement);
    }

    showBees(bees){
        this.beesElement.innerHTML = '';
        bees.map(bee => new BeeComponent(bee, this.beesElement, this.uiManager));
    }
};