'use strict';

class BeeComponent{
    constructor(pModel, pParent, pUIManager){
        this.model = pModel;
        this.parent = pParent;
        this.uiManager = pUIManager; //mainComponent

        //Contenedor de los Bees
        this.beeContainer = document.createElement('div');
        this.beeContainer.classList.add('beeComponent');

        //Nombre del Bee
        this.title = document.createElement('h3');
        this.title.innerHTML = this.model.name;

        //Username
        this.username = document.createElement('p');
        this.username.innerHTML = 
            '<b>Username: </b>' + 
            this.model.username;

        //Email
        this.email = document.createElement('p');
        this.email.innerHTML = 
            '<b>Email: </b>' + 
            this.model.email;

        //Address
        this.address = document.createElement('p');
        this.address.innerHTML = 
            '<b>Address: </b>' +
            this.model.address.suite +
            ', ' +
            this.model.address.street +
            ', ' +
            this.model.address.city +
            ', ' +
            this.model.address.zipCode;

        //Phone
        this.phone = document.createElement('p');
        this.phone.innerHTML =
            '<b>Phone: </b>' +
            this.model.phone;
        
        //Website
        this.website = document.createElement('p');
        this.link = document.createElement('a');

        this.url = this.model.website;

        this.link.innerHTML = this.url;
        this.link.setAttribute('href', this.url);
        this.link.setAttribute('target', '_blank');
        this.website.appendChild(this.link);

        //Button Container
        this.buttonsContainer = document.createElement('div');
        this.buttonsContainer.classList.add('buttonsContainer');
        
        //Buttons
        this.btnPost = document.createElement('button');
        this.btnPost.classList.add('buttonsBee');
        this.btnPost.innerHTML = 'Post: ' + this.model.posts.length;
        this.btnPost.onclick = this.onBtnPostClick.bind(this);

        this.btnAlbum = document.createElement('button');
        this.btnAlbum.classList.add('buttonsBee');
        this.btnAlbum.innerHTML = 'Album: ' + this.model.posts.length;
        this.btnAlbum.onclick = this.onBtnAlbumClick.bind(this);

        this.btnTodos = document.createElement('button');
        this.btnTodos.classList.add('buttonsBee');
        this.btnTodos.innerHTML = 'Todos: ' + this.model.posts.length;
        this.btnTodos.onclick = this.onBtnTodosClick.bind(this);


        //Append Containers Bee to section BeesComponent
        this.parent.appendChild(this.beeContainer);

        //Append data to BeeContainer
        this.beeContainer.append(
            this.title,
            this.username,
            this.email,
            this.address,
            this.phone,
            this.website,
            this.buttonsContainer
        );

        //Append buttons to buttonContainer
        this.buttonsContainer.append(
            this.btnPost,
            this.btnAlbum,
            this.btnTodos
        );

    };

    onBtnPostClick(){
        window.scrollTo(0, 0);
        this.uiManager.showBeePosts(this.model);
    };

    onBtnAlbumClick(){
        window.scrollTo(0, 0);
        this.uiManager.showBeeAlbums(this.model);
    };

    onBtnTodosClick(){
        window.scrollTo(0, 0);
        this.uiManager.showBeeTodos(this.model);
    };
};