'use strict';

class AppComponent{
    constructor(pUIManager){
        this.uiManager = pUIManager;

        this.container = document.createElement('div');
        this.container.setAttribute('id', 'appComponent');
        this.container.classList.add('row');

        this.headerComponent = new HeaderComponent(this.uiManager);
    };

    addPrincipalElement(pBody){
        pBody.prepend(this.container);
        this.headerComponent.showTitle(
            this.container,
            this.uiManager
        );
    };
};