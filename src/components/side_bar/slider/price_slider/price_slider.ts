
export function renderPriceSlider(maxPrice: number, minPrice: number):void {
    const main = <HTMLElement>document.querySelector('.main');

    const rangeContainer: HTMLDivElement = document.createElement('div');
    rangeContainer.classList.add('range_container')
    
    const slidersControl: HTMLDivElement = document.createElement('div');
    slidersControl.classList.add('sliders_control')
    const fromSliderPrice: HTMLInputElement = document.createElement('input');
    fromSliderPrice.setAttribute('id', 'fromSliderPrice');
    fromSliderPrice.setAttribute('type', 'range');
    fromSliderPrice.setAttribute('value', `${minPrice}`);
    fromSliderPrice.setAttribute('min', `${minPrice}`);
    fromSliderPrice.setAttribute('max', `${maxPrice}`);
    const toSliderPrice: HTMLInputElement = document.createElement('input');
    toSliderPrice.setAttribute('id', 'toSliderPrice');
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
    formControlContainerTimeInputMin.setAttribute('id', 'fromInputPrice');
    formControlContainerTimeInputMin.setAttribute('value', `${minPrice}`);
    formControlContainerTimeInputMin.setAttribute('min', `${minPrice}`);
    formControlContainerTimeInputMin.setAttribute('max', `${maxPrice}`);
    formControlContainerMin.append(formControlContainerTimeMin,formControlContainerTimeInputMin);

    const formControlContainerMax: HTMLDivElement = document.createElement('div');
    formControlContainerMax.classList.add('form_control_container');
    const formControlContainerTimeMax: HTMLDivElement = document.createElement('div');
    formControlContainerTimeMax.classList.add('form_control_container__time');
    formControlContainerTimeMax.textContent = 'Max';
    const formControlContainerTimeInputMax: HTMLInputElement = document.createElement('input');
    formControlContainerTimeInputMax.classList.add('form_control_container__time__input');
    formControlContainerTimeInputMax.setAttribute('type', 'number');
    formControlContainerTimeInputMax.setAttribute('id', 'toInputPrice');
    formControlContainerTimeInputMax.setAttribute('value', `${maxPrice}`);
    formControlContainerTimeInputMax.setAttribute('min', `${minPrice}`);
    formControlContainerTimeInputMax.setAttribute('max', `${maxPrice}`);
    formControlContainerMax.append(formControlContainerTimeMax, formControlContainerTimeInputMax);
    
    formControl.append(formControlContainerMin, formControlContainerMax);
    rangeContainer.append(slidersControl, formControl);
    main.append(rangeContainer);
};
