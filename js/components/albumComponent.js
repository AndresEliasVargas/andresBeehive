'use strict';

class AlbumComponent {
    constructor(pModel, pParent, pUIManager) {
        this.model = pModel;
        this.parent = pParent;
        this.uiManager = pUIManager;

        this.container = document.createElement('div');
        this.container.classList.add('albumComponent');

        this.title = document.createElement('h2');
        this.title.innerHTML = this.model.title;

        
        this.parent.appendChild(this.container);

        this.container.append(
            this.title
        );

        console.log(this.model);
    }
};