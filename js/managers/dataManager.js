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
        const request = this.getUsers();
    };

    //Get JSON
    getUsers() {
        const request = this.createRequest('users', this.getUsersCallback);
    };

    getPosts() {
        const request = this.createRequest('posts', this.getPostsCallback);
    };

    getComments() {
        const request = this.createRequest('commets', this.getComentsCallback);
    };

    getAlbums() {
        const request = this.createRequest('albums', this.getAlbumsCallback);
    };

    getPhotos() {
        const request = this.createRequest('photos', this.getPhotosCallback);
    };

    getTodos() {
        const request = this.createRequest('todos', this.getTodosCallback);
    };

    createRequest(value, callback){
        let request = new XMLHttpRequest();
        request.open('GET', this.url + value, true);
        request.onreadystatechange = callback.bind(this);
        request.send();
        return request;
    }

    //Get CallBacks
    getUsersCallback(e) {
        let request = e.target;

        if (request.readyState === XMLHttpRequest.DONE){
            if (request.status === 200){
                const data = JSON.parse(request.response);
                //console.log(data);

                data.map(userData => {
                    let bee = new Bee(userData.id, userData.name, userData.username, userData.email, userData.address, userData.phone, userData.website, userData.company);
                    console.log(bee);
                });
            };
        };
    };

    getPostsCallback(e) {
        let request = e.target;

        if (request.readyState === XMLHttpRequest.DONE){
            if (request.status === 200){
                const data = JSON.parse(request.response);
                //console.log(data);
            };
        };
    };

    getComentsCallback(e) {
        let request = e.target;

        if (request.readyState === XMLHttpRequest.DONE){
            if (request.status === 200){
                const data = JSON.parse(request.response);
                //console.log(data);
            };
        };
    };

    getAlbumsCallback(e) {
        let request = e.target;

        if (request.readyState === XMLHttpRequest.DONE){
            if (request.status === 200){
                const data = JSON.parse(request.response);
                //console.log(data);
            };
        };
    };

    getPhotosCallback(e) {
        let request = e.target;

        if (request.readyState === XMLHttpRequest.DONE){
            if (request.status === 200){
                const data = JSON.parse(request.response);
                //console.log(data);
            };
        };
    };

    getTodosCallback(e) {
        let request = e.target;

        if (request.readyState === XMLHttpRequest.DONE){
            if (request.status === 200){
                const data = JSON.parse(request.response);
                //console.log(data);
            };
        };
    };

    //Compare
    setUserPost(post) {
		this.users.map(user => {
			if (user.id === post.userid) {
				//add post to user
			}
		});
	}

};