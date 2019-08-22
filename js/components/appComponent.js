'use strict';

class AppComponent{
    constructor(pUIManager){
        this.uiManager = pUIManager;
        this.headerComponent = new HeaderComponent(this.uiManager);
    };

    addHeaderElement(){
        this.headerComponent.showTitle(this.uiManager);
    };
};