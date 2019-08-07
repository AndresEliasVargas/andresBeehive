'use strict';

class HeaderComponent{
    constructor(){
        this.header = document.createElement('header');
        this.header.setAttribute('id', 'headerComponent');

        this.title = document.createElement('h1');
        this.title.innerHTML = 'Beehive';

        this.header.appendChild(this.title);

        this.mainComponent = new MainComponent();
    };

    showTitle(pDiv){
        pDiv.prepend(this.header);
        this.mainComponent.showMain(pDiv);
    };
};