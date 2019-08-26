'use strict';

class PostsComponent {
    constructor(pBeesInformation, pUIManager) {
        this.beesInformation = pBeesInformation;
        this.uiManager = pUIManager;

        this.container = document.querySelector('#postsComponent');
        this.container.classList.add(
            'row'
        );
        this.container.hidden = true;

        this.column = document.createElement('div');
        this.column.classList.add(
            'col-12'
        );

        this.addPostBtn = document.createElement('button');
        this.addPostBtn.classList.add(
            'btn',
            'btn-lg',
            'btn-secondary',
            'btn-block',
            'my-3'
        );
        this.addPostBtn.innerHTML = 'Add New Post';
        // this.addPostBtn.onclick = this.addNewPost.bind(this);
    }

    showBeePostsComponent(bee) {
        this.container.innerHTML = '';
        this.beesInformation.appendChild(this.container);
        this.container.appendChild(this.column);
        this.column.appendChild(this.addPostBtn);
        this.beesInformation.scrollTo(0, 0);
        bee.posts.map(post => new PostComponent(post, this.container, this.uiManager));
    };

    show() {
        this.container.hidden = false;
    };

    hide() {
        this.container.hidden = true;
    };
};