'use strict';

class UiManager{
    constructor(pAppManager){
        this.appManager = pAppManager;
        this.body = document.getElementsByTagName('body')[0];
        this.appComponent = new AppComponent(this);
    }

    showUI(){
        this.appComponent.addPrincipalElement(this.body);
    }
};