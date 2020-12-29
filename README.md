# Timetable change network map comparison

When timetables in public transport change significantly it can be hard to visualise the changes.
When I noticed the 2020 and 2021 network maps of Groningen City had the same extent I immediately saw opportunities.

This project is a quick proof of concept with both the 2020 and 2021 network maps next to each other and an interactive 
slider and zoom functionality.

## The process
One of the biggest challenges was converting the two maps, that were provided as PDFs on the operators website, into 
a tileset for use in a web map. My first attempt was to import the PDF into QGIS, georeference it and export to XYZ tiles.
It was however quite the problem that QGIS couldn't import the PDFs in a high quality. This lead to very poor quality map
tiles. Combine that with the difficulty of properly georeferencing the map and you get a result that wasn't what I was looking for.

Given the fact that both maps were the same size and extent it was possible to disregard any geographical information.
This opened the door for converting the PDF straight to map tiles. The [libvips](https://libvips.github.io/libvips/API/current/Making-image-pyramids.md.html) 
library had this functionality, and that finally gave me the high quality map tiles I was looking for.

Next challenge was the slider itself. My first attempt was with [Leaflet](https://leafletjs.com]), but it was hard to get a
slider working. Especially since the [only package providing this kind of functionality](https://github.com/digidem/leaflet-side-by-side) was
quite outdated, just like some of the other examples I could find. The package did come in handy for styling the divider in the later stadium.

[OpenLayers](https://openlayers.org) had an excellent [Layer Swipe](https://openlayers.org/en/latest/examples/layer-swipe.html) example 
that was exactly what I was looking for. Only downside was that it didn't look that pretty. With some CSS I was able to 
convert the range input element into a slider with a divider that was much clearer. For added clarity I also added the year
on each side of the map.

## Usage
The `generate_tiles.sh` script can be used to convert a PDF map into map tiles, see the [libvips documentation](https://libvips.github.io/libvips/API/current/Making-image-pyramids.md.html) 
for instructions on usage. The years can be changed in `index.html` and attributions and folder names in `scripts.js`.
