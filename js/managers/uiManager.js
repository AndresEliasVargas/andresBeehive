'use strict';

class UIManager{
    constructor(pAppManager){
        this.appManager = pAppManager;
        this.appComponent = new AppComponent(this);
    }

    showUI(){
        this.appComponent.addHeaderElement();
    }
};