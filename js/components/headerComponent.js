'use strict';

class Header{
    constructor(){
        this.header = document.createElement('header');
        this.header.setAttribute('id', 'header');

        this.title = document.createElement('h1');
        this.title.innerHTML = 'Beehive';

        this.header.appendChild(this.title);
    };

    showTitle(pDiv){
        pDiv.prepend(this.header);
    };
};