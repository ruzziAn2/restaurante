function createMenu(src, alt, text, price) {
    const cont = document.createElement('div');
    cont.classList.add('container');

    const img = document.createElement('img');
    img.setAttribute('src', src);
    img.setAttribute('alt', alt);
    img.setAttribute('width', 700);
    img.setAttribute('heigth', 500);

    const desc = document.createElement('div');
    desc.classList.add('description');

    const foodName = document.createElement('div');
    foodName.innerHTML = text;

    const cost = document.createElement('div');
    cost.innerHTML = price;
    cost.classList.add('costo');

    desc.appendChild(foodName);
    desc.appendChild(cost);

    cont.appendChild(img);
    cont.appendChild(desc);

    return cont;
}

function setActiveBtn(id) {
    const activeBtn = document.querySelector('.tab.active');
    if (activeBtn) {
        activeBtn.classList.remove('active');
    }
    const menuBtn = document.getElementById(id);
    menuBtn.classList.add('active');
}

function loadMenu() {
    const content = document.getElementById('tab-content');
    content.classList.add('flex');
    content.textContent = '';
    const items = [
        createMenu('https://www.ocu.org/-/media/ocu/images/themes/alimentacion/alimentos/tips/pollo%20guia%20para%20elegir%20y%20conservar/456844_thumbnail.jpg?rev=0e3d5afb-0096-4cbb-8cb9-681c40b3931b&hash=BFA0625F79DEFA51156AAB8C93A66D41',
            "Pollo",
            "Pollo rico en transgenicos",
            'Barato'
        ),
        createMenu('https://www.hola.com/imagenes/cocina/noticiaslibros/20210301185081/recetas-con-pescados-de-temporada/0-923-910/besugos-age-a.jpg',
            'Pescado',
            'Pescado rico en mercurio',
            'CARISIMOOO'),
        createMenu('https://storage.contextoganadero.com/s3fs-public/blog/field_image/2018-10/26-10_importancia_color_carne.jpg',
            'Carne de Res',
            'Vaquita',
            'Está lo que está')
    ]

    items.forEach((food) => {
        content.append(food);
    });
}

export default loadMenu;