'use strict';

class AppManager{
    constructor(){
        this.dataManager = new DataManager(this);
        this.uiManager = new UiManager(this);
    }

    completeDownload(){
        this.uiManager.showUI();
    };
};