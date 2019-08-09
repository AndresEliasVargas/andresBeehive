'use strict';

class MainComponent{
    constructor(){
        this.main = document.createElement('main');
        this.main.setAttribute('id', 'mainComponent');
        this.beesComponent = new BeesComponent(this.main, this);
        this.postsComponent = new PostsComponent(this.main, this);
        // this.albumsComponent = new AlbumsComponent(this.main, this);
        // this.todosComponent = new TodosComponent(this.main, this);
    };

    showMain(pDiv, pAppManager){
        pDiv.appendChild(this.main);
        this.beesComponent.showBees(pAppManager.appManager.dataManager.bees, pAppManager);
    };

    showBeePosts(bee){
        this.postsComponent.showBeePostsComponent(bee);
        this.postsComponent.show();
        // this.albumsComponent.hide();
        // this.todosComponent.hide();
    };

    showBeeAlbums(){
        // this.todosComponent.showBeeAlbumsComponent(bee);
        this.postsComponent.hide();
        // this.albumsComponent.show();
        // this.todosComponent.hide();
    };

    showBeeTodos(){
        // this.todosComponent.showBeeTodosComponent(bee);
        this.postsComponent.hide();
        // this.albumsComponent.hide();
        // this.todosComponent.show();
    };
};