// Attributions for bottom right corner
var attributions = "Ontwikkeling: <a href='http://nickubels.nl'>Nick Ubels</a> - <a href='https://github.com/nickubels/drgl-compare'>GitHub</a> - Lijnnetkaarten: &copy; <a href='https://cartostudio.nl'>Carto Studio</a> / <a href='https://qbuzz.nl/gd'>Qbuzz</a>";

// Layer for left side (old map)
var layer1 = new ol.layer.Tile({
    source: new ol.source.XYZ({
        attributions: attributions,
        url: './2020/{z}/{y}/{x}.jpg'
    })
});

// Layer for the right side (new map)
var layer2 = new ol.layer.Tile({
    source: new ol.source.XYZ({
        attributions: attributions,
        url: './2021/{z}/{y}/{x}.jpg'
    })
});

// Setting up the OpenLayers map
var map =  new ol.Map({
    target: 'map',
    layers: [layer1, layer2],
    view: new ol.View({
        center: [-10.7, 6.5],
        zoom: 4,
        maxZoom: 5 // 5 zoomlevels available in tile set
    })
});

// Make sure we can access the swipe element and the divider
var swipe = document.getElementById('swipe');
var divider = document.getElementById('divider');

// Rendering right side
layer2.on('prerender', function (event) {
  var ctx = event.context;
  var mapSize = map.getSize();
  // Calculate offset for the divider
  var offset = (0.5 - swipe.value) * (53); // size of thumb + border size
  var width = mapSize[0] * swipe.value + offset;
  divider.style.left = width + 'px';
  var tl = ol.render.getRenderPixel(event, [width, 0]);
  var tr = ol.render.getRenderPixel(event, [mapSize[0], 0]);
  var bl = ol.render.getRenderPixel(event, [width, mapSize[1]]);
  var br = ol.render.getRenderPixel(event, mapSize);

  ctx.save();
  ctx.beginPath();
  ctx.moveTo(tl[0], tl[1]);
  ctx.lineTo(bl[0], bl[1]);
  ctx.lineTo(br[0], br[1]);
  ctx.lineTo(tr[0], tr[1]);
  ctx.closePath();
  ctx.clip();
});

layer2.on('postrender', function (event) {
  var ctx = event.context;
  ctx.restore();
});

// Event listener for changes in slider
swipe.addEventListener(
  'input',
  function () {
    map.render();
  },
  false
);