'use strict';

class MainComponent {
    constructor(pAppManager) {
        this.appManager = pAppManager;
        this.main = document.querySelector('#mainComponent');
        this.beesElement = document.querySelector('#beesComponent');
        this.beesInformation = document.querySelector('#beeInformation');

        this.main.append(this.beesElement, this.beesInformation);


        this.beesComponent = new BeesComponent(this);
        this.postsComponent = new PostsComponent(this.beesInformation, this);
        this.albumsComponent = new AlbumsComponent(this.beesInformation, this);
        this.todosComponent = new TodosComponent(this.beesInformation, this);
        this.newCommentComponent = new NewCommentComponent(this.beesInformation, this, this.appManager);

        this.state = 1;
        // this.beeComponents = [];
    };

    showMain(pUIManager) {
        this.users = this.beesComponent.showBees(pUIManager.appManager.dataManager.bees);
    };

    showBeePosts(bee) {
        this.unSelectBeeComponents();
        this.postsComponent.showBeePostsComponent(bee);
        this.postsComponent.show();
        this.albumsComponent.hide();
        this.todosComponent.hide();
        this.newCommentComponent.hide();
        // this.newPostComponent.hide();
        // this.newTodoComponent.hide();
        // this.updatePostCount();
    };

    showBeeAlbums(bee) {
        this.unSelectBeeComponents();
        this.albumsComponent.showBeeAlbumsComponent(bee);
        this.postsComponent.hide();
        this.albumsComponent.show();
        this.todosComponent.hide();
        this.newCommentComponent.hide();
        // this.newPostComponent.hide();
        // this.newTodoComponent.hide();
    };

    showBeeTodos(bee) {
        this.unSelectBeeComponents();
        this.todosComponent.showBeeTodosComponent(bee);
        this.postsComponent.hide();
        this.albumsComponent.hide();
        this.todosComponent.show();
        this.newCommentComponent.hide();
        // this.newPostComponent.hide();
        // this.newTodoComponent.hide();
        // this.updateTodosCount();
    };

    showNewCommentComponent(post) {
        // this.disableNewBtn();
        this.postsComponent.hide();
        this.albumsComponent.hide();
        this.todosComponent.hide();
        this.newCommentComponent.show(post);
        // this.newPostComponent.hide();
        // this.newTodoComponent.hide();
    }

    hideNewCommentComponent() {
        this.showBeePosts(this.selectedBee);
    }

    hideNewTodoComponent() {
        this.showBeeTodos(this.selectedBee);
    }

    hideNewPostComponent() {
        this.showBeePosts(this.appManager.dataManager.bee);
    }

    unSelectBeeComponents() {
        this.users.forEach(beeComponent => {
            beeComponent.unSelected();
        });
    };

    // updatePostCount(){
    //     this.beeComponents.map(beeComponent => {
    //         if(beeComponent.model.id == this.selectedBee.id){
    //             beeComponent.updatePostCount();
    //         }
    //     });
    // }

    // updateTodosCount(){
    //     this.beeComponents.map(beeComponent => {
    //         if(beeComponent.model.id == this.selectedBee.id){
    //             beeComponent.updateTodosCount();
    //         }
    //     });
    // }
};