(function (countries) {

    // console.log('countries :>> ', countries);
    var resultsToShow = $(".results");
    // console.log('resultsToShow :>> ', resultsToShow);
    var inputField = $("input");
    // console.log('inputField :>> ', inputField);
    inputField.on("input", function () {
        // console.log("inputField running");
        var userInput = inputField.val().toLowerCase();
        // console.log('userInput :>> ', userInput[0]);
        var matchingCountires = [];
        for (var i = 0; i < countries.length; i++) {
            // console.log('userInput :>> ', userInput);
            // console.log('countries[i] :>> ', countries[i]);
            if (countries[i].toLowerCase().indexOf(userInput) === 0) {
                // console.log('countries[i] :>> ', countries[i]);
                matchingCountires.push(countries[i]);
            }
            if (matchingCountires.length >= 4) {
                break;
            }
        }
        if (matchingCountires.length === 0) {
            matchingCountires = ["No results"];
        } else if (userInput.length === 0) {
            matchingCountires = [];
        }
        // console.log('matchingCountires :>> ', matchingCountires);

        var countriesToShow = "";
        // if (matchingCountires.length === 0) {
        //     countriesToShow = "No results";
        // } else {
        for (var j = 0; j < matchingCountires.length; j++) {
            countriesToShow += "<div class='countries'>" + matchingCountires[j] + "</div>";
        }
        // }
        // console.log('countriesToShow :>> ', countriesToShow);
        resultsToShow.html(countriesToShow);
        // console.log('resultsToShow :>> ', resultsToShow);
    })

    resultsToShow.on("mouseover", "div", function (event) {
        $(event.currentTarget).addClass("highlight");
    })

    resultsToShow.on("mouseleave", "div", function (event) {
        $(event.currentTarget).removeClass("highlight");
    })

    resultsToShow.on("mousedown", "div", function (event) {     // NEED WORK
        var clickedInput = $(event.currentTarget);

        console.log('clickedInput :>> ', clickedInput);     // getting an obj with 1 div
        inputField.html(clickedInput.eq(0).val());
    })

    $("html").on("keydown", function (event) {  //
        // console.log("document selected");
        for (var k = 0; k < resultsToShow.length; k++) {
            if (!resultsToShow[k].hasClass(".highlight")) {
                $(event.currentTarget).addClass(".highlight")
            }
        }

    })




























})([
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Côte D'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Democratic People's Republic of Korea",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People’s Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Republic of Korea",
    "Republic of Moldova",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Tajikistan",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United Republic of Tanzania",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Viet Nam",
    "Yemen",
    "Zambia",
    "Zimbabwe"
]);