'use strict';

class AppComponent{
    constructor(pUIManager, pAppManager){
        this.uiManager = pUIManager;
        this.appManager = pAppManager;
        this.headerComponent = new HeaderComponent(this.uiManager, this.appManager);
    };

    addHeaderElement(){
        this.headerComponent.showTitle(this.uiManager);
    };
};