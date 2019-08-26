'use strict';

class NewCommentComponent {
    constructor(pMain, pUIManager, pAppManager) {
        this.main = pMain;
        this.uiManager = pUIManager;
        this.appManager = pAppManager;

        this.rowContainer = document.getElementById('newCommentComponent');
        this.rowContainer.classList.add(
            'row',
            'rounded',
            'my-4'
        );

        this.leftContainer = document.createElement('div');
        this.leftContainer.classList.add(
            'col-md-2'
        );

        this.rightContainer = document.createElement('div');
        this.rightContainer.classList.add(
            'col-md-2'
        );

        this.principalContainer = document.createElement('div');
        this.principalContainer.classList.add(
            'col-md-8',
            'bg-white',
            'form-group'
        );


        this.inputName = document.createElement('input');
        this.inputName.type = 'text';
        this.inputName.placeholder = 'Title';
        this.inputName.setAttribute('id', 'inputTitleComment');
        this.inputName.classList.add(
            'my-3',
            'form-control'
        );

        this.textAreaBody = document.createElement('textarea');
        this.textAreaBody.placeholder = 'Body';
        this.textAreaBody.rows = 4;
        this.textAreaBody.cols = 40;
        this.textAreaBody.classList.add(
            'mb-4',
            'form-control'
        );

        this.addComment = document.createElement('button');
        this.addComment.onclick = this.addCommentBtnOnClick.bind(this);
        this.addComment.innerHTML = 'Add';
        this.addComment.classList.add(
            'btn',
            'btn-success',
            'btn-lg',
            'btn-block',
            'mb-2'
        );

        this.rowContainer.append(
            this.leftContainer,
            this.principalContainer,
            this.rightContainer
        );

        this.principalContainer.append(
            this.inputName,
            this.textAreaBody,
            this.addComment
        );

        this.rowContainer.hidden = true;
    }

    addCommentBtnOnClick() {
        let comment = new Comment(
            0,
            this.inputName.value,
            0,
            this.uiManager.appManager.dataManager.bee.email,
            this.textAreaBody.value
        );
        
        this.model.comments.unshift(comment);
        this.model = null;
        this.uiManager.hideNewCommentComponent();
        this.inputName.value = '';
        this.textAreaBody.value = '';
    }

    show(pmodel) {
        this.model = pmodel;
        this.rowContainer.hidden = false;
    }

    hide() {
        this.rowContainer.hidden = true;
    }
};