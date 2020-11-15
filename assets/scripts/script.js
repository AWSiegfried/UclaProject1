$(document).ready(function() {

    // Global variables
    var selected = [];
    var savedArtists = [];
    var redirect = "artist.html";

    // Checking if the user has saved artists stored in local storage
    var checkStorage = JSON.parse(localStorage.getItem("favorites"));
    if (checkStorage) {
        checkStorage.forEach(function(artist) {
            savedArtists.push(artist);
        });
    };
    localStorage.setItem("favorites", JSON.stringify(savedArtists));

    // Creates the list of saved artists
    function renderFavorites() {
        var header = $("<h3>");
        header.text("Saved Artists:");
        header.addClass("dropdown-item");
        header.attr("id", "dropdown-header");
        $(".dropdown-menu").append(header);
        if (savedArtists) {
            savedArtists.forEach(function(artist) {
                var favorite = $("<p>");
                favorite.text(artist);
                favorite.addClass("dropdown-item favorite");
                var deleteBtn = $("<span>");
                deleteBtn.addClass("float-right fas fa-backspace mt-1");
                deleteBtn.attr("data-artist", artist);
                favorite.append(deleteBtn);
                $(".dropdown-menu").append(favorite);
            });
        };
    };

    renderFavorites();

    // If a user clicks on one of their saved artists, they are brought to that artist's page
    $(document).on("click", ".favorite", function() {
        var artist = $(this).text();
        localStorage.setItem("selected", artist);
        window.location.href = redirect;
    });

    // If a user clicks the delete button, that artist will be removed from their saved artists list
    $(document).on("click", ".fa-backspace", function(event) {
        event.stopPropagation();
        var artist = $(this).data("artist");
        savedArtists.splice(savedArtists.indexOf(artist), 1);
        localStorage.setItem("favorites", JSON.stringify(savedArtists));
        $(".dropdown-menu").empty();
        renderFavorites();
    });

    // Adds a clear button to any element passed in
    function clearBtn(element) {
        var closeBtn = $("<span>");
        closeBtn.addClass("fas fa-window-close delete float-right");
        element.append(closeBtn);
    };

    // When a user clicks on a genre, a modal window pops up with artists that match the genre and location
    $(".genre-button").on("click", function() {

        // Converts all inputs to uppercase
        var city = $("#search-input").val().toUpperCase();

        // If the user has not specified a city, they will get a message telling them to enter one
        if (!city) {
            var noCity = $("<h2>");
            noCity.attr("id", "modal-genre");
            noCity.text("Please enter a City");
            clearBtn(noCity);
            $("#search-modal").append(noCity);
        } else {
            var genre = $(this).data("genre");
            var modalGenre = $("<h2>");
            modalGenre.attr("id", "modal-genre");
            modalGenre.text(genre);
            var artistOptions = $("<div>");
            artistOptions.attr("id", "artist-options");
            clearBtn(modalGenre);

            // This checks the database and pushes any matching artists into the selected array
            for (var i = 0; i < artistArray.length; i++) {
                if (artistArray[i].genre === genre && artistArray[i].city === city) {
                    selected.push(artistArray[i].name);
                }; 
            };

            // Attaches the matching artists' name to an element
            for (var i = 0; i < selected.length; i++) {
                var artistName = selected[i];
                var element = $("<h3>");
                element.addClass("artist-select");
                element.text(artistName);

                // Depending on the genre, the text color will change
                switch (genre) {
                    case 'POP':
                        element.addClass("pop");
                        modalGenre.addClass("pop");
                        break;
                    case 'ROCK':
                        element.addClass("rock");
                        modalGenre.addClass("rock");
                        break;
                    case 'RAP':
                        element.addClass("rap");
                        modalGenre.addClass("rap");
                        break;
                    case 'HIP-HOP':
                        element.addClass("hip-hop");
                        modalGenre.addClass("hip-hop");
                        break;
                    case 'COUNTRY':
                        element.addClass("country");
                        modalGenre.addClass("country");
                        break;
                    case 'METAL':
                        element.addClass("metal");
                        modalGenre.addClass("metal");
                        break;
                    default:
                        return;
                        break;
                };

                // Displays the matching artists' on the search modal
                artistOptions.append(element);
                $("#search-modal").append(modalGenre, artistOptions);
            };

            // This code runs if no matching artist's were found 
            if (selected.length < 1) {
                var noArtists = $("<h2>");
                noArtists.attr("id", "modal-genre");
                noArtists.text("No artists found");
                clearBtn(noArtists);
                $("#search-modal").append(noArtists);
            };
        };
        $("#search-modal").css("display", "block");
    });

    // If a user clicks the close button, the modal will close and empty its contents
    $(document).on("click", ".delete", function() {
        console.log("working");
        selected = [];
        $("#search-input").val("");
        $("#search-modal").empty();
        $("#search-modal").css("display", "none");
    });

    // When a user clicks on an artist, they are redirected to that artist's page
    $(document).on("click", ".artist-select", function() {
        console.log("working");
        var artistName = $(this).text();
        localStorage.setItem("selected", artistName);
        window.location.href = redirect;
    });
});