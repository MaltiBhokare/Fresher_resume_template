// Highlight text when editing starts
document.querySelectorAll('[contenteditable="true"]').forEach(element => {
    element.addEventListener('focus', () => {
        document.execCommand('selectAll', false, null);
    });
});
