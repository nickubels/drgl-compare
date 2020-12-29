var layer1 = new ol.layer.Tile({
    source: new ol.source.XYZ({
        attributions: "Test",
        url: './2020/{z}/{y}/{x}.png',
        maxZoom: 20,
    })
});

var layer2 = new ol.layer.Tile({
    source: new ol.source.XYZ({
        attributions: "Test",
        url: './2021/{z}/{y}/{x}.png',
        maxZoom: 20,
    })
});

var map =  new ol.Map({
    target: 'map',
    layers: [layer1, layer2],
    view: new ol.View({
        center: [-10.7, 6.5],
        zoom: 5
    })
});

var swipe = document.getElementById('swipe');

layer2.on('prerender', function (event) {
  var ctx = event.context;
  var mapSize = map.getSize();
  var width = mapSize[0] * (swipe.value / 100);
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

swipe.addEventListener(
  'input',
  function () {
    map.render();
  },
  false
);