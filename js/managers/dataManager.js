'use strict';

class DataManager {
    constructor(pAppManager) {
        this.appManager = pAppManager;
        this.url = 'https://jsonplaceholder.typicode.com/';
        this.bees = [];
        this.getData();
        this.bee;
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
        const request = this.createRequest('comments', this.getCommentsCallback);
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

    createRequest(adress, callback) {
        let request = new XMLHttpRequest();
        request.open('GET', this.url + adress, true);
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
                let address = new Address('San José', geo, 'Calle 43', '3035', '10803');
                let company = new Company('​Si no vivimos como pensamos, pronto empezaremos a pensar como vivimos.', 'A trabajar carajo xD', 'Entrepreneur');
                this.bee = new Bee(0, 'Andrés Vargas', 'avargasr', 'andreselias.vargas@gmail.com', address, '506-7134-1350', 'https://github.com/AndresEliasVargas', company);
                this.bees.push(this.bee);

                data.map(userData => {
                    geo = new Geo(userData.address.geo.lat, userData.address.geo.lng);
                    address = new Address(userData.address.city, geo, userData.address.street, userData.address.suite, userData.address.zipcode);
                    company = new Company(userData.company.bs, userData.company.catchPhrase, userData.company.name);
                    let bee = new Bee(userData.id, userData.name, userData.username, userData.email, address, userData.phone, userData.website, company);
                    this.bees.push(bee);
                });

                this.getPosts();

            };
        };
    };

    getPostsCallback(e) {
        let request = e.target;

        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                const postsData = JSON.parse(request.response);
                //console.log(postsData);

                //Post 1
                let post = new Post(0, 0, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores velit perspiciatis esse eveniet alias enim, totam voluptas recusandae numquam tempora libero molestiae aliquid nesciunt. Tempore enim dolor eligendi tempora architecto!', 'Lorem Ipsum');
                this.addPostToBee(post);

                //Post 2
                post = new Post(101, 0, 'Has oratio denique nostrum eu. In eos impetus praesent. Ut fabellas sententiae sea, vix ut dicit diceret. Sea ea timeam contentiones. Ad qui essent legendos, id vix principes sadipscing consequuntur. Ex dicta delicata hendrerit eam, sea primis epicurei legendos ad.', 'Est ea quando sententiae');
                this.addPostToBee(post);

                postsData.map(postData => {
                    post = new Post(postData.id, postData.userId, postData.body, postData.title);
                    this.addPostToBee(post);
                });
            };

            this.getComments();
        };
    };

    getCommentsCallback(e) {
        let request = e.target;

        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                const commentsData = JSON.parse(request.response);

                //post 1
                let comment = new Comment(0, 'Usu animal inimicus vulputate an', 1, 'Cary@taurean.biz', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vero.');
                this.addCommentToPostBee(comment);

                comment = new Comment(0, 'Scripta appetere maiestatis mei ex', 2, 'Shanna@melissa.tv', 'Laboriosam quaerat sapiente minima nam minus similique illum architecto et!');
                this.addCommentToPostBee(comment);

                comment = new Comment(0, 'Pro cu dolorum delicata', 3, 'Nikita@garfield.biz', 'Incidunt vitae quae facere ducimus nostrum aliquid dolorum veritatis dicta!');
                this.addCommentToPostBee(comment);

                comment = new Comment(0, 'Feugiat delectus instructior cu ius has', 4, 'Lura@rod.tv', 'Tenetur laborum quod cum excepturi recusandae porro sint quas soluta!');
                this.addCommentToPostBee(comment);

                //post 2 - arreglar
                comment = new Comment(101, 'molestias et odio ut commodi omnis ex', 1, 'Telly.Hoeger@billy.biz', 'perferendis omnis esse voluptate sit mollitia sed perferendis nemo nostrum qui vel quis nisi doloribus animi odio id quas');
                this.addCommentToPostBee(comment);
                
                comment = new Comment(101, 'ipsum a ut', 2, 'Rey.Padberg@karina.biz', 'et ipsa rem ullam cum pariatur similique quia cum ipsam est sed aut inventore provident sequi commodi enim inventore assumenda aut aut tempora possimus soluta quia consequatur modi illo');
                this.addCommentToPostBee(comment);
                
                comment = new Comment(101, 'An sit nulla essent tamquam. Qui cu mazim senserit ea.', 3, 'Telly.Hoeger@billy.biz', 'est officiis placeat id et iusto ut fugit numquam eos aut voluptas ad quia tempore qui quibusdam doloremque recusandae tempora qui');
                this.addCommentToPostBee(comment);

                comment = new Comment(101, 'ut quas facilis laborum voluptatum consequatur odio voluptate et', 4, 'Shanna@melissa.tv', 'itaque veritatis explicabo quis voluptatem mollitia soluta id non doloribus nobis fuga provident nesciunt saepe molestiae praesentium laboriosam');
                this.addCommentToPostBee(comment);

                commentsData.map(commentData => {
                    //console.log(commentData);

                    comment = new Comment(commentData.postId, commentData.name, commentData.id, commentData.email, commentData.body);
                    this.addCommentToPostBee(comment);
                });
            };
            this.getAlbums();
        };
    };

    getAlbumsCallback(e) {
        let request = e.target;

        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                const albumsData = JSON.parse(request.response);
                //console.log(albumsData);


                let albumObj = new Album(101, 'Mascotas', 0);
                this.addAlbumToBee(albumObj);

                albumsData.map(album => {
                    //console.log(album);
                    albumObj = new Album(album.id, album.title, album.userId);
                    this.addAlbumToBee(albumObj);
                });
            };

            this.getPhotos();
        };
    };

    getPhotosCallback(e) {
        let request = e.target;

        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                const photosData = JSON.parse(request.response);
                //console.log(photosData);

                let photos = new Photo(101, 5001, '../../imgs/mascotasAlbum/pusheen.jpg', 'Pusshen', '../../imgs/pusheen.jpeg');
                this.addPhotosToAlbum(photos);

                photos = new Photo(101, 5002, '../../imgs/mascotasAlbum/molly.jpg', 'Molly', '../../imgs/molly.jpeg');
                this.addPhotosToAlbum(photos);

                photos = new Photo(101, 5003, '../../imgs/mascotasAlbum/luna.jpg', 'Luna', '../../imgs/luna.jpeg');
                this.addPhotosToAlbum(photos);

                photos = new Photo(101, 5004, '../../imgs/mascotasAlbum/bowie.jpg', 'Bowie', '../../imgs/bowie.jpeg');
                this.addPhotosToAlbum(photos);

                photosData.map(photo => {
                    photos = new Photo(photo.albumId, photo.id, photo.thumbnailUrl, photo.title, photo.url);
                    this.addPhotosToAlbum(photos);
                });
            };
            this.getTodos();
        };
    };

    getTodosCallback(e) {
        let request = e.target;

        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                const todosData = JSON.parse(request.response);
                //console.log(todosData);

                let todos = new Todos(0, 'Hacer tarea', 1, true);
                this.addTodosToBee(todos);

                todos = new Todos(0, 'Limpiar la casa', 2, false);
                this.addTodosToBee(todos);

                todos = new Todos(0, 'Cocinar', 3, true);
                this.addTodosToBee(todos);

                todos = new Todos(0, 'Estudiar', 4, false);
                this.addTodosToBee(todos);

                todosData.map(todo => {
                    // console.log(todo);

                    todos = new Todos(todo.userId, todo.title, todo.id, todo.completed);
                    this.addTodosToBee(todos);
                });
            };
            this.appManager.completeDownload();
        };
    };


    //Add Info to respective Objects
    addPostToBee(post) {
        for (let i = 0; i < this.bees.length; i++) {
            const bee = this.bees[i];
            if (bee.id === post.userId) {
                bee.posts.push(post);
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
                };
            };
        };
    };

    addAlbumToBee(album) {
        for (let i = 0; i < this.bees.length; i++) {
            const bee = this.bees[i];
            if (bee.id === album.userId) {
                bee.albums.push(album);
            };
        };
    }

    addPhotosToAlbum(photo) {
        for (let i = 0; i < this.bees.length; i++) {
            const bee = this.bees[i];
            for (let j = 0; j < bee.albums.length; j++) {
                const album = bee.albums[j];
                if (album.id === photo.albumId) {
                    album.photos.push(photo);
                };
            };
        };
    };

    addTodosToBee(todo) {
        for (let i = 0; i < this.bees.length; i++) {
            const bee = this.bees[i];
            if (bee.id === todo.userId) {
                bee.todos.push(todo);
            };
        };
    };
};