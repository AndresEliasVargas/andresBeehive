'use strict';

class PostComponent {
    constructor(pModel, pParent, pUIManager) {
        this.model = pModel;
        this.parent = pParent;
        this.uiManager = pUIManager;

        this.container = document.createElement('div');
        this.container.classList.add('postComponent');

        this.title = document.createElement('h2');
        this.title.innerHTML = this.model.title;

        this.body = document.createElement('p');
        this.body.innerHTML = this.model.body;

        this.btn = document.createElement('button');
        this.btn.innerHTML = 'Add New Component';
        this.btn.classList.add('btnNewComponent');
        this.btn.onclick = this.addNewComment.bind(this);

        this.parent.appendChild(this.container);

        this.container.append(
            this.title,
            this.body,
            this.btn
        );

        this.addCommentComponents();
    }

    addNewComment(e){

    }

    addCommentComponents() {
        this.model.comments.map(comment => new CommentComponent(
            comment,
            this.container,
            this.uiManager
            )
        );
    }
};