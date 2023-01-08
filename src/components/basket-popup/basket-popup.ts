import {
    addressValidate,
    cardCVVValidate,
    cardMonthYearValidation,
    cardNumberValidation,
    emailValidate,
    nameValidate,
    phoneValidate,
} from '../../utils/form-validations';
import { isAllInputFieldsValid } from '../../utils/isAllInputFieldsValid';
import './basket-popup.scss';

export function renderBasketPopup(targetNode: HTMLElement) {
    const basketPopup: HTMLDivElement = document.createElement('div');
    basketPopup.classList.add('basket-popup');

    const overlay: HTMLDivElement = document.createElement('div');
    overlay.classList.add('overlay');

    const formNode: HTMLFormElement = document.createElement('form');
    formNode.classList.add('basket-popup__form', 'send-form');
    formNode.action = '/';

    const formNodeTitle: HTMLHeadElement = document.createElement('h3');
    formNodeTitle.classList.add('send-form__title');
    formNodeTitle.innerText = 'Personal details';

    const nameInput: HTMLInputElement = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'name';
    nameInput.placeholder = 'Name and Last Name';
    nameInput.classList.add('send-form__input');

    const phoneInput: HTMLInputElement = document.createElement('input');
    phoneInput.type = 'text';
    phoneInput.name = 'phone';
    phoneInput.placeholder = '+37529******';
    phoneInput.classList.add('send-form__input');

    const addressInput: HTMLInputElement = document.createElement('input');
    addressInput.type = 'text';
    addressInput.name = 'address';
    addressInput.placeholder = 'Delivery Address';
    addressInput.classList.add('send-form__input');

    const emailInput: HTMLInputElement = document.createElement('input');
    emailInput.type = 'email';
    emailInput.name = 'email';
    emailInput.placeholder = 'Email';
    emailInput.classList.add('send-form__input', 'send-form__email');

    const formNodeSubtitle: HTMLHeadElement = document.createElement('h3');
    formNodeSubtitle.classList.add('send-form__title');
    formNodeSubtitle.innerText = 'Credit card details';

    const formNodeCard: HTMLDivElement = document.createElement('div');
    formNodeCard.classList.add('send-form__card', 'card-field');

    const cardNumber: HTMLInputElement = document.createElement('input');
    cardNumber.type = 'text';
    cardNumber.name = 'cardNumber';
    cardNumber.placeholder = 'Card Number';
    cardNumber.classList.add('card-field__input', 'card-field__card-number');

    const monthYearInputLabel: HTMLLabelElement = document.createElement('label');
    monthYearInputLabel.classList.add('send-form__label', 'card-field__month-year');
    monthYearInputLabel.innerText = 'Valid: ';
    const monthYearInputInput: HTMLInputElement = document.createElement('input');
    monthYearInputInput.type = 'text';
    monthYearInputInput.name = 'monthYear';
    monthYearInputInput.placeholder = 'Month / Year';
    monthYearInputInput.classList.add('card-field__input');
    monthYearInputLabel.append(monthYearInputInput);

    const cvvInputLabel: HTMLLabelElement = document.createElement('label');
    cvvInputLabel.classList.add('send-form__label', 'card-field__cvv');
    cvvInputLabel.innerText = 'CVV: ';
    const cvvInput: HTMLInputElement = document.createElement('input');
    cvvInput.type = 'number';
    cvvInput.name = 'cvv';
    cvvInput.placeholder = 'CVV';
    cvvInput.classList.add('card-field__input');
    cvvInputLabel.append(cvvInput);

    const formNodeButton: HTMLButtonElement = document.createElement('button');
    formNodeButton.type = 'button';
    formNodeButton.innerText = 'Confirm';
    formNodeButton.classList.add('send-form__submit-button');
    formNodeButton.disabled = true;

    formNodeCard.append(cardNumber, monthYearInputLabel, cvvInputLabel);
    formNode.append(
        formNodeTitle,
        nameInput,
        phoneInput,
        addressInput,
        emailInput,
        formNodeSubtitle,
        formNodeCard,
        formNodeButton
    );
    overlay.append(formNode);
    basketPopup.append(overlay);

    overlay.addEventListener('click', (e: Event) => {
      e.stopPropagation()
      const targ = e.target as HTMLElement;
      if(targ.classList.contains('overlay')) {
        basketPopup.remove()
      }
    });

    nameInput.addEventListener('input', (e: Event) => {
        nameValidate(e);
        isAllInputFieldsValid(
            formNodeButton,
            nameInput,
            phoneInput,
            addressInput,
            emailInput,
            cardNumber,
            monthYearInputInput,
            cvvInput
        );
    });
    phoneInput.addEventListener('input', (e: Event) => {
        phoneValidate(e);
        isAllInputFieldsValid(
            formNodeButton,
            nameInput,
            phoneInput,
            addressInput,
            emailInput,
            cardNumber,
            monthYearInputInput,
            cvvInput
        );
    });
    addressInput.addEventListener('input', (e: Event) => {
        addressValidate(e);
        isAllInputFieldsValid(
            formNodeButton,
            nameInput,
            phoneInput,
            addressInput,
            emailInput,
            cardNumber,
            monthYearInputInput,
            cvvInput
        );
    });
    emailInput.addEventListener('input', (e: Event) => {
        emailValidate(e);
        isAllInputFieldsValid(
            formNodeButton,
            nameInput,
            phoneInput,
            addressInput,
            emailInput,
            cardNumber,
            monthYearInputInput,
            cvvInput
        );
    });
    cardNumber.addEventListener('input', (e: Event) => {
        cardNumberValidation(e);
        isAllInputFieldsValid(
            formNodeButton,
            nameInput,
            phoneInput,
            addressInput,
            emailInput,
            cardNumber,
            monthYearInputInput,
            cvvInput
        );
    });
    monthYearInputInput.addEventListener('input', (e: Event) => {
        cardMonthYearValidation(e);
        isAllInputFieldsValid(
            formNodeButton,
            nameInput,
            phoneInput,
            addressInput,
            emailInput,
            cardNumber,
            monthYearInputInput,
            cvvInput
        );
    });
    cvvInput.addEventListener('input', (e: Event) => {
        cardCVVValidate(e);
        isAllInputFieldsValid(
            formNodeButton,
            nameInput,
            phoneInput,
            addressInput,
            emailInput,
            cardNumber,
            monthYearInputInput,
            cvvInput
        );
    });

    targetNode.append(basketPopup);
}
