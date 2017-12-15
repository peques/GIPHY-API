// BUTTON FUNCTION//
$("button").on("click", function() {
    var person = $(this).attr("data-person");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        person + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
            url: queryURL,
            method: "GET"
        })
        .done(function(response) {
            var results = response.data;

            for (var i = 0; i < results.length; i++) {
                var gifDiv = $("<div class='item'>");

                var rating = results[i].rating;

                var p = $("<p>").text("Rating: " + rating);

                var personImage = $("<img>");
                personImage.attr("src", results[i].images.fixed_height.url);

                gifDiv.prepend(p);
                gifDiv.prepend(personImage);

                $("#gifs-appear-here").prepend(gifDiv);
            }
        });
});




//ADD BUTTON//
//targetting the submit button by its class id of #addChar
$("#addChar").on("click", function(e) {
    //this will prevent data being erased from text box after clicking submit button
    e.preventDefault();


    //i need it to grab the value of what i type in the text box
    var a = $("#character-input").val();
    //it needs to create a button based on the value i typed in the box
    var b = $("<button>");
    $("#buttons").append(b);
    b.text(a).attr("data-person", a);

    //search for the character input

    $("button").on("click", function() {
        var person = $(this).attr("data-person");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
            person + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({
                url: queryURL,
                method: "GET"
            })
            .done(function(response) {
                var results = response.data;

                for (var i = 0; i < results.length; i++) {
                    var gifDiv = $("<div class='item'>");

                    var rating = results[i].rating;

                    var p = $("<p>").text("Rating: " + rating);

                    var personImage = $("<img>");
                    personImage.attr("src", results[i].images.fixed_height.url);

                    gifDiv.prepend(p);
                    gifDiv.prepend(personImage);

                    $("#gifs-appear-here").prepend(gifDiv);
                }
            });
    });


});


 
