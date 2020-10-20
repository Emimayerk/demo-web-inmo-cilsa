function iniciarMap(){
    var coord = {lat:-32.946783,lng:-60.638747};
    var map = new google.maps.Map(document.getElementById('gmap'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
} 