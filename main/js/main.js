// ===== Hero background slider =====

// hero imsges
const heroSlides = [
    { img: "assets/images/hero/algonquin_canoe.webp", caption: "Algonquin Park" },
    { img: "assets/images/hero/bruce_peninsula.webp", caption: "Bruce Peninsula" },
    { img: "assets/images/hero/hamilton_waterfall.webp",  caption: "Hamilton Waterfalls" },
    { img: "assets/images/hero/ontario_lake_canoe.webp",  caption: "Ontario Lake" },
    { img: "assets/images/hero/Tobermory-1.webp",  caption: "Tobermory" },
    { img: "assets/images/hero/Tobermory.webp",  caption: "Tobermory" },
];

let heroList = document.getElementById("hero-slides");

heroList.innerHTML = heroSlides.map(function (slide) {
    return `
        <li class="glide__slide hero-slide" style="background-image: url('${slide.img}')">
            <span class="hero-caption">${slide.caption}</span>
        </li>
    `;
}).join("");

// bullet
let heroBullets = document.getElementById("hero-bullets");

heroBullets.innerHTML = heroSlides.map(function (slide, index) {
    return `<button class="glide__bullet" data-glide-dir="=${index}" aria-label="Show ${slide.caption}"></button>`;
}).join("");

let prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

new Glide("#hero-glide", {
    type: "carousel",
    perView: 1,                 
    gap: 0,                     
    autoplay: prefersReducedMotion ? false : 5000,
    hoverpause: false,          
    animationDuration: 1000     
}).mount();


// Booking bar 

// Date picker
// Demo rule: tours run on Sunday (0), Wednesday (3) and Saturday (6)
const tourDays = [0, 3, 6];

let datePicker = flatpickr("#tour-date", {
    minDate: "today",                  
    maxDate: new Date().fp_incr(180),   
    dateFormat: "Y-m-d",                
    altInput: true,                     
    altFormat: "D, M j",                
    disableMobile: true,

    // return true = this day can't be picked               
    disable: [
        function (date) {
            return !tourDays.includes(date.getDay());
        }
    ]
});

//guest input

let guestsInput = document.getElementById("guests");
let stepButtons = document.querySelectorAll(".step");

stepButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        let current = parseInt(guestsInput.value) || 1;
        let next = current + Number(button.dataset.step);

        // keep the number between 1 and 12
        if (next < 1) {
            next = 1;
        }
        if (next > 12) {
            next = 12;
        }

        guestsInput.value = next;
    });
});



//  Top picks
const pickup = {
    name: "Pick-up · Dufferin Mall",
    note: "904 Dufferin St, in front of the Beer Store",
    coords: [43.6560, -79.4352]
};

// Tour data
const tours = [
    {
        id: "algonquin-canoe",
        title: "Algonquin Park Hiking & Canoeing",
        destination: "algonquin",
        activities: ["hiking", "canoeing"],
        season: "Spring – Fall",
        winter: false,
        duration: "12 hours",
        price: 190,
        priceNote: "+ HST",
        img: "assets/images/tours/algonquin-canoe.webp",
        startTime: "7:00 am",
        stops: [
            { time: "11:30 am", name: "Canoe Lake", note: "2 hours paddling, canoe & life jacket included", coords: [45.5726, -78.7224] },
            { time: "1:30 pm",  name: "Lunch break", note: "Bring your own or buy in the park", coords: [45.5690, -78.7120] },
            { time: "2:30 pm",  name: "Lake of Two Rivers", note: "Short hike, then beach time", coords: [45.5803, -78.4920] },
            { time: "~7:00 pm", name: "Back in Toronto", note: "Drop-off at Dufferin Mall", coords: null }
        ]
    },
    {
        id: "tobermory-kayak",
        title: "Tobermory Kayaking & Hiking",
        destination: "tobermory",
        activities: ["kayaking", "hiking"],
        season: "Summer",
        winter: false,
        duration: "13 hours",
        price: 229,          
        priceNote: "",
        img: "assets/images/tours/tobermory.webp",
        startTime: "7:00 am",
        stops: [
            { time: "Late morning", name: "Big Tub Harbour", note: "Guided kayak over sunken shipwrecks", coords: [45.2591, -81.6697] },
            { time: "Midday",       name: "Lunch in Tobermory", note: "Local restaurant, lunch included", coords: [45.2535, -81.6640] },
            { time: "Afternoon",    name: "Little Dunks Bay Lookout", note: "Bruce Peninsula trail hike", coords: [45.2468, -81.6476] },
            { time: "~8:00 pm",     name: "Back in Toronto", note: "Drop-off at Dufferin Mall", coords: null }
        ]
    },
    {
        id: "hamilton-falls",
        title: "Hamilton Waterfalls",
        destination: "hamilton",
        activities: ["hiking"],
        season: "Summer",
        winter: false,
        duration: "Day trip",
        price: 155,         
        priceNote: "",
        img: "assets/images/tours/hamilton_fall.webp",
        startTime: "Morning",
        stops: [
            // TODO: check which waterfalls the tour visits
            { time: "Stop 1",  name: "Webster's Falls", note: "Curtain falls in Spencer Gorge", coords: [43.2763, -79.9809] },
            { time: "Stop 2",  name: "Tew's Falls", note: "Hamilton's tallest waterfall", coords: [43.2817, -79.9786] },
            { time: "Stop 3",  name: "Albion Falls", note: "Cascade falls on Red Hill Creek", coords: [43.2003, -79.8197] },
            { time: "Evening", name: "Back in Toronto", note: "Drop-off at Dufferin Mall", coords: null }
        ]
    },
    {
        id: "algonquin-snowshoe",
        title: "Algonquin Park Snowshoeing",
        destination: "algonquin",
        activities: ["snowshoeing", "hiking"],
        season: "Dec – Mar",
        winter: true,
        duration: "12 hours",
        price: 140,          
        priceNote: "",
        img: "assets/images/tours/algonquin_snowshoeing.webp",
        startTime: "8:00 am",
        stops: [
            { time: "Midday",    name: "Lookout Trail", note: "Snowshoe up to the lookout, rental included", coords: [45.5872, -78.4553] },
            { time: "Afternoon", name: "Wildlife spotting", note: "Quiet winter trails along Highway 60", coords: [45.5650, -78.5600] },
            { time: "~8:00 pm",  name: "Back in Toronto", note: "Drop-off at Dufferin Mall", coords: null }
        ]
    }
];

//Card

let picksGrid = document.getElementById("picks-grid");

picksGrid.innerHTML = tours.map(function (tour) {
    return `
        <article class="tour-card" data-id="${tour.id}">
            <div class="tour-img" style="background-image: url('${tour.img}')">
                <span class="tour-season ${tour.winter ? "winter" : ""}">${tour.season}</span>
            </div>
            <div class="tour-body">
                <h3>${tour.title}</h3>
                <ul class="tour-tags">
                    <li>${tour.duration}</li>
                    ${tour.activities.map(function (activity) {
                        return `<li>${activity}</li>`;
                    }).join("")}
                </ul>
                <div class="tour-foot">
                    <p class="tour-price">From $${tour.price} <small>${tour.priceNote}</small></p>
                    <button type="button" class="tour-route-btn">See route →</button>
                </div>
            </div>
        </article>
    `;
}).join("");

// Map
let map = L.map("route-map", {
    scrollWheelZoom: false   
}).setView([44.6, -79.6], 7);

// Map tiles: CARTO "Voyager" style (cleaner than the default)
const CARTO_KEY = "cb1_4y36_1_52c40c8a47160aa5a09c2202";

L.tileLayer("https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png?key=" + CARTO_KEY, {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
    maxZoom: 18
}).addTo(map);


//  Route layer + custom pins
let routeLayer = L.layerGroup().addTo(map);
let stopMarkers = [];   
let activeId = null;   

function makePin(label, isStart) {
    return L.divIcon({
        className: "",
        html: `<div class="map-pin ${isStart ? "start" : ""}">${label}</div>`,
        iconSize: [30, 30],
        iconAnchor: [15, 15],    
        popupAnchor: [0, -14]    
    });
}

// Curved line between two points (quadratic Bézier curve)
function makeArc(from, to) {
    let bend = 0.18;   // how much the line curves
    let steps = 40;    // how many points make up the curve

    // control point: the midpoint pushed to one side
    let midLat = (from[0] + to[0]) / 2;
    let midLng = (from[1] + to[1]) / 2;
    let control = [
        midLat + (to[1] - from[1]) * bend,
        midLng - (to[0] - from[0]) * bend
    ];

    let points = [];
    for (let i = 0; i <= steps; i++) {
        let t = i / steps;   // 0 → 1
        let a = (1 - t) * (1 - t);
        let b = 2 * (1 - t) * t;
        let c = t * t;
        points.push([
            a * from[0] + b * control[0] + c * to[0],
            a * from[1] + b * control[1] + c * to[1]
        ]);
    }
    return points;
}

// Show one tour on the map + timeline
function activateTour(id) {
    // Skip if this tour is already showing
    if (id === activeId) {
        return;
    }
    activeId = id;

    let tour = tours.find(function (item) {
        return item.id === id;
    });

    // Highlight the matching card
    let cards = document.querySelectorAll(".tour-card");
    cards.forEach(function (card) {
        card.classList.toggle("is-active", card.dataset.id === id);
    });

    // Clear the old route, keep only stops with coordinates
    routeLayer.clearLayers();
    stopMarkers = [];

    let mapStops = tour.stops.filter(function (stop) {
        return stop.coords !== null;
    });
    let stopCoords = mapStops.map(function (stop) {
        return stop.coords;
    });

    // Draw the route
    // pickup pin
    L.marker(pickup.coords, { icon: makePin("★", true) })
        .bindPopup(`<strong>${pickup.name}</strong><br>${tour.startTime}`)
        .addTo(routeLayer);

    // dashed drive from Toronto to the first stop
    L.polyline(makeArc(pickup.coords, stopCoords[0]), {
        color: "#c61d10",
        weight: 3,
        dashArray: "6 8"
    }).addTo(routeLayer);

    // solid line between stops at the destination
    if (stopCoords.length > 1) {
        L.polyline(stopCoords, {
            color: "#084126",
            weight: 4
        }).addTo(routeLayer);
    }

    // numbered pins
    mapStops.forEach(function (stop, index) {
        let marker = L.marker(stop.coords, { icon: makePin(index + 1, false) })
            .bindPopup(`<strong>${stop.name}</strong><br>${stop.note}`)
            .addTo(routeLayer);
        stopMarkers.push(marker);
    });

    // Fly the map so the whole route fits
    let bounds = L.latLngBounds([pickup.coords].concat(stopCoords));

    if (prefersReducedMotion) {
        map.fitBounds(bounds, { padding: [40, 40] });
    } else {
        map.flyToBounds(bounds, { padding: [40, 40], duration: 1.1 });
    }

    // Fill in the itinerary panel
    document.getElementById("route-meta").textContent =
        `${tour.duration} · ${tour.season} · From $${tour.price}`;
    document.getElementById("route-title").textContent = tour.title;

    let pickupRow = `
        <li data-stop="pickup">
            <span class="stop-time">${tour.startTime}</span>
            <span class="stop-dot start">★</span>
            <span class="stop-text"><strong>${pickup.name}</strong><span>${pickup.note}</span></span>
        </li>
    `;

    let pinNumber = 0;
    let stopRows = tour.stops.map(function (stop) {
        // "Back in Toronto" has no pin on the map
        if (stop.coords === null) {
            return `
                <li data-stop="pickup">
                    <span class="stop-time">${stop.time}</span>
                    <span class="stop-dot start">★</span>
                    <span class="stop-text"><strong>${stop.name}</strong><span>${stop.note}</span></span>
                </li>
            `;
        }

        pinNumber++;
        return `
            <li data-stop="${pinNumber - 1}">
                <span class="stop-time">${stop.time}</span>
                <span class="stop-dot">${pinNumber}</span>
                <span class="stop-text"><strong>${stop.name}</strong><span>${stop.note}</span></span>
            </li>
        `;
    });

    document.getElementById("route-stops").innerHTML = pickupRow + stopRows.join("");
}

// Click a stop in the timeline → zoom the map to it
document.getElementById("route-stops").addEventListener("click", function (event) {
    let row = event.target.closest("li");
    if (!row) {
        return;
    }

    if (row.dataset.stop === "pickup") {
        map.flyTo(pickup.coords, 12);
        return;
    }

    let marker = stopMarkers[Number(row.dataset.stop)];
    map.flyTo(marker.getLatLng(), 12);
    marker.openPopup();
});

//  Bottom sheet (mobile)
let routePanel = document.getElementById("route-panel");
let sheetBackdrop = document.getElementById("sheet-backdrop");
let sheetClose = document.getElementById("sheet-close");
let lastCard = null;   // the card that opened the sheet

function isMobile() {
    return window.innerWidth < 1024;
}

function openSheet(card) {
    if (!isMobile()) {
        return;
    }
    lastCard = card;

    routePanel.classList.add("is-open");
    routePanel.setAttribute("role", "dialog");
    routePanel.setAttribute("aria-modal", "true");
    sheetBackdrop.hidden = false;
    document.body.classList.add("sheet-open");

    sheetClose.focus();


    setTimeout(function () {
        map.invalidateSize();
    }, 350);
}

function closeSheet() {
    if (!routePanel.classList.contains("is-open")) {
        return;
    }

    routePanel.classList.remove("is-open");
    routePanel.removeAttribute("role");
    routePanel.removeAttribute("aria-modal");
    sheetBackdrop.hidden = true;
    document.body.classList.remove("sheet-open");

    if (lastCard) {
        lastCard.querySelector(".tour-route-btn").focus();
    }
}

// three ways to close
sheetClose.addEventListener("click", closeSheet);
sheetBackdrop.addEventListener("click", closeSheet);
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeSheet();
    }
});

// if the screen becomes desktop-size while open, close the sheet
window.addEventListener("resize", function () {
    if (!isMobile()) {
        closeSheet();
    }
});

picksGrid.addEventListener("click", function (event) {
    let card = event.target.closest(".tour-card");
    if (!card) {
        return;
    }
    activateTour(card.dataset.id);
    openSheet(card);  
});


// Services 
// Tour names come from the Summer Tours / Winter Tours menus on travellingchicken.ca

const services = [
    {
        id: "hiking",
        title: "Hiking",
        icon: "assets/images/service_icon/hiking.png",
        blurb: "Guided trails for first-timers and regular hikers.",
        tours: [
            "Algonquin Park Hiking",
            "Bruce Peninsula Hiking",
            "Flowerpot Island Hiking",
            "Lion's Head Park",
            "Muskoka Hiking",
            "Killarney Park Hiking"
        ]
    },
    {
        id: "paddling",
        title: "Canoeing & Kayaking",
        icon: "assets/images/service_icon/canoeing.png",
        blurb: "Paddle Ontario's lakes and harbours. Gear included.",
        tours: [
            "Algonquin Park Hiking & Canoeing",
            "Tobermory Kayaking & Hiking"
        ]
    },
    {
        id: "waterfalls",
        title: "Waterfalls",
        icon: "assets/images/service_icon/waterfalls.png",
        blurb: "Short hikes to falls along the Niagara Escarpment.",
        tours: [
            "Hamilton Waterfalls",
            "Maple Syrup & Waterfalls"
        ]
    },
    {
        id: "camping",
        title: "Camping",
        icon: "assets/images/service_icon/camping.png",
        blurb: "Overnight trips to the Bruce Peninsula.",
        tours: [
            "Camping Bruce Peninsula"
        ]
    },
    {
        id: "winter",
        title: "Winter Fun",
        icon: "assets/images/service_icon/winter.png",
        blurb: "Snowshoeing, skiing and snow tubing, December to March.",
        tours: [
            "Algonquin Park Snowshoeing",
            "Blue Mountain Skiing or Snowboarding",
            "Snow Tubing & Snowshoeing",
            "1/2 Day Snow Tubing"
        ]
    },
    {
        id: "shuttle",
        title: "Shuttle Bus",
        icon: "assets/images/service_icon/shuttle.png",
        blurb: "A ride from Toronto to Tobermory. Explore at your own pace.",
        tours: [
            "Tobermory from Toronto Shuttle Bus"
        ]
    }
];

// Build the cards
let servicesGrid = document.getElementById("services-grid");

servicesGrid.innerHTML = services.map(function (service) {
    return `
        <a class="service-card" href="#contact" data-service="${service.id}">
            <div class="service-front">
                <img class="service-icon" src="${service.icon}" alt="">
                <h3>${service.title}</h3>
                <p class="service-blurb">${service.blurb}</p>
            </div>

            <div class="service-overlay">
                <p class="overlay-title">${service.title} trips</p>
                <ul class="service-tours">
                    ${service.tours.map(function (tour) {
                        return `<li>${tour}</li>`;
                    }).join("")}
                </ul>
                <span class="service-cta">Ask us about these trips →</span>
            </div>
        </a>
    `;
}).join("");

// connect to contact form

servicesGrid.addEventListener("click", function (event) {
    let card = event.target.closest(".service-card");
    if (!card) {
        return;
    }
    document.getElementById("contact-service").value = card.dataset.service;

    // after the page scrolls to #contact, put the cursor in the name field
    setTimeout(function () {
        document.getElementById("contact-name").focus({ preventScroll: true });
    }, 600);
});

// Review

// Review data
const reviews = [
    {
        name: "Diego B.",
        tour: "Algonquin Park",
        stars: 5,
        text: "They picked me up on time at the meeting point and once in Algonquin they had already an itinerary."
    },
    {
        name: "Anshuman J.",
        tour: "7 trips with us",
        stars: 5,
        text: "Already went on seven different trips and will go on more trips with them in future."
    },
    {
        name: "Donny O.",
        tour: "Algonquin Hiking",
        stars: 5,
        text: "Big thanks to Mike, he is a great guide, helpful and friendly! The pick-up was on-time and we felt safe…"
    },
    {
        name: "Kanchan K.",
        tour: "Algonquin Snowshoeing",
        stars: 5,
        text: "A superb trip that suited a family of 4. My children 9 & 11 loved the trip."
    },
    {
        name: "Arundhati C.",
        tour: "",
        stars: 5,
        text: "Thank you for organizing this tour so well and taking care of all the aspects."
    },
    {
        name: "Madison W.",
        tour: "Niagara Falls day trip",
        stars: 5,
        text: "We saw everything from Niagara Falls, maple tasting and wine tasting!"
    }
];

// Turn a number into stars
function makeStars(number) {
    return "★".repeat(number) + "☆".repeat(5 - number);
}

// Build cards for each review
let reviewsList = document.getElementById("reviews-list");

let reviewCards = reviews.map(function (review) {
    return `
        <li class="glide__slide review-card">
            <p class="review-stars" aria-label="${review.stars} out of 5 stars">${makeStars(review.stars)}</p>
            <p class="review-text">“${review.text}”</p>
            <p class="review-name">${review.name}</p>
            ${review.tour ? `<p class="review-tour">${review.tour}</p>` : ""}
        </li>
    `;
});

reviewsList.innerHTML = reviewCards.join("");

//  TripAdvisor link under the slider
let reviewsSection = document.getElementById("reviews");
reviewsSection.insertAdjacentHTML("beforeend", `
    <a class="review-more" href="https://www.tripadvisor.ca/Attraction_Review-g155019-d11918297-Reviews-Travelling_Chicken-Toronto_Ontario.html" target="_blank" rel="noopener">
        Read more reviews on TripAdvisor →
    </a>
`);


// Glide slider
new Glide("#reviews-glide", {
    type: "carousel",   // loops 
    perView: 3,         
    gap: 24,           
    autoplay: 6000,     
    hoverpause: true,   
    breakpoints: {
        1023: { perView: 2 },   
        600:  { perView: 1 }   
    }
}).mount();




// Subscribe + Contact forms (Parsley)

// Shared settings for both forms
const parsleyOptions = {
    trigger: "focusout",           
    errorClass: "parsley-error",   
    successClass: ""               
};

//  Newsletter form
let subscribeForm = $("#subscribe-form").parsley(parsleyOptions);
let subscribeSuccess = document.getElementById("subscribe-success");

subscribeForm.on("form:submit", function () {
    let email = document.getElementById("subscribe-email").value;

    subscribeSuccess.textContent = `Thanks! We'll send tour news to ${email}.`;
    subscribeSuccess.hidden = false;

    document.getElementById("subscribe-form").reset();
    subscribeForm.reset();

    return false;   // demo only: don't actually send the form
});

//  Contact form
let contactForm = $("#contact-form").parsley(parsleyOptions);
let contactSuccess = document.getElementById("contact-success");

contactForm.on("form:submit", function () {
    let name = document.getElementById("contact-name").value;

    contactSuccess.textContent = `Thanks, ${name}! We usually reply within one business day.`;
    contactSuccess.hidden = false;

    document.getElementById("contact-form").reset();
    contactForm.reset();

    return false;
});

//  Hide the success message when the user starts typing again
document.getElementById("subscribe-form").addEventListener("input", function () {
    subscribeSuccess.hidden = true;
});
document.getElementById("contact-form").addEventListener("input", function () {
    contactSuccess.hidden = true;
});
