Meteor.startup(function() {

  GoogleMaps.load({
    'sensor': true, //optional
    'key': '', //optional
    'language': 'fr',  //optional
    'libraries': 'places'
  });

});

Template.create.helpers({
  createMapOptions: function() {
    if (GoogleMaps.loaded()) {
      return {
        center: new google.maps.LatLng(48.8566667, 2.3509871),
        zoom: 6,
        disableDefaultUI: true
      };
    }
  }
});

Template.create.events({
  'click #gotodescription': function() {
    FlowRouter.go('/group/create/description/'+$('#gotodescription').data('id')+'/');
  }
});

Template.create.onCreated(function() {

  GoogleMaps.ready('createMap', function(map) {

    var marker = new google.maps.Marker({
      position: map.options.center,
      map: map.instance
    });
    var map = GoogleMaps.maps.createMap.instance;
    // Create the search box and link it to the UI element.
    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function() {
      searchBox.setBounds(map.getBounds());
    });

    var markers = [];
    // [START region_getplaces]
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function() {
      var places = searchBox.getPlaces();

      if (places.length == 0) {
        return;
      }

      // Clear out the old markers.
      markers.forEach(function(marker) {
        marker.setMap(null);
      });
      markers = [];

      // For each place, get the icon, name and location.
      var bounds = new google.maps.LatLngBounds();
      places.forEach(function(place) {
        var icon = {
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25)
        };

        // Create a marker for each place.
        markers.push(new google.maps.Marker({
          map: map,
          icon: icon,
          title: place.name,
          position: place.geometry.location
        }));

        var contentString = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h1 id="firstHeading" class="firstHeading">'+place.name+'</h1>'+
          '<div id="bodyContent">'+
          '<p>' +place.formatted_address+'</p>'+
          '<p><a href="" data-id='+place.place_id+' id="gotodescription">'+
          'Cliquez pour créer un groupe dans ce bar</a> '+
          '</p>'+
          '</div>'+
          '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        infowindow.open(map, markers[0]);

        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      map.fitBounds(bounds);
    });
  });
});