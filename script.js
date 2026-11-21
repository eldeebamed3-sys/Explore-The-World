// Destinations Data
const destinations = [

    {
        name: "Paris",
        country: "FRANCE",
        continent: "Europe",
        food: "Croissant, Macarons",
        place: "Eiffel Tower",
        language: "French",
        number: "01",
        description:
            "Paris is one of the most beautiful cities in the world, famous for its art, architecture and romantic atmosphere.",
        image: "img/paris.jpg"
    },

    {
        name: "Tokyo",
        country: "JAPAN",
        continent: "Asia",
        food: "Sushi, Ramen",
        place: "Tokyo Tower",
        language: "Japanese",
        number: "02",
        description:
            "Tokyo is a modern city that combines advanced technology with traditional Japanese culture.",
        image: "img/tokyo.jpg"
    },

    {
        name: "Rome",
        country: "ITALY",
        continent: "Europe",
        food: "Pizza, Pasta",
        place: "Colosseum",
        language: "Italian",
        number: "03",
        description:
            "Rome is famous for its ancient history, beautiful architecture and delicious Italian food.",
        image: "img/roma.jpg"
    },

    {
        name: "Cairo",
        country: "EGYPT",
        continent: "Africa",
        food: "Koshari, Foul",
        place: "Pyramids",
        language: "Arabic",
        number: "04",
        description:
            "Cairo is a historic city known for its ancient Egyptian civilization and famous landmarks.",
        image: "img/cairo.jpg"
    }

];

// Current City Index
let currentIndex = 0;

// HTML Elements
const cityName = document.getElementById("cityName");
const country = document.getElementById("country");
const continent = document.getElementById("continent");
const food = document.getElementById("food");
const place = document.getElementById("place");
const language = document.getElementById("language");

const description =
    document.getElementById("cityDescription");

const cityImage =
    document.getElementById("cityImage");

const cityNumber =
    document.getElementById("cityNumber");

const imageNumber =
    document.getElementById("imageNumber");

const dotsContainer =
    document.getElementById("dots");

// Display City Information
function showDestination(index) {

    const city = destinations[index];

    cityName.textContent = city.name;
    country.textContent = city.country;
    continent.textContent = city.continent;
    food.textContent = city.food;
    place.textContent = city.place;
    language.textContent = city.language;

    description.textContent = city.description;

    cityNumber.textContent =
        `${city.number} / 04`;

    imageNumber.textContent = city.number;

    cityImage.src = city.image;
    cityImage.alt = city.name;

    updateDots();

}

// Next City
function nextDestination() {

    currentIndex++;

    if (currentIndex >= destinations.length) {
        currentIndex = 0;
    }

    showDestination(currentIndex);

}

// Previous City
function previousDestination() {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = destinations.length - 1;
    }

    showDestination(currentIndex);

}

// Create Navigation Dots
function createDots() {
    dotsContainer.innerHTML = "";   // يمنع تكرار النقط

    destinations.forEach((city, index) => {
        const dot = document.createElement("span");

        dot.addEventListener("click", function () {
            currentIndex = index;
            showDestination(currentIndex);
        });

        dotsContainer.appendChild(dot);
    });
}

// Update Active Dot
function updateDots() {
    const dots = dotsContainer.querySelectorAll("span");

    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
    });
}


// // Create Navigation Dots
// function createDots() {
//     dotsContainer.innerHTML = "";

//     destinations.forEach((city, index) => {

//         const dot = document.createElement("span");

//         dot.classList.add("dot");

//         dot.addEventListener("click", function () {

//             currentIndex = index;

//             showDestination(currentIndex);

//         });

//         dotsContainer.appendChild(dot);

//     });

// }

// // Update Active Dot
// function updateDots() {

//     const dots =
//         document.querySelectorAll(".dot");

//     dots.forEach((dot, index) => {

//         dot.classList.remove("active");

//         if (index === currentIndex) {
//             dot.classList.add("active");
//         }

//     });

// }

// Button Events
document.getElementById("nextBtn")
    .addEventListener("click", nextDestination);

document.getElementById("prevBtn")
    .addEventListener("click", previousDestination);

// Explore More Button
document.getElementById("exploreBtn")
    .addEventListener("click", function () {

        const city = destinations[currentIndex];

        alert(
            "Discover " + city.name +
            " in " + city.country +
            "!\nFamous Place: " + city.place
        );

    });

// Start Website
createDots();
showDestination(currentIndex);