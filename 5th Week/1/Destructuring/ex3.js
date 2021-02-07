var berlin = {
    name: "berlin",
    country: "germany",
    population: 100
};
function logInfo(city) {
    const { name, country, population: numPeople } = city;

    console.log(
        `${name} is in ${country} and has ${numPeople} in it.`
    );
}
logInfo(berlin);

// ANSWER ***********
function logInfo(city) {
    const { name, country, population: numPeople } = city;
    console.log(
        `${name} is in ${country} and has ${numPeople} in it.`
    );
}