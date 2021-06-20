
 // TODO: add your own access token
 mapboxgl.accessToken = 'pk.eyJ1IjoiaGljcmFuYXJub2xkIiwiYSI6ImNrcHB3ZHJxaTA3a3IycnFwNHhpOWpzczUifQ.Gp3qjHjphUVGrC5Nrn0S8w';

// This is the map instance
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-71.11447303, 42.37054337],
    zoom: 12,
  });
  

// TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
let marker = new mapboxgl.Marker().setLngLat([-71.11447303, 42.37054337]).addTo(map);

// 
async function run(){
    // get bus data    
	const locations = await getBusLocations();
	console.log(new Date());
	console.log( locations[0].attributes.longitude);
	console.log( locations[0].attributes.latitude);
	//marker.setLngLat([locations[0].attributes.longitude, locations[0].attributes.latitude])

	// timer
	setTimeout(run, 15000);
}

// Request bus data from MBTA
async function getBusLocations(){
	const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
	const response = await fetch(url);
	const json     = await response.json();
	return json.data;
}

run();





  
   