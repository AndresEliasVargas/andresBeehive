'use strict';

class HeaderComponent {
    constructor(pUIManager) {
        this.uiManager = pUIManager;
        this.body = document.getElementsByTagName('body')[0];

        this.header = document.createElement('header');
        this.header.setAttribute('id', 'headerComponent');
        this.header.classList.add(
            'row',
            'py-4'
        );

        this.container = document.createElement('div');
        this.container.classList.add('col-12');

        this.title = document.createElement('h1');
        this.title.innerHTML = 'Beehive';
        this.title.classList.add(
            'text-center',
            'text-white',
        );

        this.img = document.createElement('img');
        this.img.setAttribute('src', '../../imgs/bee.png');
        this.img.classList.add('ml-2');

        this.header.appendChild(this.container);
        this.container.appendChild(this.title);
        this.title.appendChild(this.img);

        this.mainComponent = new MainComponent(this.uiManager);
    };

    showTitle(pAppComponent, pAppManager) {
        this.body.prepend(this.header);
        this.mainComponent.showMain(pAppComponent, pAppManager);
    };
};