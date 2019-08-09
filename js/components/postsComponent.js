'use strict';

class PostsComponent {
    constructor(pMain, pUIManager) {
        this.main = pMain;
        this.uiManager = pUIManager;

        this.container = document.createElement('section');
        this.container.setAttribute('id', 'postsComponent');
        this.container.hidden = true;

        this.main.appendChild(this.container);
    }

    showBeePostsComponent(bee) {
        this.container.innerHTML = '';
        bee.posts.map(post => new PostComponent(post, this.container, this.uiManager));
    };

    show(){
        this.container.hidden = false;
    };

    hide(){
        this.container.hidden = true;
    };
};