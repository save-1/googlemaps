require([
    "esri/Map",
    "esri/views/MapView",
    "esri/widgets/BasemapGallery"
], function(Map, MapView, BasemapGallery){
    var map = new Map({
        basemap: "hybrid" // "hybrid" olarak değiştirin
    });

    var view = new MapView({
        container: "viewDiv",
        map: map,
        center: [40.936774123138109783, 38.60438644495621],
        zoom: 14
    });

    var basemapGallery = new BasemapGallery({
        view: view,
        source: {
            portal: {
                url: "https://www.arcgis.com",
                useVectorBasemaps: false
            }
        }
    });

    view.ui.add(basemapGallery, "top-right");
});
