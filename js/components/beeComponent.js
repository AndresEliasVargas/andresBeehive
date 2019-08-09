'use strict';

class BeeComponent{
    constructor(pModel, pParent, pAppManager){
        this.model = pModel;
        this.parent = pParent;
        this.appManger = pAppManager;

        //Contenedor de los Bees
        this.container = document.createElement('div');
        this.container.classList.add('beeComponent');

        //Nombre del Bee
        this.title = document.createElement('h3');
        this.title.innerHTML = this.model.name;

        //Username
        this.username = document.createElement('p');
        this.username.innerHTML = '<b>Username: </b>' + this.model.username;

        //



        this.parent.appendChild(this.container);
        this.container.append(
            this.title,
            this.username
        );
    }
};