'use strict';

class HeaderComponent {
    constructor(pAppManager) {
        this.appManager = pAppManager;
        this.header = document.createElement('header');
        this.header.setAttribute('id', 'headerComponent');
        this.header.classList.add(
            'col-12',
            'py-4'
        );

        this.title = document.createElement('h1');
        this.title.innerHTML = 'Beehive';
        this.title.classList.add(
            'text-center',
            'text-white',
        );

        this.img = document.createElement('img');
        this.img.setAttribute('src', '../../imgs/bee.png');
        this.img.classList.add('ml-2');

        this.header.append(this.title);
        this.title.appendChild(this.img);

        this.mainComponent = new MainComponent(this.appManager);
    };

    showTitle(pDiv, pAppManager) {
        pDiv.prepend(this.header);
        this.mainComponent.showMain(pDiv, pAppManager);
    };
};