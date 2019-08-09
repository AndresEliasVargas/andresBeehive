'use strict';

class BeesComponent{
    constructor(){
        this.beesElement = document.createElement('div');
        this.beesElement.setAttribute('id', 'beesComponent');
    }

    showBees(bees, pAppManager){
        this.beesElement.innerHTML = '';
        bees.map(bee => new BeeComponent(bee, this.beesElement, pAppManager));
    }
};