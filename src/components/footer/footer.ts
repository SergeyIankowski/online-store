import './footer.css';

export function renderFooter(targetNode: HTMLElement) {

        const footer: HTMLElement = document.createElement('footer');
        footer.classList.add('footer');

        const wrapper: HTMLDivElement = document.createElement('div');
        wrapper.classList.add('wrapper');

        const linksContainer: HTMLElement = document.createElement('div');
        linksContainer.classList.add('links__container', 'container');

        const firstAuthor: HTMLElement = document.createElement('a');
        firstAuthor.classList.add('link');
        firstAuthor.textContent = 'ImmelstronDev';
        firstAuthor.setAttribute('href', 'https://github.com/ImmelstronDev');

        const secondAuthor: HTMLElement = document.createElement('a');
        secondAuthor.classList.add('link');
        secondAuthor.textContent = 'SergeyIankowski';
        secondAuthor.setAttribute('href', 'https://github.com/SergeyIankowski');

        const imgContainer: HTMLElement = document.createElement('div');
        imgContainer.classList.add('img__container', 'container');

        const imgLink: HTMLElement = document.createElement('a');
        imgLink.classList.add('img__link');
        imgLink.setAttribute('href', 'https://rs.school/js/');

        const imgCourse: HTMLElement = document.createElement('img');
        imgCourse.classList.add('img');
        imgCourse.setAttribute('src', '../assets/img/rs_school_js.svg');

        imgLink.append(imgCourse);
        imgContainer.append(imgLink);
        linksContainer.append(firstAuthor, secondAuthor);
        wrapper.append(linksContainer, imgContainer);
        footer.append(wrapper);
        targetNode.append(footer);
    }
