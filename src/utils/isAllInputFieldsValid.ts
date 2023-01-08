export function isAllInputFieldsValid(targetButton: HTMLButtonElement, ...args: HTMLInputElement[]) {
    const condition = args.every((item) => item.classList.contains('send-form__input_allowed'));
    if (condition) {
        targetButton.disabled = false;
    } else {
        targetButton.disabled = true;
    }
}
