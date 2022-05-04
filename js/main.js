// Initialize and add the map

function initMap() {
    // Your location
    const loc= {lat: 42.361145, lng: -71.057083};
    //centered map on location
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc
  });
  // The marker, positioned location
  const marker = new google.maps.marker({position: loc, map: map});
}
