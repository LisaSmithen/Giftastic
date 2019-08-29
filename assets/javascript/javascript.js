$(function(){
    populateButtons(singersArray, 'searchButton', '#button-view');
})

var singersArray = ["Sade", "Neyo", "Adele", "Alicia Keys", "Aretha"];

function populateButtons(singersArray, classToAdd, areaToAddTo){
    $(areaToAddTo).empty();
    for(var i = 0; i < singersArray, classToAdd, areaToAddTo){
        var a = $('<button>');
        a.addClass(classToAdd);
        a.attr('data-type', singersArray[i]);
        a.text(singersArray[i]);
        $(areaToAddTo).append(a);
            }
}

$(document).on('clck', '.searchButton', function(){
    $('#searches').empty();
    var type = $(this).data('type');
    var searchInput = $("#search-input").val();
    var queryURL = 'https://api.giphy.com/v1/gifs/search?q='+ type +'&api_key=cnIj7nHYhNLV970auRskKuQiPZgwy2aT&limit=10';
    $.ajax({
        url: queryURL,
        method: 'GET',
    })

    .done(function(response){
        console.log(response.data);
        for(var i =0; i < response.data.length; i++){
            var searchDiv = $('<div class="search-item">');
            var rating = response.data[i].rating;
            var p = $("<p>").text('Rating: ' + rating);
            var animated = response.data[i].images.fixed_height.url;
            var image = $('<img>');
            image.attr('srsc', still);
            image.attr('data-still', still);
            image.addClass('searchImage');
