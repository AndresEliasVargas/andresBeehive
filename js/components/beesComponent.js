'use strict';

class BeesComponent{
    constructor(pMain){
        this.main = pMain;
        this.beesElement = document.createElement('section');
        this.beesElement.setAttribute('id', 'beesComponent');

        pMain.prepend(this.beesElement);
    }

    showBees(bees, pAppManager){
        this.beesElement.innerHTML = '';
        bees.map(bee => new BeeComponent(bee, this.beesElement, pAppManager));
    }
};