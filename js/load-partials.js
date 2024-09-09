async function loadPart(partName) {
    try {
        const resp = await fetch(`/partials/${partName}.html`);
        if (!resp.ok) {
            throw new Error(`Error of load ${partName}`);
        }
        const data = await resp.text()
        const parent = document.querySelector(`.${partName}`);
        parent.innerHTML = data;
    } catch (error) {
        console.error(error);
    }
}