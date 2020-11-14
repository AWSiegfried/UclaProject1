var selected = [];
var savedArtists = [];

var redirect = "Cathlene.html";

var checkStorage = JSON.parse(localStorage.getItem("favorites"));
if (checkStorage) {
    checkStorage.forEach(function(artist) {
        savedArtists.push(artist);
    })
}
localStorage.setItem("favorites", JSON.stringify(savedArtists));

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
        })
    }
}

renderFavorites();

$(document).on("click", ".favorite", function() {
    var artist = $(this).text();
    localStorage.setItem("selected", artist);
    window.location.href = redirect;
})

$(document).on("click", ".fa-backspace", function(event) {
    event.stopPropagation();
    var artist = $(this).data("artist");
    savedArtists.splice(savedArtists.indexOf(artist), 1);
    localStorage.setItem("favorites", JSON.stringify(savedArtists));
    $(".dropdown-menu").empty();
    renderFavorites();
})


$(".genre-button").on("click", function() {
    var city = $("#search-input").val();
    var genre = $(this).data("genre");
    console.log(genre);
    for (var i = 0; i < artistArray.length; i++) {
        if (artistArray[i].genre === genre) {
            selected.push(artistArray[i].name);
        }
    }
    for (var i = 0; i < selected.length; i++) {
        $("#modal-genre").text(genre);
        var closeBtn = $("<span>");
        closeBtn.addClass("fas fa-window-close delete float-right");
        $("#modal-genre").append(closeBtn);
        var artistName = selected[i];
        var element = $("<h3>");
        element.addClass("artist-select");
        element.text(artistName);
        $("#search-modal").append(element);
    }
    $("#search-modal").css("display", "block");
});

$(document).on("click", ".delete", function() {
    console.log("working");
    $("#modal-genre").text("");
    $("#artist-options").remove();
    $("#search-modal").css("display", "none");
});

$(document).on("click", ".artist-select", function() {
    console.log("working");
    var artistName = $(this).text();
    localStorage.setItem("selected", artistName);
    window.location.href = redirect;
})
