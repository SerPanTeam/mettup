
function showCardEvent(objEvents, container) {
    // console.log(objEvents);
    //<a href="/index.html?page=event&title="></a>
    let templCardEvent = '';
    objEvents.forEach(val => {
        templCardEvent +=
            `
            <a href="/index.html?page=event&title=${val.title}">
            <div class="event-card">
                <div class="img-container-3d">
                <img class="event-card__img" src="${val.image}" alt="">
                </div>
                <h3 class="event-card__title">${val.title}</h3>
                <p class="event-card__info">${val.category} (${(val.type === 'online') ? 'online' : val.distance + " km"})</p>
                <p class="event-card__date">${formatDate(val.date)}</p>
                <div class="event-card__options">
                    <span>${val.attendees} going</span>
                    <span>Free</span>
                </div>
            </div>
            </a>
            `
    });
    const parContainer = document.querySelector(`#${container}`);
    parContainer.innerHTML = templCardEvent;
}

function showActualEvents(container) {
    showCardEvent(eventsStore.filter(val => val.date >= Date.now()).sort((a, b) => a.date - b.date).slice(0,8), container);
}
function showActualEventsOnline(container) {
    showCardEvent(eventsStore.filter(val => val.type === 'online').filter(val => val.date >= Date.now()).sort((a, b) => a.date - b.date), container);
}

function formatDate(eventDate) {
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', timeZoneName: 'short' };
    return new Date(eventDate).toLocaleDateString('en-US', options);
}

function formatDateShort(eventDate) {
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(eventDate).toLocaleDateString('en-US', options);
}


// function getArrayByName(name) {
//     const values = eventsStore
//         .map(event => {
//             let value = event[name];
//             // Если это строка и она может быть датой, преобразуем её
//             if (typeof value === 'string' && !isNaN(Date.parse(value))) {
//                 value = new Date(Date.parse(value));
//             }
//             return value;
//         })
//         .filter((value, index, self) => self.indexOf(value) === index)
//         .sort((a, b) => {
//             if (typeof a === 'string' && typeof b === 'string') {
//                 return a.localeCompare(b);
//             } else if (typeof a === 'number' && typeof b === 'number') {
//                 return a - b;
//             } else if (a instanceof Date && b instanceof Date) { //Date(Date.parse(dateString))
//                 return a - b;
//             } else {
//                 return 0;
//             }
//         });
//     return values;
// }

function getArrayByName(name) {
    const values = eventsStore
        .map(event => event[name])
        .filter((value, index, self) => self.indexOf(value) === index)
        .sort((a, b) => {
            let dateA = typeof a === 'string' && !isNaN(Date.parse(a)) ? new Date(a) : a;
            let dateB = typeof b === 'string' && !isNaN(Date.parse(b)) ? new Date(b) : b;

            if (dateA instanceof Date && dateB instanceof Date) {
                return dateA - dateB;
            } else if (typeof dateA === 'string' && typeof dateB === 'string') {
                return dateA.localeCompare(dateB);
            } else if (typeof dateA === 'number' && typeof dateB === 'number') {
                return dateA - dateB;
            } else {
                return 0;
            }
        })
        .map(value => {
            if (typeof value === 'string' && !isNaN(Date.parse(value))) {
                return formatDateShort(value);
            }
            return value;
        });
    return values;
}

function setOptinonsByName(name, parentId, nameForPlaceholder) {
    let newOptions = [];
    // if (name === 'date') {
    //     newOptions = getArrayByName(name).map(val => `<option>${formatDateShort(val)}</option>`);
    // }
    // else {
    newOptions = getArrayByName(name).map(val => `<option>${val}</option>`);
    // }

    newOptions.unshift(`<option>Any ${(nameForPlaceholder) ? nameForPlaceholder : name}</option>`);
    const parent = document.querySelector(`#${parentId}`);
    // console.log(parent);
    parent.innerHTML = newOptions.join("");

    const pageParam = getValueFromGetParam(name);
    if (pageParam){
        parent.value = pageParam;
    }
    
    parent.addEventListener('change', (event) => {
        // console.log(event.target.value);
        apllyFilter();
    })
}

function getValueFromGetParam(name){
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function getCityFromGetParam(){
    console.log("city", getValueFromGetParam("city"));
    return getValueFromGetParam("city");
}

function setCity(city){
    //const city = getCityFromGetParam();
    if (city/*&&!city.includes('Any')*/){

        document.querySelector(".events-container__left__title").innerHTML = "Events near " + city;
        //document.querySelector("#nav__search__input").value = city;
        document.querySelector("#googleMap").src = "https://www.google.com/maps/embed/v1/place?key=AIzaSyAvqje2_bU9KKj8R9gRLKIJdioAWtzCH88&q=" + city;
    }

    
}

function apllyFilter() {
    const city = document.querySelector("#selectCity").value;
    const type = document.querySelector("#selectType").value;
    const category = document.querySelector("#selectCategory").value;
    const distance = document.querySelector("#selectDistance").value;
    const date = document.querySelector("#selectDate").value;
    // console.log(city, type, category, distance, date);
    let newArray = filterArrByValue(eventsStore, 'city', city);
    newArray = filterArrByValue(newArray, 'shortDate', date);
    newArray = filterArrByValue(newArray, 'type', type);
    newArray = filterArrByValue(newArray, 'category', category);
    newArray = filterArrByValue(newArray, 'distance', distance);

    setCity(city);
    setCountEvent(newArray.length);
    showCardEvent(newArray, 'events__list');
}

function setCountEvent(len){
    const counOfEven = document.querySelector(".events-container__left__subtitle");
    counOfEven.innerHTML = "Events: " + len;
}

function filterArrByValue(arr, type, value) {
    let newArray = [];
    if (!value.includes('Any')) {
        if (type == 'distance') {
            newArray = arr.filter(val => val[type] <= value);
            return newArray;
        }
        if (type == 'shortDate') {
            newArray = arr.filter(val => val[type] == value);
            return newArray;
        }
        else {
            newArray = arr.filter(val => val[type] == value);
            return newArray;
        }
    }
    // console.log(newArray);
    return arr;
}

function resetFilters(){
    document.querySelector('#selectCity').selectedIndex = 0;
    document.querySelector('#selectType').selectedIndex = 0;
    document.querySelector('#selectCategory').selectedIndex = 0;
    document.querySelector('#selectDistance').selectedIndex = 0;
    document.querySelector('#selectDate').selectedIndex = 0;
    apllyFilter();
}

eventsStore = eventsStore.map(val => ({ ...val, shortDate: formatDateShort(val.date) }));
// console.log(eventsStore);