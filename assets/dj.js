var band = "vexxum";
        var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + band + "&key=AIzaSyCqnTeBwerTPbG_YE5Thd1tXFmNm0vx4zI";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);
            var artistImgURL = response.items[0].snippet.thumbnails.medium.url;
            var artistImg = $("<img>");
            artistImg.attr("src", artistImgURL);
            var youtubeChannel = "https://youtube.com/channel/" + response.items[0].snippet.channelId;
            var newURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=" + response.items[0].snippet.channelId + "&key=AIzaSyCqnTeBwerTPbG_YE5Thd1tXFmNm0vx4zI";
            $.ajax({
                url: newURL,
                method: "GET"
            }).then(function(response) {
                console.log(response);
                var videoId = response.items[1].id.videoId;
                var video = $("<iframe width='560' height='315' src='https://www.youtube.com/embed/" + videoId + "' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen>");
                var title = response.items[1].snippet.title;
                $("body").append(artistImg, video);
            })
        })

        var instagramURL = "https://api.instagram.com/oauth/authorize?client_id=746963312828968&redirect_uri=https://github.com/AWSiegfried/Emergence_v1&scope=user_profile,user_media&response_type=code";
        var postURL = "https://api.instagram.com/oauth/access_token \
  -F client_id=746963312828968 \
  -F client_secret=●●●●●●●● \
  -F grant_type=authorization_code \
  -F redirect_uri=https://github.com/AWSiegfried/Emergence_v1 \
  -F code=AQBpVOM-3K6yHBN3YERxMIJL7BiOyACWqDzlz-Gn1JrUFHZBtfmZf11cUPpFoDcAWqEujDvxm7aR-F0RigqfndAFoSuRKurnfOLfnjLKKHYD2Yn0G4NiF8PrMnRKSy9v2jEiuhQxeOAfYbyJj2h6Na6f5NZF6dJp6ZPxf4iH0QBHO7M4C_OG4AmL0Vjxdna-m268vrIp-wymrVg-52VJSAVKngs59TlyNagl5hn5qH1P0Q";
