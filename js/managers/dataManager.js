'use strict';

class DataManager {
    constructor(pAppManager) {
        this.appManager = pAppManager;
        this.url = 'https://jsonplaceholder.typicode.com/';
        this.bees = [];

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

                //Datos Quemados
                let company = new Company('Si no vivimos como pensamos, pronto empezaremos a pensar como vivimos', 'A trabajar carajo xD', 'Entrepreneur');
                let geo = new Geo(0, 0);
                let address = new Address('San José', geo, 'Calle 43', '1000', '10803');
                let bee = new Bee(0, 'Andrés Vargas', 'avargasr', 'andreselias.vargas@gmail.com', address, '71341350', 'https://github.com/AndresEliasVargas', company);
                this.bees.push(bee);

                data.map(userData => {
                    company = new Company(userData.company.bs, userData.company.catchPhrase, userData.company.name);
                    geo = new Geo(userData.address.geo.lat, userData.address.geo.lng);
                    address = new Address(userData.address.city, geo, userData.address.street, userData.address.suite, userData.address.zipcode);
                    bee = new Bee(userData.id, userData.name, userData.username, userData.email, address, userData.phone, userData.website, company);

                    this.bees.push(bee);
                });

                //Parse All
                this.getPosts();

                console.log(this.bees);
            };
        };
    };

    getPostsCallback(e) {
        let request = e.target;

        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                const posts = JSON.parse(request.response);

                posts.map(postData => {
                    let post = new Post(postData.id, postData.userId, postData.body, postData.title);

                    this.addPostToBee(post);

                    console.log(post);
                });
            };
        };
    };

    getComentsCallback(e) {
        let request = e.target;

        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                const data = JSON.parse(request.response);
                console.log(data);
            };
        };
    };

    getAlbumsCallback(e) {
        let request = e.target;

        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                const data = JSON.parse(request.response);
                console.log(data);
            };
        };
    };

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

    //Relations
    addPostToBee(post) {
        for (let i = 0; i < this.bees.lenght; i++) {
            const bee = this.bees[i];

            if (bee.id === post.userId) {
                bee.posts.push(post);
            };
        };
    };

};