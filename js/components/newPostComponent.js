// 'use strict';

// 'use strict';

// class NewPostComponent {
//     constructor(pMain, pUIManager, pAppManager) {
//         this.main = pMain;
//         this.uiManager = pUIManager;
//         this.appManager = pAppManager;

//         this.rowContainer = document.getElementById('newPostComponent');
//         this.rowContainer.classList.add(
//             'row',
//             'rounded',
//             'my-4'
//         );

//         this.leftContainer = document.createElement('div');
//         this.leftContainer.classList.add(
//             'col-md-2'
//         );

//         this.rightContainer = document.createElement('div');
//         this.rightContainer.classList.add(
//             'col-md-2'
//         );

//         this.principalContainer = document.createElement('div');
//         this.principalContainer.classList.add(
//             'col-md-8',
//             'bg-white',
//             'form-group'
//         );

//         this.title = document.createElement('h2');
//         this.title.innerHTML = 'New Post';


//         this.inputName = document.createElement('input');
//         this.inputName.type = 'text';
//         this.inputName.placeholder = 'Title';
//         this.inputName.setAttribute('id', 'inputTitleComment');
//         this.inputName.classList.add(
//             'my-3',
//             'form-control'
//         );

//         this.textAreaBody = document.createElement('textarea');
//         this.textAreaBody.placeholder = 'Body';
//         this.textAreaBody.rows = 4;
//         this.textAreaBody.cols = 40;
//         this.textAreaBody.classList.add(
//             'mb-4',
//             'form-control'
//         );

//         this.addPost = document.createElement('button');
//         this.addPost.onclick = this.addPostBtnOnClick.bind(this);
//         this.addPost.innerHTML = 'Add';
//         this.addPost.classList.add(
//             'btn',
//             'btn-success',
//             'btn-lg',
//             'btn-block',
//             'mb-2'
//         );

//         this.rowContainer.append(
//             this.leftContainer,
//             this.principalContainer,
//             this.rightContainer
//         );

//         this.principalContainer.append(
//             this.title,
//             this.inputName,
//             this.textAreaBody,
//             this.addPost
//         );

//         this.rowContainer.hidden = true;
//     }

//     addPostBtnOnClick() {
//         let post = new Post(
//             0,
//             this.appManager.dataManager.bee.id,
//             this.textAreaBody.value,
//             this.inputName.value
//         );

//         this.model.posts.unshift(post);
//         this.model = null;
//         this.uiManager.hideNewPostComponent();
//         this.inputName.value = '';
//         this.textAreaBody.value = '';
//     }

//     show(pmodel) {
//         console.log(this.model);
        
//         this.model = pmodel;
//         this.rowContainer.hidden = false;
//     }

//     hide() {
//         this.rowContainer.hidden = true;
//     }
// };