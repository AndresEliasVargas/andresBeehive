'use strict';

class PostsComponent {
    constructor(pBeesInformation, pUIManager) {
        this.beesInformation = pBeesInformation;
        this.uiManager = pUIManager;

        this.container = document.createElement('section');
        this.container.setAttribute('id', 'postsComponent');
        this.container.classList.add(
            'row'
        );
        this.container.hidden = true;

        // this.titleName = document.createElement('h2');
        // this.titleName.innerHTML = this.uiManager.appManager.bee.name;

    }
    
    showBeePostsComponent(bee) {
        this.container.innerHTML = '';
        this.beesInformation.appendChild(this.container);
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