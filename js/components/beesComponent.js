'use strict';

class BeesComponent{
    constructor(pUIManager){
        this.uiManager = pUIManager;
        this.beesElement = document.getElementById('beesComponent');
    }

    showBees(bees) {
        let beesArray = [];
        this.beesElement.innerHTML = '';

        bees.forEach(bee => {
            let beeComponent = new BeeComponent(bee, this.beesElement, this.uiManager);
            beesArray.push(beeComponent);
        });

        return beesArray;
    }
};