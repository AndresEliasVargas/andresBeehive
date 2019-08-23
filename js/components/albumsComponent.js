'use strict';

class AlbumsComponent {
    constructor(pMain, pUIManager) {
        this.main = pMain;
        this.uiManager = pUIManager;

        this.container = document.querySelector('#albumsComponent');
        this.container.classList.add(
            'row'
        );
        this.container.hidden = true;
    }

    showBeeAlbumsComponent(bee) {
        this.container.innerHTML = '';
        this.main.scrollTo(0, 0);
        bee.albums.map(album => new AlbumComponent(
            album,
            this.container,
            this.uiManager
            )
        );
    };

    show(){
        this.container.hidden = false;
    };

    hide(){
        this.container.innerHTML = '';
        this.container.hidden = true;
    };
};