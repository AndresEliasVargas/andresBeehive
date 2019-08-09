'use strict';

class MainComponent{
    constructor(){
        this.main = document.createElement('main');
        this.main.setAttribute('id', 'mainComponent');
        this.beesComponent = new BeesComponent(this.main);
    };

    showMain(pDiv, pAppManager){
        pDiv.appendChild(this.main);
        this.beesComponent.showBees(pAppManager.appManager.dataManager.bees, pAppManager);
    };
};