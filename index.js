// Initialize and add the map
function initMap() {
    // The location of Tokyo
    const tokyo = { lat: 35.685174508463774, lng: 139.75240159042139 };
    // The map, centered at Tokyo
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13,
      center: tokyo,
    });
    // The marker, positioned at Tokyo
    const marker = new google.maps.Marker({
      position: tokyo,
      map: map,
    });
  }
  
  window.initMap = initMap;