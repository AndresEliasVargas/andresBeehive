'use strict';

class PostComponent {
    constructor(pModel, pParent, pUIManager) {
        this.model = pModel;
        this.parent = pParent;
        this.uiManager = pUIManager;

        this.parent.scrollTo(0, 0);

        this.containerLeft = document.createElement('div');
        this.containerLeft.classList.add('col-1');

        this.containerRight = document.createElement('div');
        this.containerRight.classList.add('col-1');

        this.container = document.createElement('div');
        this.container.classList.add(
            'col-10',
            'pt-3',
            'mt-2',
            'mb-3',
            'border',
            'rounded',
            'bg-white'
        );

        this.title = document.createElement('h2');
        this.title.innerHTML = this.model.title;
        this.title.classList.add(
            'text-center',
            'text-primary'
        );

        this.body = document.createElement('p');
        this.body.innerHTML = this.model.body;
        this.body.classList.add(
            'text-justify'
        );

        this.btn = document.createElement('button');
        this.btn.setAttribute('id', 'btnAddComment');
        this.btn.innerHTML = 'Add New Comment';
        this.btn.classList.add(
            'btn',
            'btn-dark',
            'btn-large',
            'btn-block',
            'my-4'
        );
        this.btn.onclick = this.addNewComment.bind(this);

        this.parent.append(this.containerLeft, this.container, this.containerRight);

        this.container.append(
            this.title,
            this.body,
            this.btn
        );

        this.addCommentComponents();
    }

    addNewComment(e) {

    }

    addCommentComponents() {
        this.model.comments.map(comment => new CommentComponent(
            comment,
            this.container,
            this.uiManager
        ));
    }
};