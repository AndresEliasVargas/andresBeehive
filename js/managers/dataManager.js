'use strict';

class DataManager {
    constructor(pAppManager) {
        this.appManager = pAppManager;
        this.url = 'https://jsonplaceholder.typicode.com/';
        this.bees = [];
        this.getData();
    };

    getData() {
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
        const request = this.createRequest('comments', this.getComentsCallback);
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

    createRequest(value, callback) {
        let request = new XMLHttpRequest();
        request.open('GET', this.url + value, true);
        request.onreadystatechange = callback.bind(this);
        request.send();
        return request;
    }

    //Get CallBacks
    getUsersCallback(e) {
        let request = e.target;

        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                const data = JSON.parse(request.response);
                //console.log(data);	

                let geo = new Geo(0, 0);
                let address = new Address('Cartago', geo, '200 mts oeste del estadio', '1000', '1000');
                let company = new Company('Todos para uno y uno para todos.', 'La luna es bonita', 'Arajo');
                let bee = new Bee(0, 'Esteban', 'epadilla', 'epadilla@mail.com', address, '87066660', 'estebanpadilla.com', 'Esteban Company');
                this.bees.push(bee);

                data.forEach(userData => {
                    geo = new Geo(userData.address.geo.lat, userData.address.geo.lng);
                    address = new Address(userData.address.city, geo, userData.address.street, userData.address.suite, userData.address.zipcode);
                    company = new Company(userData.company.bs, userData.company.catchPhrase, userData.company.name);
                    bee = new Bee(userData.id, userData.name, userData.username, userData.email, address, userData.phone, userData.website, company);
                    this.bees.push(bee);
                });

                this.getPosts();
                this.getAlbums();
                //this.getPhotos();
                //this.getTodos();

                console.log(this.bees);
            };
        };
    };

    getPostsCallback(e) {
        let request = e.target;

        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                const postsData = JSON.parse(request.response);

                postsData.forEach(postData => {
                    let post = new Post(postData.id, postData.userId, postData.body, postData.title);
                    this.addPostToBee(post);
                });
            };

            this.getComments();
        };
    };

    addPostToBee(post) {
        for (let i = 0; i < this.bees.length; i++) {
            const bee = this.bees[i];
            if (bee.id === post.userId) {
                bee.posts.push(post);
                break;
            };
        };
    };

    getComentsCallback(e) {
        let request = e.target;

        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                const commentsData = JSON.parse(request.response);

                commentsData.map(commentData => {
                    //console.log(commentData);

                    let comment = new Comment(commentData.postId, commentData.name, commentData.id, commentData.email, commentData.body);
                    this.addCommentToPostBee(comment);
                });
            };
        };
    };

    addCommentToPostBee(comment) {
        for (let i = 0; i < this.bees.length; i++) {
            const bee = this.bees[i];
            for (let j = 0; j < bee.posts.length; j++) {
                const post = bee.posts[j];
                if (post.id === comment.postId) {
                    post.comments.push(comment);
                    break;
                };
            };
        };
    };

    getAlbumsCallback(e) {
        let request = e.target;

        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                const albumsData = JSON.parse(request.response);
                
                albumsData.map(album => {
                    //console.log(album);
                    let album = new Album(album.id, album.title, album.userId);
                    this.addPhotosToBee(album);
                });
            };
        };
    };

    addPhotosToBee(album){
        for (let i = 0; i < this.bees.length; i++) {
            const bee = this.bees[i];
            if (bee.id === album.userId) {
                bee.posts.push(album);
                break;
            };
        };
    }

    getPhotosCallback(e) {
        let request = e.target;

        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                const data = JSON.parse(request.response);
                console.log(data);
            };
        };
    };

    getTodosCallback(e) {
        let request = e.target;

        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                const data = JSON.parse(request.response);
                console.log(data);
            };
        };
    };

};