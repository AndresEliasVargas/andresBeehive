'use strict';

class MainComponent{
    constructor(){
        this.main = document.createElement('main');
        this.main.setAttribute('id', 'mainComponent');
    };

    showMain(pDiv){
        pDiv.appendChild(this.main);
    };
};