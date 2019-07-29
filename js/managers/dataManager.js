'use strict';

class DataManager {
    constructor(pAppManager) {
        this.appManager = pAppManager;
        this.url = 'https://jsonplaceholder.typicode.com/';
        this.users = [];

        this.getData();
    };

    getData() {
        //console.log('downloadData');
        this.getUsers();
    };

    //Get JSON
    getUsers() {
        let request = new XMLHttpRequest();
        request.open('GET', this.url + 'users', true);
        request.onreadystatechange = this.getUsersCallback.bind(this);
        request.send();
    };

    getPosts() {
        let request = new XMLHttpRequest();
        request.open('GET', this.url + 'posts', true);
        request.onreadystatechange = this.getPostsCallback.bind(this);
        request.send();
    };

    getComments() {
        let request = new XMLHttpRequest();
        request.open('GET', this.url + 'comments', true);
        request.onreadystatechange = this.getComentsCallback.bind(this);
        request.send();
    };

    getAlbums() {
        let request = new XMLHttpRequest();
        request.open('GET', this.url + 'albums', true);
        request.onreadystatechange = this.getAlbumsCallback.bind(this);
        request.send();
    };

    getPhotos() {
        let request = new XMLHttpRequest();
        request.open('GET', this.url + 'photos', true);
        request.onreadystatechange = this.getPhotosCallback.bind(this);
        request.send();
    };

    getTodos() {
        let request = new XMLHttpRequest();
        request.open('GET', this.url + 'todos', true);
        request.onreadystatechange = this.getTodosCallback.bind(this);
        request.send();
    };


    //Get CallBacks
    getUsersCallback(e) {
        let request = e.target;

        if (request.readyState === XMLHttpRequest.DONE){
            if (request.status === 200){
                const data = JSON.parse(request.response);
                console.log(data);

                //Parse Posts
                this.getPosts();
                this.getComments();
                this.getAlbums();
                this.getPhotos();
                this.getTodos();
            };
        };
    };

    getPostsCallback(e) {
        let request = e.target;

        if (request.readyState === XMLHttpRequest.DONE){
            if (request.status === 200){
                const data = JSON.parse(request.response);
                console.log(data);
            };
        };
    };

    getComentsCallback(e) {
        let request = e.target;

        if (request.readyState === XMLHttpRequest.DONE){
            if (request.status === 200){
                const data = JSON.parse(request.response);
                console.log(data);
            };
        };
    };

    getAlbumsCallback(e) {
        let request = e.target;

        if (request.readyState === XMLHttpRequest.DONE){
            if (request.status === 200){
                const data = JSON.parse(request.response);
                console.log(data);
            };
        };
    };

    getPhotosCallback(e) {
        let request = e.target;

        if (request.readyState === XMLHttpRequest.DONE){
            if (request.status === 200){
                const data = JSON.parse(request.response);
                console.log(data);
            };
        };
    };

    getTodosCallback(e) {
        let request = e.target;

        if (request.readyState === XMLHttpRequest.DONE){
            if (request.status === 200){
                const data = JSON.parse(request.response);
                console.log(data);
            };
        };
    };

    //Compare
    setUserPost(post) {
		this.users.forEach(user => {
			if (user.id === post.userid) {
				//add post to user
			}
		});
	}

};