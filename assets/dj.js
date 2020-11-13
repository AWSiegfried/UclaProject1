var band = "vexxum";
var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + band + "&key=AIzaSyCjEWTm0QjJPVMmYLHPXD2hUfeb0KqoXP4";
console.log(queryURL);
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response);
    var artistImgURL = response.items[0].snippet.thumbnails.medium.url;
    var artistImg = $("<img>");
    artistImg.attr("src", artistImgURL);
    var youtubeChannel = "https://youtube.com/channel/" + response.items[0].snippet.channelId;
    var newURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=" + response.items[0].snippet.channelId + "&key=AIzaSyCjEWTm0QjJPVMmYLHPXD2hUfeb0KqoXP4";
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

function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, $('#google_translate_element'));
  }
        