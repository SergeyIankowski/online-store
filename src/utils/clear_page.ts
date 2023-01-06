export function clearPage(targetNode: HTMLDivElement): void {
    while (targetNode.firstChild) {
        targetNode.removeChild(targetNode.firstChild);
    }
}
