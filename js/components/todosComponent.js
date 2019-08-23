'use strict';

class TodosComponent {
    constructor(pMain, pUIManager) {
        this.main = pMain;
        this.uiManager = pUIManager;

        this.container = document.querySelector('#todosComponent');
        this.container.hidden = true;
    }

    showBeeTodosComponent(bee) {
        this.container.innerHTML = '';
        this.main.scrollTo(0, 0);
        bee.todos.map(todo => new TodoComponent(
            todo,
            this.container,
            this.uiManager
        ));
    }

    show() {
        this.container.hidden = false;
    }

    hide() {
        this.container.innerHTML = '';
        this.container.hidden = true;
    }
}