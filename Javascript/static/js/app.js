// from data.js
var tableData = data;
var submit = d3.select("#filter-btn");

// YOUR CODE HERE!
var tbody = d3.select("tbody");

function getMydata(arr){
    arr.forEach((ufodata) => {
        var row = tbody.append("tr");
        Object.entries(ufodata).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
}

getMydata(tableData);

submit.on("click", function() {
    d3.event.preventDefault();

    tbody.selectAll("*").remove();

    var filter = {};

    var dateData = d3.select("#datetime").property("value").trim();
    var cityData = d3.select("#city").property("value").toLowerCase().trim();
    var stateData = d3.select("#state").property("value").toLowerCase().trim();
    var countryData = d3.select("#country").property("value").toLowerCase().trim();
    var ShapeData = d3.select("#shape").property("value").toLowerCase().trim();
    
    if (dateData != "")
        filter['datetime'] = dateData;
    if(cityData != "")
        filter['city'] = cityData;
    if(stateData != "")
        filter['state'] = stateData;
    if(countryData != "")
        filter['country'] = countryData;
    if(ShapeData != "")
        filter['shape'] = ShapeData;

    var filterdata = tableData.filter(function(ufo) {
        for (var key in filter) {
            if (ufo[key] === undefined || ufo[key] != filter[key])
            return false;
        }
        return true;
    });

    if (dateData === "" && cityData === "" && stateData === "" && countryData === "" && ShapeData === ""){
        filterdata = tableData;
    }

    getMydata(filterdata);

});









/*var tbody = d3.select("tbody");
var tableData = data;
console.log(tableData);
function GetmyData()
{
    alert("Hi");
    alert(document.getElementById("txtdatetime").value);
    alert(tableData[0].city);

    var search_datatime = document.getElementById("txtdatetime").value;

    var data_filter = tableData.filter(element => Date.parse(element.datetime) === Date.parse(search_datatime));

    alert(data_filter[0].city);

    document.getElementById("table_data").innerHTML = "";
    var i;
    alert(data_filter.length);
    for (i = 0; i < data_filter.length; i++) {
        document.getElementById("table_data").innerHTML = document.getElementById("table_data").innerHTML + "<tr><td>" + data_filter[i].datetime + "</td><td>" + data_filter[i].city + "</td><td>" + data_filter[i].state + "</td><td>" + data_filter[i].country + "</td><td>" + data_filter[i].shape + "</td><td>" + data_filter[i].durationMinutes + "</td><td>" + data_filter[i].comments + "</td><td></tr>";
    }

    return false;
}
/*submit.on("click", function() {
d3.event.preventDefault();
var inputElement = d3.select("#ufo-form-input");
var inputValue = inputElement.property("value");
console.log(inputValue);
console.log(tableData);
var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
console.log(filteredData);
var city = filteredData.map(tableData => tableData.city);
var state = filteredData.map(tableData => tableData.state);
var country = filteredData.map(tableData => tableData.country);
var shape = filteredData.map(tableData => tableData.shape);
var durationMinutes = filteredData.map(tableData => tableData.durationMinutes);
var comments = filteredData.map(tableData => tableData.comments);

// YOUR CODE HERE!
var submit = d3.select("#FilterTable");
  // Prevent the page from refreshing
  d3.event.preventDefault();
data.forEach(function(ufoData) {
    //console.log(ufoData);
    var row = tbody.append("tr");
    Object.entries(ufoData).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = row.append("td");
      cell.text(value);
    });
  });
  
