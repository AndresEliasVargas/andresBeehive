'use strict';

class PhotoComponent {
    constructor(pmodel, pparent, pUIManager) {
        this.uiManager = pUIManager;
        this.model = pmodel;
        this.parent = pparent;

        this.container = document.createElement('div');
        this.container.classList.add(
            'col-md-12',
            'col-lg-6',
            'text-center',
            'py-3'
        );
        this.container.setAttribute('id', 'photoContainer');

        this.title = document.createElement('p');
        this.title.classList.add('photoTitle');
        this.title.innerHTML = this.model.title;

        let myImage = new Image(150, 150);
        myImage.src = this.model.thumbnailUrl;
        myImage.classList.add(
            'hvr-wobble-bottom',
            'img-fluid'
        );

        this.parent.appendChild(this.container);
        this.container.append(
            this.title,
            myImage
        );
    };
};