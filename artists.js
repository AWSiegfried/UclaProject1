$(document).ready(function() {

    var artistArray = [{
            "name": "Bodily Ruin"
        },
        {
            "name": "Syn Abscence"
        },
        {
            "name": "Holy Wretched"
        },
        {
            "name": "Vexxum"
        },
    ];



    //Get API Token authorization
    var queryURL = "https://accounts.spotify.com/api/token";
    console.log(btoa("405db04ed80d417eaf4b3ad25920ddfb:9e36a2bafb2d430ab61d9dd6a891fe47"));

    $.ajax({
        crossDomain: true,
        headers: { "Content-Type": "application/x-www-form-urlencoded", "Authorization": "Basic " + btoa("405db04ed80d417eaf4b3ad25920ddfb:9e36a2bafb2d430ab61d9dd6a891fe47") },
        url: queryURL,
        method: "POST",
        data: { "grant_type": "client_credentials" }
    }).then(function(response) {
        console.log(response);

        //Pull URI by searching name.  NOTE: If they use a space you have to convert it to "%20" for it to work. Remember to test
        var accessToken = response.access_token;
        var artistName = "vexxum";
        var queryURLSearch = "https://api.spotify.com/v1/search?q=" + artistName + "&type=artist";
        $.ajax({
            crossDomain: true,
            headers: { "Content-Type": "application/json", "Authorization": "Bearer " + accessToken },
            url: queryURLSearch,
            method: "GET"
        }).then(function(response) {
            console.log(response);
            //THIS IS THE URI - response.artists.items[0].id
            console.log(response.artists.items[0].id);

            //Get Top Tracks via the URI
            var artistURI = response.artists.items[0].id;
            var queryTopTracks = "https://api.spotify.com/v1/artists/" + artistURI + "/top-tracks?country=US";
            var imageURL = response.artists.items[0].images[0].url;
            var image = $("<img>");
            image.attr("src", imageURL);
            $("body").append(image);
            $.ajax({
                crossDomain: true,
                headers: { "Content-Type": "application/json", "Authorization": "Bearer " + accessToken },
                url: queryTopTracks,
                method: "GET"
            }).then(function(response) {
                console.log(response);
                //BE WARY, AS SOME CAN COME BACK NULL
                console.log(response.tracks[0].preview_url);
                var songPlayer = $("<audio>");
                songPlayer.attr("id", "js-player")
                songPlayer.attr("src", response.tracks[0].preview_url);
                songPlayer.attr("controls", "controls");
                // songPlayer.attr("autoplay", "Y")
                console.log(songPlayer);
                $("#song-goes-here").append(songPlayer);

            })
        });
    })

});