var map;

var centerlat = parseFloat(googlemap_data.gm_latitude);
var centerlng = parseFloat(googlemap_data.gm_longitude);
var markerImage = googlemap_data.gm_marker_image;
var zoomLevel = parseFloat(googlemap_data.gm_zoom);
var dragging = googlemap_data.gm_dragging;
var gmap_id = googlemap_data.gm_id;
var map_skin = googlemap_data.gm_map_skin;


	
var myLatlng = new google.maps.LatLng(centerlat, centerlng);


function initialize() {


	if(map_skin == 'dark') {
    
    	var roadAtlasStyles = [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#424b5b"},{"weight":2},{"gamma":"1"}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"weight":0.6},{"color":"#414753"},{"gamma":"0"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#414753"},{"gamma":"1"},{"weight":"10"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#666c7b"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#414753"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#2a364f"},{"lightness":"0"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#666c7b"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#21283b"}]}]
	
	} else {

		var roadAtlasStyles = [{"featureType":"all","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"weight":"0.5"},{"visibility":"on"}]},{"featureType":"administrative","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative","elementType":"labels.text","stylers":[{"lightness":"-50"},{"saturation":"-50"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text","stylers":[{"hue":"#009aff"},{"saturation":"25"},{"lightness":"0"},{"visibility":"simplified"},{"gamma":"1"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"saturation":"0"},{"lightness":"100"},{"gamma":"2.31"},{"visibility":"on"}]},{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"simplified"},{"lightness":"20"},{"gamma":"1"}]},{"featureType":"landscape","elementType":"labels.text.fill","stylers":[{"saturation":"-100"},{"lightness":"-100"}]},{"featureType":"landscape","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"lightness":"0"},{"saturation":"45"},{"gamma":"4.24"},{"visibility":"simplified"},{"hue":"#00ff90"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"geometry","stylers":[{"saturation":"-100"},{"color":"#f5f5f5"}]},{"featureType":"road","elementType":"labels.text","stylers":[{"visibility":"simplified"},{"color":"#666666"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"labels.icon","stylers":[{"saturation":"-25"}]},{"featureType":"transit.line","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"transit.station.airport","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"lightness":"50"},{"gamma":".75"},{"saturation":"100"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"water","elementType":"labels.icon","stylers":[{"visibility":"off"}]}]

	}

	var styledMap = new google.maps.StyledMapType(roadAtlasStyles, {name: "Map"});
	
	
    var mapOptions = {
        zoom: zoomLevel,
        scrollwheel: false,
		panControl: false,
		draggable: dragging,
        center: myLatlng,
        mapTypeControlOptions: {
            mapTypeIds: [ 'map_style', google.maps.MapTypeId.HYBRID, google.maps.MapTypeId.SATELLITE ]
        },
		zoomControl: true,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.LARGE,
			position: google.maps.ControlPosition.LEFT_CENTER
		},		
		mapTypeControl: true,
		scaleControl: false,
		streetViewControl: true
    };
	

	var map = new google.maps.Map(document.getElementById(gmap_id), mapOptions);

    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');
	
		
    var marker = new google.maps.Marker({
	    position: myLatlng,	
	    map: map,
	    //icon: markerImage,
		icon: {
			url: markerImage,
			//scaledSize: new maps.Size(60, 30),
			anchor: new google.maps.Point(26, 31),
		},		
	    clickable: true
	});
	
	
	/* only if the map information exists we add it to the map pin */
	if(googlemap_data.gm_mapinfo) {
		
		/* get the pin information */
		var infowindow = new google.maps.InfoWindow({
			content: googlemap_data.gm_mapinfo,
			maxWidth: 300
		});
			
		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map,marker);
		});
		
	}

	/* keep the map location centered on window resize */
	google.maps.event.addDomListener(window, "resize", function() {
		var center = map.getCenter();
		google.maps.event.trigger(map, "resize");
		map.setCenter(center); 
	});
  
	

    var styledMapOptions = {};

    var usRoadMapType = new google.maps.StyledMapType(
        roadAtlasStyles, styledMapOptions);

    map.mapTypes.set('usroadatlas', usRoadMapType);
    map.setMapTypeId('usroadatlas');
	
}


google.maps.event.addDomListener(window, 'load', initialize);

