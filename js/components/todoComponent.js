'use strict';

class TodoComponent{
    constructor(pModel, pParent, pUIManager){
        this.model = pModel;
        this.parent = pParent;
        this.uiManager = pUIManager;

        this.container = document.createElement('div');
        this.container.classList.add('todoComponent');

        // this.incompleteContainer = document.createElement('div');
        // this.incompleteContainer.classList.add('todoComponent');
        // this.incompleteContainer.setAttribute('id', 'incompleteContainer');

        // this.completeContainer = document.createElement('div');
        // this.completeContainer.classList.add('todoComponent');
        // this.completeContainer.setAttribute('id', 'completeContainer');

        // this.titleCompleted = document.createElement('h3');
        // this.titleCompleted.innerHTML = 'Completed Tasks';

        // this.titleIncomplete = document.createElement('h3');
        // this.titleIncomplete.innerHTML = 'Incomplete Tasks';

        this.title = document.createElement('p');
        this.title.innerHTML = this.model.title;

        this.complete = document.createElement('input');
        this.complete.type = 'checkbox';
        this.complete.checked = this.model.completed;
        this.complete.onchange = this.onChangeComplete.bind(this);

        this.parent.append(
            this.container
        );

        this.container.append(
            this.complete,
            this.title
        );

    }

    onChangeComplete() {
        this.model.complete = !this.model.complete;
        this.complete.checked = this.model.complete;
        this.setColor();
    };
};