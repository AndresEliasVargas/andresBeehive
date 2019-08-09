'use strict';

class AppManager{
    constructor(){
        this.dataManager = new DataManager(this);
        this.uiManager = new UIManager(this);
    }

    completeDownload(){
        this.uiManager.showUI();
    };
};