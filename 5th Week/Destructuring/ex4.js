var getNameAndCountry = function (objectWithCountryAndName) {
    var newArray = [objectWithCountryAndName.name, objectWithCountryAndName.country];
    return newArray;
}

cityA = { name: "İzmir", country: "Turkey" }
// console.log(getNameAndCountry(a));

var getRelocatedCity = function (city1, city2) {
    // setting a default value for city2.country
    if (typeof (city2.country) === "undefined") {
        city2.country = "Germany";
    }
    // taking only country property from city2 via first function 
    var city2Country = getNameAndCountry(city2);
    city2Country.shift(0);

    var newObject = city1;
    newObject.country = city2Country;
    return newObject;
}
cityB = { name: "İstanbul", country: "Turkey" };
cityC = { name: "Berlin" };
console.log(getRelocatedCity(cityA, cityC));
