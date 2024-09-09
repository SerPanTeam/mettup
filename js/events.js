
function showCardEvent(objEvents, container) {
    console.log(objEvents);
    let templCardEvent = '';
    objEvents.forEach(val => {
        templCardEvent +=
            `<div class="event-card">
                <img class="event-card__img" src="${val.image}" alt="">
                <h3 class="event-card__title">${val.title}</h3>
                <p class="event-card__info">${val.category} (${val.distance} km)</p>
                <p class="event-card__date">${val.date}</p>
                <div class="event-card__options">
                    <span>${val.attendees} going</span>
                    <span>Free</span>
                </div>
            </div>`
    });
    const parContainer = document.querySelector(`.${container}`);
    parContainer.innerHTML = templCardEvent;
}

function showActualEvents(container) {
    console.log(container);
    showCardEvent(eventsStore.filter(val => val.date >= Date.now()), container);
}