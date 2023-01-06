import { controlFromInput, controlFromSlider, controlToInput, controlToSlider, fillSlider, setToggleAccessible } from "./custom_slider_logic";

export function renderCustomSlider(maxPrice: number, minPrice: number, ID: string, targetNode: HTMLElement): void {
    // const targetNode = <HTMLElement>document.querySelector('body');

    const rangeContainer: HTMLDivElement = document.createElement('div');
    rangeContainer.classList.add('range_container');

    const nameSlider: HTMLParagraphElement = document.createElement('p');
    nameSlider.textContent = ID;
    nameSlider.classList.add('name_slider');

    const slidersControl: HTMLDivElement = document.createElement('div');
    slidersControl.classList.add('sliders_control');
    const fromSliderPrice: HTMLInputElement = document.createElement('input');
    fromSliderPrice.setAttribute('id', `fromSlider${ID}`);
    fromSliderPrice.setAttribute('type', 'range');
    fromSliderPrice.setAttribute('value', `${minPrice}`);
    fromSliderPrice.setAttribute('min', `${minPrice}`);
    fromSliderPrice.setAttribute('max', `${maxPrice}`);
    const toSliderPrice: HTMLInputElement = document.createElement('input');
    toSliderPrice.setAttribute('id', `toSlider${ID}`);
    toSliderPrice.setAttribute('type', 'range');
    toSliderPrice.setAttribute('value', `${maxPrice}`);
    toSliderPrice.setAttribute('min', `${minPrice}`);
    toSliderPrice.setAttribute('max', `${maxPrice}`);
    slidersControl.append(fromSliderPrice, toSliderPrice);

    const formControl: HTMLDivElement = document.createElement('div');
    formControl.classList.add('form_control');
    const formControlContainerMin: HTMLDivElement = document.createElement('div');
    formControlContainerMin.classList.add('form_control_container');
    const formControlContainerTimeMin: HTMLDivElement = document.createElement('div');
    formControlContainerTimeMin.classList.add('form_control_container__time');
    formControlContainerTimeMin.textContent = 'Min';
    const formControlContainerTimeInputMin: HTMLInputElement = document.createElement('input');
    formControlContainerTimeInputMin.classList.add('form_control_container__time__input');
    formControlContainerTimeInputMin.setAttribute('type', 'number');
    formControlContainerTimeInputMin.setAttribute('id', `fromInput${ID}`);
    formControlContainerTimeInputMin.setAttribute('value', `${minPrice}`);
    formControlContainerTimeInputMin.setAttribute('min', `${minPrice}`);
    formControlContainerTimeInputMin.setAttribute('max', `${maxPrice}`);
    formControlContainerMin.append(formControlContainerTimeMin, formControlContainerTimeInputMin);

    const formControlContainerMax: HTMLDivElement = document.createElement('div');
    formControlContainerMax.classList.add('form_control_container');
    const formControlContainerTimeMax: HTMLDivElement = document.createElement('div');
    formControlContainerTimeMax.classList.add('form_control_container__time');
    formControlContainerTimeMax.textContent = 'Max';
    const formControlContainerTimeInputMax: HTMLInputElement = document.createElement('input');
    formControlContainerTimeInputMax.classList.add('form_control_container__time__input');
    formControlContainerTimeInputMax.setAttribute('type', 'number');
    formControlContainerTimeInputMax.setAttribute('id', `toInput${ID}`);
    formControlContainerTimeInputMax.setAttribute('value', `${maxPrice}`);
    formControlContainerTimeInputMax.setAttribute('min', `${minPrice}`);
    formControlContainerTimeInputMax.setAttribute('max', `${maxPrice}`);
    formControlContainerMax.append(formControlContainerTimeMax, formControlContainerTimeInputMax);

    formControl.append(formControlContainerMin, formControlContainerMax);
    rangeContainer.append(nameSlider, slidersControl, formControl);
    targetNode.append(rangeContainer);

    fillSlider(fromSliderPrice, toSliderPrice, '#C6C6C6', '#25daa5', toSliderPrice);
    setToggleAccessible(toSliderPrice)

    fromSliderPrice.oninput = () => controlFromSlider(fromSliderPrice, toSliderPrice, formControlContainerTimeInputMin);
    toSliderPrice.oninput = () => controlToSlider(fromSliderPrice, toSliderPrice, formControlContainerTimeInputMax);
    formControlContainerTimeInputMin.oninput = () => controlFromInput(fromSliderPrice, formControlContainerTimeInputMin, formControlContainerTimeInputMax, toSliderPrice);
    formControlContainerTimeInputMax.oninput = () => controlToInput(toSliderPrice, formControlContainerTimeInputMin, formControlContainerTimeInputMax, toSliderPrice)
}
