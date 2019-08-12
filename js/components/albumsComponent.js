'use strict';

class AlbumsComponent {
    constructor(pMain, pUIManager) {
        this.main = pMain;
        this.uiManager = pUIManager;

        this.container = document.createElement('section');
        this.container.setAttribute('id', 'albumsComponent');
        this.container.hidden = true;

        this.main.appendChild(this.container);
    }

    showBeeAlbumsComponent(bee) {
        this.container.innerHTML = '';
        bee.albums.map(album => new AlbumComponent(album, this.container, this.uiManager));
    };

    show(){
        this.container.hidden = false;
    };

    hide(){
        this.container.innerHTML = '';
        this.container.hidden = true;
    };
};