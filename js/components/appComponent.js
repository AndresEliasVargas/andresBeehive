'use strict';

class AppComponent{
    constructor(pAppManager){
        this.appManager = pAppManager;
        this.div = document.createElement('div');
        this.div.setAttribute('id', 'appComponent');

        this.headerComponent = new HeaderComponent();
    };

    addPrincipalElement(pBody){
        pBody.prepend(this.div);
        this.headerComponent.showTitle(this.div);
    };
};