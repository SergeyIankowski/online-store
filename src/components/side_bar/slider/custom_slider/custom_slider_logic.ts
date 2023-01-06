export function fillSlider(from: HTMLInputElement, to: HTMLInputElement, sliderColor: string, rangeColor: string, controlSlider: HTMLInputElement) {
    const rangeDistance = parseInt(to.max, 10) - parseInt(to.min, 10);
    const fromPosition = parseInt(from.value, 10) - parseInt(to.min, 10);
    const toPosition = parseInt(to.value, 10) - parseInt(to.min, 10);
    controlSlider.style.background = `linear-gradient(
      to right,
      ${sliderColor} 0%,
      ${sliderColor} ${(fromPosition)/(rangeDistance)*100}%,
      ${rangeColor} ${((fromPosition)/(rangeDistance))*100}%,
      ${rangeColor} ${(toPosition)/(rangeDistance)*100}%, 
      ${sliderColor} ${(toPosition)/(rangeDistance)*100}%, 
      ${sliderColor} 100%)`;
}

export function getParsed(currentFrom: HTMLInputElement, currentTo: HTMLInputElement) {
  const from = parseInt(currentFrom.value, 10);
  const to = parseInt(currentTo.value, 10);
  return [from, to];
}

export function setToggleAccessible(currentTarget: HTMLInputElement) {
  if (Number(currentTarget.value) <= 0 ) {
    currentTarget.style.zIndex = '2';
  } else {
    currentTarget.style.zIndex = '0';
  }
}


export function controlToSlider(fromSlider: HTMLInputElement, toSlider: HTMLInputElement, toInput: HTMLInputElement) {
  const [from, to] = getParsed(fromSlider, toSlider);
  fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
  setToggleAccessible(toSlider);
  if (from! <= to!) {
    toSlider.value = to!.toString();
    toInput.value = to!.toString();
  } else {
    toInput.value = from!.toString();
    toSlider.value = from!.toString();
  }
}

export function controlToInput(toSlider: HTMLInputElement, fromInput: HTMLInputElement, toInput: HTMLInputElement, controlSlider: HTMLInputElement) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#C6C6C6', '#25daa5', controlSlider);
    setToggleAccessible(toInput);
    if (from! <= to!) {
        toSlider.value = to!.toString();
        toInput.value = to!.toString();
    } else {
        toInput.value = from!.toString();
    }
}

export function controlFromSlider(fromSlider: HTMLInputElement, toSlider: HTMLInputElement, fromInput: HTMLInputElement) {
  const [from, to] = getParsed(fromSlider, toSlider);
  fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
  if (from! > to!) {
    fromSlider.value = to!.toString();
    fromInput.value = to!.toString()
  } else {
    fromInput.value = from!.toString();
  }
}

export function controlFromInput(fromSlider: HTMLInputElement, fromInput: HTMLInputElement, toInput: HTMLInputElement, controlSlider: HTMLInputElement) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#C6C6C6', '#25daa5', controlSlider);
    if (from! > to!) {
        fromSlider.value = to!.toString();
        fromInput.value = to!.toString();
    } else {
        fromSlider.value = from!.toString();
    }
}
