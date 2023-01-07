export function clearPage(targetNode: HTMLElement | DocumentFragment): void {
    while (targetNode.firstChild) {
        targetNode.removeChild(targetNode.firstChild);
    }
}
