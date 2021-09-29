function createAbout() {
    const about = document.createElement('div');

    const title = document.createElement('h2');
    title.textContent = 'Acerca nuestro:'

    about.appendChild(title);

    const parrafo = document.createElement('p');
    parrafo.innerHTML = `Cuando salgas con tus amigos tenes un lugar donde no va a pasar nada. Con la mejor decoracion bolchevique, con la musica de Mercedes Sosa y Pablo Milanes. Todo en una atmosfera pseudoprogresista bien alejada de todo indicio de sensualidad. `;
    about.appendChild(parrafo);
    return about;
}

function setActiveBtn(id) {
    const activeBtn = document.querySelector('.tab.active');
    if (activeBtn) {
        activeBtn.classList.remove('active');
    }
    const homeBtn = document.getElementById(id);
    homeBtn.classList.add('active');
}

function loadHome() {
    const content = document.getElementById('tab-content');
    content.classList.add('flex');

    content.innerHTML = '';

    const aboutSec = createAbout();

    content.appendChild(aboutSec);
}

export default loadHome;