'use strict';

class HeaderComponent{
    constructor(){
        this.header = document.createElement('header');
        this.header.setAttribute('id', 'headerComponent');

        this.title = document.createElement('h1');
        this.title.innerHTML = 'Beehive';

        this.div = document.createElement('div');

        this.img = document.createElement('img');
        this.img.setAttribute('src', '../../imgs/bee.png');
        
        this.div.appendChild(this.img);
        this.header.append(this.title, this.div);

        this.mainComponent = new MainComponent();
    };

    showTitle(pDiv, pAppManager){
        pDiv.prepend(this.header);
        this.mainComponent.showMain(pDiv, pAppManager);
    };
};