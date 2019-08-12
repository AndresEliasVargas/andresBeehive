'use strict';

class BeeComponent{
    constructor(pModel, pParent, pUIManager){
        this.model = pModel;
        this.parent = pParent;
        this.uiManager = pUIManager; //mainComponent

        //Contenedor de los Bees
        this.beeContainer = document.createElement('div');
        this.beeContainer.classList.add('beeComponent');

        //contenedor de fotos y bee
        this.beeImgContainer = document.createElement('div');
        this.beeImgContainer.setAttribute('id', 'beeImgContainer');

        this.beeContainerData = document.createElement('div');
        this.beeContainerData.setAttribute('id', 'beeContainerData'); 

        //photo
        this.img = document.createElement('img');
        this.img.setAttribute('src', 'https://via.placeholder.com/150/92c952');

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
        this.linkTitle = document.createElement('b');

        this.url = this.model.website;

        this.linkTitle.innerHTML = 'Website: ';
        this.link.innerHTML = this.url;
        this.link.setAttribute('href', this.url);
        this.link.setAttribute('target', '_blank');
        this.website.append(this.linkTitle, this.link);

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

        //Append div's
        this.beeContainer.append(
            this.beeImgContainer,
            this.beeContainerData
        );

        //Add photo
        this.beeImgContainer.appendChild(this.img);

        //Append data to beeContainerData
        this.beeContainerData.append(
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