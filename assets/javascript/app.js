
var cartoons = ["Gem", "Shera", "GiJoe", "Transformers"];

function displayCartoonInfo() {

    var cartoon = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +cartoon+"&api_key=BNkUYzzVLATGf9zrKQgNKwqtjTGxuygc&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {

        var cartoonDiv = $("<div class='cartoob'>");

        var rating = response.Rated;

        var pOne = $("<p>").text("Rating: " + rating);

        cartoonDiv.append(pOne);


        var imgURL = response.Poster;

        var image = $("<img>").attr("src", imgURL);

        cartoonDiv.append(image);

        $("#cartoons-view").prepend(cartoonDiv);
      });

    function renderButtons() {

      $("#buttons-view").empty();

      for (var i = 0; i < cartoons.length; i++) {

       // (<button></button>) */
        var a = $("<button>");
        a.addClass("cartoon-btn");
        a.attr("data-name", cartoons[i]);
        a.text(cartoons[i]);
        $("#buttons-view").append(a);
      }
    }

    $("#add-cartoon").on("click", function(event) {
      event.preventDefault();
      var cartoon = $("#cartoon-input").val().trim();

      cartoons.push(cartoon);

      renderButtons();
    });

    $(document).on("click", ".cartoon-btn", displayCartoonInfo);

          renderButtons();

        });
