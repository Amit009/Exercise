// Modular Design Pattern

"use strict";

// Define functions

// Drop Down toggle
var navbarDropdown = (function() {
    var dropdownToggle = document.getElementById('dropdown');
    var dropdownMenu = document.getElementById('dropdown-menu');
    dropdownToggle.addEventListener("click", function() {
    	dropdownMenu.classList.toggle("open");
    }, false)

})();

// Search form toogle
var searchToggle = (function() {
    var searchIcon = document.getElementById('search_icon');
    var searchFormWrapper = document.getElementById('search_form_wrapper');
    var searchOverlay = document.getElementById('search_overlay');
    var closeSearch = document.getElementById('close_search');
    searchIcon.addEventListener("click", function() {
    	searchFormWrapper.classList.toggle("open");
    	searchOverlay.classList.toggle("open");
    }, false)
    closeSearch.addEventListener("click", function() {
    	searchFormWrapper.classList.toggle("open");
    	searchOverlay.classList.toggle("open");
    }, false)

})();

