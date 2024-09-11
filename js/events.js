
function showCardEvent(objEvents, container) {
    console.log(objEvents);
    let templCardEvent = '';
    objEvents.forEach(val => {
        templCardEvent +=
            `<div class="event-card">
                <img class="event-card__img" src="${val.image}" alt="">
                <h3 class="event-card__title">${val.title}</h3>
                <p class="event-card__info">${val.category} (${(val.type === 'online') ? 'online' : val.distance + " km"})</p>
                <p class="event-card__date">${formatDate(val.date)}</p>
                <div class="event-card__options">
                    <span>${val.attendees} going</span>
                    <span>Free</span>
                </div>
            </div>`
    });
    const parContainer = document.querySelector(`#${container}`);
    parContainer.innerHTML = templCardEvent;
}

function showActualEvents(container) {
    showCardEvent(eventsStore.filter(val => val.date >= Date.now()).sort((a, b) => a.date - b.date), container);
}
function showActualEventsOnline(container) {
    showCardEvent(eventsStore.filter(val => val.type === 'online').filter(val => val.date >= Date.now()).sort((a, b) => a.date - b.date), container);
}

function formatDate(eventDate) {
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', timeZoneName: 'short' };
    return new Date(eventDate).toLocaleDateString('en-US', options);
}
