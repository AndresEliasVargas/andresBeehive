'use strict';

class AppComponent{
    constructor(pUIManager){
        this.uiManager = pUIManager;
        this.appComponent = document.getElementById('appComponent');
        this.headerComponent = new HeaderComponent(this.uiManager);
    };

    addHeaderElement(){
        this.headerComponent.showTitle(
            this.appComponent,
            this.uiManager
        );
    };
};