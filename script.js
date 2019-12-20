// DOM elements
var searchEl = $("#search");
var numRecordsEl = $("#number");
var startYearEl = $("#start");
var endYearEl = $("#end");
var searchBtnEl = $("#searchBtn");
var clearBtnEl = $("#clearBtn");
var articlesEl = $("#articles");

// Functions

// Event listeners

    // button click on the search button will activate the AJAX data pull
        // set results limit to variable equal to the value chosen in the number 
        // of records dropdown and add variable into URL string
        // compare article "title" to search term(s)
        // compare article "year" to both start year and end year [if entered]
        // grab search results and append them to empty #articles div

    // button click on clear results button
        // empty out search results from #articles div

