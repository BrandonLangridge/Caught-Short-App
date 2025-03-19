function gQuery() {
    let url =
        "https://maps2.bristol.gov.uk/server2/rest/services/ext/ll_community_and_safety/MapServer/21/query?where=1%3D1&outFields=*&outSR=4326&f=json";
    fetch(url, { method: "GET", headers: { Accept: "application/json" } })
        .then((res) => res.json())
        .then(outputTable);
}

function outputTable(json) {
    let results = document.getElementById("results");
    results.innerHTML = "";

    let header = document.createElement("tr");
    results.appendChild(header);

    let th1 = document.createElement("th");
    th1.innerHTML = "Toilet Name";
    header.appendChild(th1);

    let th2 = document.createElement("th");
    th2.innerHTML = "Postcode";
    header.appendChild(th2);

    let th3 = document.createElement("th");
    th3.innerHTML = "Opening Hours";
    header.appendChild(th3);

    let th4 = document.createElement("th");
    th4.innerHTML = "Baby Change";
    header.appendChild(th4);

    let f = json.features;
    for (let i = 0; i < f.length; i++) {
        let tr = document.createElement("tr");
        results.appendChild(tr);

        let td = document.createElement("td");
        tr.appendChild(td);
        td.innerHTML = f[i].attributes.TOILET_NAME || "Unknown";

        let td1 = document.createElement("td");
        tr.appendChild(td1);
        td1.innerHTML = f[i].attributes.POSTCODE || "Unknown";

        let td2 = document.createElement("td");
        tr.appendChild(td2);
        td2.innerHTML = f[i].attributes.OPENING_HOURS || "Unknown";

        let td3 = document.createElement("td");
        tr.appendChild(td3);
        td3.innerHTML = f[i].attributes.BABY_CHANGE ?? "Unknown";
    }
}
