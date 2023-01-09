import { changeInputColorAfterValidation } from './changeInputColorAfterValidation';

export function nameValidate(e: Event) {
    const targ = e.target as HTMLInputElement;
    const strings = targ.value.split(' ');
    const condition = strings.length !== 2 || strings[0]!.length < 3 || strings[1]!.length < 3;
    return changeInputColorAfterValidation(targ, !condition);
}
export function phoneValidate(e: Event) {
    const targ = e.target as HTMLInputElement;
    const condition = targ.value[0] === '+' && targ.value.length > 10;

    return changeInputColorAfterValidation(targ, condition);
}
export function addressValidate(e: Event) {
    const targ = e.target as HTMLInputElement;
    const strings = targ.value.split(' ');
    const condition =
        strings.length !== 3 || strings[0]!.length < 5 || strings[1]!.length < 5 || strings[2]!.length < 5;
    return changeInputColorAfterValidation(targ, !condition);
}
export function emailValidate(e: Event) {
    const targ = e.target as HTMLInputElement;
    const regExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const condition = Boolean(targ.value.match(regExp));
    return changeInputColorAfterValidation(targ, condition);
}

export function cardNumberValidation(e: Event): boolean {
    const targ = e.target as HTMLInputElement;

    // if typed character is string
    if (isNaN(+targ.value.replace(/\s/g, ''))) {
        targ.value = targ.value.slice(0, -1);
        return false;
    }

    // if entire value is number
    const regExp = /.{1,4}/gm;
    const inputValue =
        targ.value.length > 19 ? targ.value.replace(/\s/g, '').slice(0, -1) : targ.value.replace(/\s/g, '');
    const resultString = inputValue.match(regExp)?.join(' ') ?? '';
    targ.value = resultString;

    const condition = targ.value.length === 19;
    return changeInputColorAfterValidation(targ, condition);
}

export function cardMonthYearValidation(e: Event) {
    const targ = e.target as HTMLInputElement;

    // if typed character is string
    if (isNaN(+targ.value.split(' / ').join(''))) {
        targ.value = targ.value.slice(0, -1);
        return false;
    }
    // if entire value is number
    const regExp = /.{1,2}/gm;
    const inputValue =
        targ.value.length > 7 ? targ.value.split(' / ').join('').slice(0, -1) : targ.value.split(' / ').join('');
    const resultString = inputValue.match(regExp)?.join(' / ') ?? '';
    targ.value = resultString;

    const condition = targ.value.length === 7;
    return changeInputColorAfterValidation(targ, condition);
}

export function cardCVVValidate(e: Event) {
    const targ = e.target as HTMLInputElement;

    targ.value = targ.value.length > 3 ? targ.value.slice(0, -1) : targ.value;

    const condition = targ.value.length === 3;
    return changeInputColorAfterValidation(targ, condition);
}
