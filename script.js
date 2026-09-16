function showPyramids() {
    let info = document.querySelector("#pyramidsInfo");

    if (info.textContent === "") {
        info.textContent =
            "The Great Pyramid was built for Pharaoh Khufu and is the oldest of the Seven Wonders of the Ancient World.";
    } else {
        info.textContent = "";
    }
}

function showLuxor() {
    let info = document.querySelector("#luxorInfo");

    if (info.textContent === "") {
        info.textContent =
            "Luxor is home to the famous Valley of the Kings, where many ancient Egyptian pharaohs were buried.";
    } else {
        info.textContent = "";
    }
}

function showHurghada() {
    let info = document.querySelector("#hurghadaInfo");

    if (info.textContent === "") {
        info.textContent =
            "Hurghada is a popular destination for snorkeling and exploring the colorful coral reefs of the Red Sea.";
    } else {
        info.textContent = "";
    }
}

function showSiwa() {
    let info = document.querySelector("#siwaInfo");

    if (info.textContent === "") {
        info.textContent =
            "Siwa Oasis is known for its natural springs, palm trees, and unique desert landscapes.";
    } else {
        info.textContent = "";
    }
}

let searchInput = document.querySelector("#searchInput");

if (searchInput) {

    let destinations = document.querySelectorAll(".destination");

    searchInput.addEventListener("input", function() {

        let searchText = searchInput.value.toLowerCase();

        destinations.forEach(function(destination) {

            let name = destination.querySelector("h2").textContent.toLowerCase();

            if (name.includes(searchText)) {
                destination.style.display = "block";
            } else {
                destination.style.display = "none";
            }

        });

    });
}