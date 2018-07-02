$(function () {

    function initMap() {
        

        var location = new google.maps.LatLng(-7.760579, 110.409272);

        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: location,
            zoom: 16,
            panControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var markerImage = 'images/marker-map.png';
        var marker = new google.maps.Marker({
        	position: location,
        	map: map,
        	icon: markerImage
        });
        var contentString = '<div class="info-window"' + 
        	'<h1>Universitas Amikom Yogyakarta</h1>' + 
        	'<p>Economy Creative Park</p>' + '</div>' + '</div>';
        var infowindow = new google.maps.InfoWindow({
        	content: contentString,
        	maxWidth: 400
        });
        marker.addListener('click',function(){
        	infowindow.open(map, marker);
        });

    }

    google.maps.event.addDomListener(window, 'load', initMap);
});