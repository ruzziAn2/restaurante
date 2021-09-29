function createHeader(id, text) {
    const header = document.createElement('header');
    header.setAttribute('id', id);
    const h1 = document.createElement('h1');
    h1.innerHTML = text;
    header.appendChild(h1);
    return header;
}

function createBtn(id, text) {
    const btn = document.createElement('button');
    btn.setAttribute('id', id);
    btn.innerHTML = text;
    return btn;
}

function createNav(id) {
    const navigator = document.createElement('nav');
    navigator.setAttribute('id', id);

    const homebtn = createBtn('home', 'Home');
    const menubtn = createBtn('menu', 'Menu');

    navigator.appendChild(homebtn);
    navigator.appendChild(menubtn);

    return navigator;
}

function createMain(id) {
    const main = document.createElement('main');
    main.setAttribute('id', id);
    return main;
}

function loadPage(){
    console.log('Cargando pagina');

    const content = document.getElementById('content');
   

    const header = createHeader('header', '¡Acá si que no se coge!');
    content.appendChild(header);

    const nav = createNav('navigator');
    content.appendChild(nav);

    const tabContent = createMain('tab-content');
    content.appendChild(tabContent);

}

export default loadPage;