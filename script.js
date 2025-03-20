// Script in this file is written by Brandon

/* Script for GeoTest.html file */

mapboxgl.accessToken = 'pk.eyJ1IjoiYnJhbmRvbmxhbmdyaWRnZSIsImEiOiJjbThjeDRhamExYW15MmtzaDg2ZTdveWs0In0.VtGxW5vAzEEMe5Kp1FglKw';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-2.587910, 51.454514],
    zoom: 14 
});

var userMarker = null; //The marker that will represent the user's location

function addMarkers(json) {
    let features = json.features;
    for (let i = 0; i < features.length; i++) {
        let lon = features[i].geometry.coordinates[0]; // Longitude
        let lat = features[i].geometry.coordinates[1]; // Latitude

        new mapboxgl.Marker()
            .setLngLat([lon, lat])
            .addTo(map);
    }
}

// Fetch toilet data from the server
function query() {
    let url = "https://maps2.bristol.gov.uk/server2/rest/services/ext/ll_community_and_safety/MapServer/21/query?where=1%3D1&outFields=*&returnGeometry=true&f=geojson";
    fetch(url)
        .then((res) => res.json())
        .then(addMarkers);
}

// Loading the toilet data
query();

// Search by Postcode
document.getElementById('searchButton').addEventListener('click', function() {
    var location = document.getElementById('searchInput').value;

    var geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(location) + '.json?access_token=' + mapboxgl.accessToken;

    fetch(geocodeUrl)
        .then(response => response.json())
        .then(data => {
            if (data.features && data.features.length > 0) {
                var firstResult = data.features[0];
                var lngLat = firstResult.geometry.coordinates;

                // Set map center to the found location
                map.setCenter(lngLat);
                map.setZoom(14);

                // Add a yellow marker to the map at the found location
                if (userMarker) userMarker.remove(); // Remove the previous yellow marker
                userMarker = new mapboxgl.Marker({ color: 'yellow' }) // Create a new yellow marker
                    .setLngLat(lngLat)
                    .addTo(map);
            } else {
                alert('Location not found');
            }
        })
        .catch(error => {
            console.error('Error fetching geocode:', error);
            alert('Error finding location');
        });
});

// Search by Geolocation
document.getElementById('geolocationButton').addEventListener('click', function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var userLat = position.coords.latitude;
            var userLon = position.coords.longitude;

            // Set map center to the users location
            map.setCenter([userLon, userLat]);
            map.setZoom(14);

            // Add a yellow marker for the user's location
            if (userMarker) userMarker.remove(); // Remove the previous yellow marker
            userMarker = new mapboxgl.Marker({ color: 'yellow' })  // Create a new yellow marker
                .setLngLat([userLon, userLat])
                .addTo(map);
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
});

// New button for "List all without providing location"
document.getElementById('newButton').addEventListener('click', function() {
    alert('New Button Clicked');
    // Gap for Graham to link his page.

});


/* Script for add-update.html file */
// Generates an Excel file on users device.
// The below code was supported by Generative AI, this was not taught in class but is a function that makes the add-update.html file useful.

function generateExcel() {
    const toiletName = document.querySelector('textarea[placeholder="Enter Toilet Name..."]').value;
    const toiletAddress = document.querySelector('textarea[placeholder="Enter Toilet Address..."]').value;
    const toiletPostcode = document.querySelector('textarea[placeholder="Enter Toilet Postcode..."]').value;
    const hasMaleFacilities = document.querySelector('input[name="maleFacilities"]:checked').value;
    const hasFemaleFacilities = document.querySelector('input[name="femaleFacilities"]:checked').value;
    const babyChangingFacilities = document.querySelector('input[name="location"]:checked').value === 'location' ? 'Yes' : 'No';

    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.xlsx';
    fileInput.onchange = function (e) {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = function (event) {
            const data = new Uint8Array(event.target.result);
            const workbook = XLSX.read(data, { type: 'array' });

            const sheet = workbook.Sheets[workbook.SheetNames[0]];
            const nextRow = XLSX.utils.sheet_to_json(sheet, { header: 1 }).length + 1;

            sheet[`A2`] = { v: toiletName };
            sheet[`B2`] = { v: toiletAddress };
            sheet[`C2`] = { v: toiletPostcode };
            sheet[`D2`] = { v: hasMaleFacilities };
            sheet[`E2`] = { v: hasFemaleFacilities };
            sheet[`F2`] = { v: babyChangingFacilities };

            XLSX.writeFile(workbook, 'updated_toilet_data.xlsx');
        };

        reader.readAsArrayBuffer(file);
    };

    fileInput.click();
}
