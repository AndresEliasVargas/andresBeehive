'use strict';

class UIManager{
    constructor(pAppManager){
        this.appManager = pAppManager;
        this.appComponent = new AppComponent(this, this.appManager);
    }

    showUI(){
        this.appComponent.addHeaderElement();
    }
};