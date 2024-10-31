// forces textarea to 2 rows
function forceRows(event) {
    const textarea = event.target;
    const lines = textarea.value.split('\n');
    if (lines.length > 2) {
        textarea.value = lines.slice(0, 2).join('\n');
    }
}

export { forceRows };