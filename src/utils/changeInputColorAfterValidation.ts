export function changeInputColorAfterValidation(domNode: HTMLInputElement, condition: boolean): boolean {
  if (condition) {
      domNode?.classList.remove('send-form__input_not-allowed');
      domNode?.classList.add('send-form__input_allowed');

      return true;
  }
  if (domNode?.classList.contains('send-form__input_allowed')) {
      domNode?.classList.remove('send-form__input_allowed');
  }
  if (domNode?.classList.contains('send-form__input_not-allowed')) {
      return false;
  }
  domNode?.classList.add('send-form__input_not-allowed');
  return false;
}