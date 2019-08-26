'use strict';

class MainComponent {
    constructor(pAppManager) {
        this.appManager = pAppManager;
        this.main = document.querySelector('#mainComponent');
        this.beesElement = document.querySelector('#beesComponent');
        this.beesInformation = document.querySelector('#beeInformation');

        this.main.append(this.beesElement, this.beesInformation);


        this.beesComponent = new BeesComponent(this);
        // this.postsComponent = new PostsComponent(this.beesInformation, this);
        this.albumsComponent = new AlbumsComponent(this.beesInformation, this);
        this.todosComponent = new TodosComponent(this.beesInformation, this);
        this.newCommentComponent = new NewCommentComponent(this.beesInformation, this, this.appManager);
        // this.newPostComponent = new NewPostComponent(this.beesInformation, this, this.appManager);
    };

    showMain(pUIManager) {
        this.users = this.beesComponent.showBees(pUIManager.appManager.dataManager.bees);
    };

    showBeePosts(bee) {
        this.unSelectBeeComponents();
        // this.enableNewBtn();
        this.state = 1;
        this.selectedBee = bee;
        this.postsComponent.showBeePostsComponent(bee);
        this.postsComponent.show();
        this.albumsComponent.hide();
        this.todosComponent.hide();
        this.newCommentComponent.hide();
        this.newPostComponent.hide();
        // this.newTodoComponent.hide();
        // this.updatePostCount();
    };

    showBeeAlbums(bee) {
        this.unSelectBeeComponents();
        // this.disableNewBtn();
        this.state = 2;
        this.selectedBee = bee;
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
        // this.enableNewBtn();
        this.state = 3;
        this.selectedBee = bee;
        this.todosComponent.showBeeTodosComponent(bee);
        this.postsComponent.hide();
        this.albumsComponent.hide();
        this.todosComponent.show();
        this.newCommentComponent.hide();
        // this.newPostComponent.hide();
        // this.newTodoComponent.hide();
        // this.updateTodosCount();
    };

    showNewCommentComponent(model) {
        this.postsComponent.hide();
        this.albumsComponent.hide();
        this.todosComponent.hide();
        this.newCommentComponent.show(model);
        // this.newPostComponent.hide();
        // this.newTodoComponent.hide();
    };
    
    hideNewCommentComponent() {
        this.showBeePosts(this.selectedBee);
    }

    hideNewTodoComponent() {
        this.showBeeTodos(this.selectedBee);
    }

    hideNewPostComponent() {
        this.showBeePosts(this.appManager.dataManager.bee);
    }

    newBtnOnClick() {

        switch (this.state) {
            case 1:
                this.newPostComponent.show(this.appManager.dataManager.bee);
                this.newCommentComponent.hide();
                this.newTodoComponent.hide();
                this.postsComponent.hide();
                this.albumsComponent.hide();
                this.todosComponent.hide();
                break;
            case 3:
                this.newPostComponent.hide();
                this.newCommentComponent.hide();
                this.newTodoComponent.show(this.selectedBee);
                this.postsComponent.hide();
                this.albumsComponent.hide();
                this.todosComponent.hide();
                break;
            default:
                break;
        }
    };

    // disableNewBtn() {
    //     this.newBtn.disabled = true;
    // }

    // enableNewBtn() {
    //     this.newBtn.disabled = false;
    // }

    unSelectBeeComponents() {
        this.users.map(beeComponent => {
            beeComponent.unSelected();
        });
    };

    // updatePostCount(){
        // this.beeComponents.map(beeComponent => {
        //     if(beeComponent.model.id == this.selectedBee.id){
        //         beeComponent.updatePostCount();
        //     }
        // });
    //}

    // updateTodosCount(){
    //     this.beeComponents.map(beeComponent => {
    //         if(beeComponent.model.id == this.selectedBee.id){
    //             beeComponent.updateTodosCount();
    //         }
    //     });
    // }
};