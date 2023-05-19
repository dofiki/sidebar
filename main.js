const body = document.querySelector('.body');
const rightBtn = body.querySelector('.rightArrow');
const leftBtn = body.querySelector('.leftArrow');

const sideBar = body.querySelector('.sideBar')


rightBtn.addEventListener('click', addSidebar);

function addSidebar(){
    sideBar.classList.add('active');
}

leftBtn.addEventListener('click', removeSidebar);

function removeSidebar(){
    sideBar.classList.remove('active');
}
