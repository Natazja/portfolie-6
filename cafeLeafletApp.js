console.log(cafeLocation)

const cafeLeafletArray = cafeLocation.sheet1;

const map = L.map("map").setView([56, 11.6], 6);

const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
cafeLeafletArray.forEach(function (cafe) {

    const lat = parseFloat(cafe.latitude);
    const lng = parseFloat(cafe.longitude);

    const marker = L.marker([lat, lng]).addTo(map);
    marker.bindPopup(`<br>Location: ${cafe.name}`);
});