// create map
const map = L.map("mapid").setView([-30.1087957, -51.3172272], 12);

// create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);


// create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSite: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
});

// create popup overlay
const popup = L.popup({
  closeButton: false,
  className: "map-pop",
  minWidth:240,
  minHeight:240,
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"> </a>')

// create and adn marker
L.marker([-30.1087957, -51.3172272], { icon })
  .addTo(map)
  .bindPopup(popup)