'use strict';

class Album{
    constructor(pId, pTitle, pUserId){
        this.id = pId;
        this.title = pTitle;
        this.userId = pUserId;

        this.photos = [];
    };
};