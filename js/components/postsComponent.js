'use strict';

class PostsComponent {
    constructor(pBeesInformation, pUIManager) {
        this.beesInformation = pBeesInformation;
        this.uiManager = pUIManager;

        this.container = document.querySelector('#postsComponent'); 
        this.container.hidden = true;
    }
    
    showBeePostsComponent(bee) {
        this.container.innerHTML = '';
        this.beesInformation.appendChild(this.container);
        this.beesInformation.scrollTo(0, 0);
        bee.posts.map(post => new PostComponent(post, this.container, this.uiManager));
    };

    show(){
        this.container.hidden = false;
    };

    hide(){
        this.container.innerHTML = '';
        this.container.hidden = true;
    };
};