'use strict';

class CommentComponent{
    constructor(pModel, pParent, pUIManager){
        this.model = pModel;
        this.parent = pParent;
        this.uiManager = pUIManager;

        this.container = document.createElement('div');
        this.container.classList.add('commentComponent');

        this.name = document.createElement('p');
        this.name.innerHTML = '<b>' + this.model.name + '</b>';

        this.body = document.createElement('p');
        this.body.innerHTML = this.model.body;

        this.email = document.createElement('p');
        this.email.innerHTML = '<b>' + this.model.email + '</b>';


        this.parent.appendChild(this.container);

        this.container.append(
            this.name,
            this.body,
            this.email
        );
    }

    
};