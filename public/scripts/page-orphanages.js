// create map
const map = L.map("mapid").setView([-30.1087957, -51.3172272], 12);

// create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSite: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

function addMaker({ id, name, lat, lng }) {
  // create popup overlay
  const popup = L.popup({
    closeButton: false,
    className: "map-pop",
    minWidth: 240,
    minHeight: 240,
  }).setContent(
    `${name} <a href="orphanage?id=${id}" class="choose-orphanage"> <img src="/images/arrow-white.svg"> </a>`
  );

  // create and add marker
  L.marker([lat, lng], { icon }).addTo(map).bindPopup(popup);
}

const orphanageSpan = document.querySelectorAll(".orphanages span");

orphanageSpan.forEach((span) => {
  const orphanage = {
    id: span.dataset.id,
    name: span.dataset.name,
    lat: span.dataset.lat,
    lng: span.dataset.lng,
  };

  addMaker(orphanage);
});
