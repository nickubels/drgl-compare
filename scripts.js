var map = L.map('map').setView([-1, -1], 3);

L.tileLayer('./2020/{z}/{y}/{x}.png', {
    maxZoom: 5,
    noWrap: true,
    attribution: 'Some Attribution'
}).addTo(map);