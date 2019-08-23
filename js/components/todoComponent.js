'use strict';

class TodoComponent {
    constructor(pModel, pParent, pUIManager) {
        this.model = pModel;
        this.parent = pParent;
        this.uiManager = pUIManager;

        this.rowContainer = document.createElement('div');
        this.rowContainer.classList.add(
            'row'
        );

        this.leftContainer = document.createElement('div');
        this.leftContainer.classList.add(
            'col-2',
            'col-md-2'
        );

        this.rightContainer = document.createElement('div');
        this.rightContainer.classList.add(
            'col-2',
            'col-md-2'
        );

        this.container = document.createElement('div');
        this.container.classList.add(
            'todoComponent',
            'col-8',
            'col-md-8',
            'disRoot',
            'bg-white',
            'rounded',
            'my-3'
        );

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

        this.checkbox = document.createElement('input');
        this.checkbox.type = 'checkbox';
        this.checkbox.checked = this.model.completed;
        this.checkbox.classList.add(
            'left',
            'mr-3',
            'my-2'
        );
        // this.complete.onchange = this.onChangeComplete.bind(this);

        this.parent.appendChild(this.rowContainer);
        this.rowContainer.append(
            this.leftContainer,
            this.container,
            this.rightContainer
        );
        this.container.append(
            this.checkbox,
            this.title
        );

    }

    // onChangeComplete() {
    //     this.model.complete = !this.model.complete;
    //     this.complete.checked = this.model.complete;
    //     this.setColor();
    // };
};