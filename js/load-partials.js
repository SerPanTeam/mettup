async function loadPart(partName, parentName) {
    try {
        const resp = await fetch(`/partials/${partName}.html`);
        if (!resp.ok) {
            throw new Error(`Error of load ${partName}`);
        }
        const data = await resp.text()
        // const parent = document.querySelector(`.main`);
        if (!parentName)
            parentName = partName;
        const parent = document.querySelector(`#${parentName}`);
        parent.innerHTML = data;
    } catch (error) {
        console.error(error);
    }
}