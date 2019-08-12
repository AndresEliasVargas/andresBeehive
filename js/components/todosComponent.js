'use strict';

class TodosComponent {
    constructor(pMain, pUIManager) {
        this.main = pMain;
        this.uiManager = pUIManager;
        
        this.container = document.createElement('section');
        this.container.setAttribute('id', 'todosComponent');
        this.container.hidden = true;

        this.main.appendChild(
            this.container
        );
    }

    showBeeTodosComponent(bee) {
        this.container.innerHTML = '';
        bee.todos.map(todo => new TodoComponent(
            todo,
            this.container,
            this.uiManager
            )
        );
    }

    show() {
        this.container.hidden = false;
    }

    hide() {
        this.container.innerHTML = '';
        this.container.hidden = true;
    }
}