'use strict';

class AppComponent{
    constructor(pUIManager){
        this.uiManager = pUIManager;
        this.div = document.createElement('div');
        this.div.setAttribute('id', 'appComponent');

        this.headerComponent = new HeaderComponent(this.uiManager);
    };

    addPrincipalElement(pBody){
        pBody.prepend(this.div);
        this.headerComponent.showTitle(
            this.div,
            this.uiManager
        );
    };
};