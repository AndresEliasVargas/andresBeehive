'use strict';

class AlbumComponent {
    constructor(pModel, pParent, pUIManager) {
        this.model = pModel;
        this.parent = pParent;
        this.uiManager = pUIManager;

        this.containerLeft = document.createElement('div');
        this.containerLeft.classList.add('col-1');

        this.containerRight = document.createElement('div');
        this.containerRight.classList.add('col-1');

        this.principalContainer = document.createElement('div');
        this.principalContainer.classList.add(
            'col-10',
            'mb-4'
        );

        this.container = document.createElement('div');
        this.container.classList.add(
            'transparentBackground',
            'row',
            'text-white'
        );

        this.titleContainer = document.createElement('div');
        this.titleContainer.classList.add(
            'col-12'
        );

        this.title = document.createElement('h2');
        this.title.classList.add(
            'text-center',
            'text-primary'
        );
        this.title.innerHTML = this.model.title;

        this.principalContainer.appendChild(this.container);
        this.container.appendChild(this.titleContainer);
        this.titleContainer.appendChild(this.title);
        this.parent.append(this.containerLeft, this.principalContainer, this.containerRight);

        this.model.photos.map(photo => new PhotoComponent(
            photo,
            this.container,
            this.uiManager
        ));
    }
};