var map;
$(document).ready(function(){

    map = new GMaps({
        div: '#map',
        lat: 42.732931,
        lng: -73.687746,
    });
    map.addMarker({
        lat: 42.732931,
        lng: -73.687746,
        title: 'Address',
        infoWindow: {
            content: '<h5 class="title">Inspect Point</h5><p><span class="region">24 4th St, Troy NY</span><br><span class="postal-code">12180</span><br><span class="country-name">United States</span></p>'
        }
    });

});
