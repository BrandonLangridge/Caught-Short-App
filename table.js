// Script in this file is written by Graham

// Function that fetches JSON and then calls another to construct a table
function tableQuery() {
  let url =
    "https://maps2.bristol.gov.uk/server2/rest/services/ext/ll_community_and_safety/MapServer/21/query?where=1%3D1&outFields=*&outSR=4326&f=json";
  fetch(url, { method: "GET", headers: { Accept: "application/json" } })
    .then((res) => res.json())
    .then(outputTable)
  // Map size is reset after the table is output
    .then(() => setTimeout(() => map.resize(), 100));
}

// Function that filters the data using values passed from html element that calls it
// Also edits class to change appearance of html element
function filter(e) {
  items = document.getElementsByClassName("w3-bar-item");
  for (var i = 0; i < items.length; i++) {
    items[i].classList.remove("w3-black");
  }
  e.classList.add("w3-black");
  let encoded = encodeURIComponent(e.value);
  let encoded2 = encodeURIComponent(e.getAttribute("data-fieldname"));

  let url = `https://maps2.bristol.gov.uk/server2/rest/services/ext/ll_community_and_safety/MapServer/21/query?where=${encoded2}%20%3D%20'${encoded}'&outFields=*&outSR=4326&f=json`;

  fetch(url, { method: "GET", headers: { Accept: "application/json" } })
    .then((res) => res.json())
    .then(outputTable)
    .then(() => setTimeout(() => map.resize(), 100));
}

// Function that builds and populates the table with data from the JSON
function outputTable(json) {
  var results = document.getElementById("results");
  results.innerHTML = "";

  var header = document.createElement("tr");
  results.appendChild(header);

  var th1 = document.createElement("th");
  th1.innerHTML = "Toilet Name";
  header.appendChild(th1);

  var th2 = document.createElement("th");
  th2.innerHTML = "Postcode";
  header.appendChild(th2);

  var th3 = document.createElement("th");
  th3.innerHTML = "Opening Hours";
  header.appendChild(th3);

  var th4 = document.createElement("th");
  th4.innerHTML = "Baby Change";
  header.appendChild(th4);

  var th5 = document.createElement("th");
  th5.innerHTML = "Unisex";
  header.appendChild(th5);

  var f = json.features;
  for (var i = 0; i < f.length; i++) {
    var tr = document.createElement("tr");
    results.appendChild(tr);
    var td = document.createElement("td");
    tr.appendChild(td);
    td.innerHTML = json.features[i].attributes.TOILET_NAME;
    var td1 = document.createElement("td");
    tr.appendChild(td1);
    td1.innerHTML = json.features[i].attributes.POSTCODE;
    var td2 = document.createElement("td");
    tr.appendChild(td2);
    td2.innerHTML = json.features[i].attributes.OPENING_HOURS;

    var td3 = document.createElement("td");
    tr.appendChild(td3);
    if (json.features[i].attributes.BABY_CHANGE === null) {
      td3.innerHTML = "Unknown";
    } else {
      td3.innerHTML = json.features[i].attributes.BABY_CHANGE;
    }
    var td4 = document.createElement("td");
    tr.appendChild(td4);
    if (json.features[i].attributes.FEMALE === null) {
      td4.innerHTML = "Unknown";
    } else {
      td4.innerHTML = json.features[i].attributes.FEMALE;
    }
  }
}

// Function that removes the table
function clearResults() {
  document.getElementById("results").innerHTML = "";
}
