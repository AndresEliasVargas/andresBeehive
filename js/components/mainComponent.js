'use strict';

class MainComponent {
    constructor() {
        this.main = document.querySelector('#mainComponent');
        this.beesElement = document.querySelector('#beesComponent');
        this.beesInformation = document.querySelector('#beeInformation');

        this.main.append(this.beesElement, this.beesInformation);


        this.beesComponent = new BeesComponent(this);
        this.postsComponent = new PostsComponent(this.beesInformation, this);
        this.albumsComponent = new AlbumsComponent(this.beesInformation, this);
        this.todosComponent = new TodosComponent(this.beesInformation, this);
        this.newCommentComponent = new NewCommentComponent(this.beesInformation, this);
    };

    showMain(pUIManager) {
        this.beesComponent.showBees(pUIManager.appManager.dataManager.bees, pUIManager);
    };

    showBeePosts(bee) {
        this.postsComponent.showBeePostsComponent(bee);
        this.postsComponent.show();
        this.albumsComponent.hide();
        this.todosComponent.hide();
        this.newCommentComponent.hide();
    };

    showBeeAlbums(bee) {
        this.albumsComponent.showBeeAlbumsComponent(bee);
        this.postsComponent.hide();
        this.albumsComponent.show();
        this.todosComponent.hide();
        this.newCommentComponent.hide();
    };

    showBeeTodos(bee) {
        this.todosComponent.showBeeTodosComponent(bee);
        this.postsComponent.hide();
        this.albumsComponent.hide();
        this.todosComponent.show();
        this.newCommentComponent.hide();
    };

    showNewCommentComponent(post){
        this.postsComponent.hide();
        this.albumsComponent.hide();
        this.todosComponent.hide();
        this.newCommentComponent.show(post);
        // this.newPostComponent.hide();
        // this.newTodoComponent.hide();
    }
};