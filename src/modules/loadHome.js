function createAbout() {
    const about = document.createElement('div');
    
    const title = document.createElement('h2');
    title.textContent = 'Acerca nuestro:'

    about.appendChild(title);

    const parrafo = document.createElement('p');
    parrafo.innerHTML = `Cuando salgas con tus amigos tenes un lugar donde no va a pasar nada. Con la mejor decoracion bolchevique, con la musica de Mercedes Sosa y Pablo Milanes. Todo en una atmosfera pseudoprogresista bien alejada de todo indicio de sensualidad. `;
    about.appendChild(parrafo);
    const img = document.createElement('img');
    img.setAttribute('src', "https://i.ytimg.com/vi/nl_qphtirWg/hqdefault.jpg");
    img.setAttribute('alt', 'Local gastronomico llamado acá si que no se coge');
    img.setAttribute('width', 600);
    img.setAttribute('heigth', 600);
    img.classList.add('imagen');

    about.appendChild(img)
   

    return about;
}


function loadHome() {
    const content = document.getElementById('tab-content');
    content.classList.add('flex');

    content.innerHTML = '';

    const aboutSec = createAbout();

    content.appendChild(aboutSec);

}

export default loadHome;