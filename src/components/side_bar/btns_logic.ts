export function resetBtnControl () {
    location.reload()
}

export function copyBtnControl () {
    const link  = window.location.href;
    navigator.clipboard.writeText(link);
}
