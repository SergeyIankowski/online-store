import './footer.scss';
import RSSchoolIcon from '../../assets/img/rs_school_js.svg';

export function renderFooter(targetNode: HTMLElement | DocumentFragment) {
    const footer: HTMLElement = document.createElement('footer');
    footer.classList.add('footer');

    const wrapper: HTMLDivElement = document.createElement('div');
    wrapper.classList.add('wrapper');

    const linksContainer: HTMLElement = document.createElement('div');
    linksContainer.classList.add('footer__links', 'authors');

    const firstAuthor: HTMLElement = document.createElement('a');
    firstAuthor.classList.add('authors__author-link');
    firstAuthor.textContent = 'ImmelstronDev';
    firstAuthor.setAttribute('href', 'https://github.com/ImmelstronDev');

    const secondAuthor: HTMLElement = document.createElement('a');
    secondAuthor.classList.add('authors__author-link');
    secondAuthor.textContent = 'SergeyIankowski';
    secondAuthor.setAttribute('href', 'https://github.com/SergeyIankowski');

    const imgContainer: HTMLElement = document.createElement('div');
    imgContainer.classList.add('footer__image-container', 'course-image-container');

    const imgLink: HTMLElement = document.createElement('a');
    imgLink.classList.add('course-image-container__link');
    imgLink.setAttribute('href', 'https://rs.school/js/');

    const imgCourse: HTMLImageElement = document.createElement('img');
    imgCourse.classList.add('course-image-container__icon');
    imgCourse.src = RSSchoolIcon;

    imgLink.append(imgCourse);
    imgContainer.append(imgLink);
    linksContainer.append(firstAuthor, secondAuthor);
    wrapper.append(linksContainer, imgContainer);
    footer.append(wrapper);
    targetNode.append(footer);
}
