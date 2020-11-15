$(document).ready(function() {

    //Get API Token authorization
    var queryURL = "https://accounts.spotify.com/api/token";
    // console.log(btoa("405db04ed80d417eaf4b3ad25920ddfb:9e36a2bafb2d430ab61d9dd6a891fe47"));

    $.ajax({
        crossDomain: true,
        headers: { "Content-Type": "application/x-www-form-urlencoded", "Authorization": "Basic " + btoa("405db04ed80d417eaf4b3ad25920ddfb:9e36a2bafb2d430ab61d9dd6a891fe47") },
        url: queryURL,
        method: "POST",
        data: { "grant_type": "client_credentials" }
    }).then(function(response) {
        // console.log(response);

        //Pull URI by searching name.  NOTE: If they use a space you have to convert it to "%20" for it to work. Remember to test
        var accessToken = response.access_token;
        var artistName = "triangle%20fire";
        var queryURLSearch = "https://api.spotify.com/v1/search?q=" + artistName + "&type=artist";
        $.ajax({
            crossDomain: true,
            headers: { "Content-Type": "application/json", "Authorization": "Bearer " + accessToken },
            url: queryURLSearch,
            method: "GET"
        }).then(function(response) {
            // console.log(response);
            //THIS IS THE URI - response.artists.items[0].id
            // console.log(response.artists.items[0].id);

            //Picture of band
            var imageURL = response.artists.items[0].images[1].url;
            var image = $("<img>");
            image.attr("src", imageURL);
            $("body").append(image);

            //Get Top Tracks via the URI
            var artistURI = response.artists.items[0].id;
            var queryTopTracks = "https://api.spotify.com/v1/artists/" + artistURI + "/top-tracks?country=US";

            //Add URI to embed code
            var embedSrc = "https://open.spotify.com/embed/artist/" + artistURI
            $("#embedlink").attr("src", embedSrc);

            $.ajax({
                crossDomain: true,
                headers: { "Content-Type": "application/json", "Authorization": "Bearer " + accessToken },
                url: queryTopTracks,
                method: "GET"
            }).then(function(response) {
                console.log(response);
                //BE WARY, AS SOME CAN COME BACK NULL
                // console.log(response.tracks[0].preview_url);
                var songPlayer = $("<audio>");
                songPlayer.attr("id", "js-player")
                songPlayer.attr("src", response.tracks[0].preview_url);
                songPlayer.attr("controls", "controls");
                // songPlayer.attr("autoplay", "Y")
                // console.log(songPlayer);
                $("#song-goes-here").append(songPlayer);

                //Beginning Journey to create graphs
                //Pull track id for top ten (max) songs
                var topTracksDance = [];
                var topTracksVal = [];
                var topTracksEnergy = [];
                var topTracksLoud = [];
                var topTracksTempo = [];
                var topTracksIns = [];

                for (var i = 0; i < response.tracks.length; i++) {
                    // console.log(response.tracks[i].id)

                    var specifcTrackURI = response.tracks[i].id
                    var audioFeaturesURL = "https://api.spotify.com/v1/audio-features/" + specifcTrackURI;

                    //Pull All Datapoints
                    $.ajax({
                        crossDomain: true,
                        headers: { "Content-Type": "application/json", "Authorization": "Bearer " + accessToken },
                        url: audioFeaturesURL,
                        method: "GET"
                    }).then(function(response) {
                        topTracksDance.push(response.danceability);
                        topTracksVal.push(response.valence);
                        topTracksEnergy.push(response.energy);
                        topTracksLoud.push(response.loudness);
                        topTracksTempo.push(response.tempo);
                        topTracksIns.push(response.instrumentalness);
                    })
                }
                console.log(topTracksDance);

                //Push averages to new array
                var danceSum = [];
                var valenceSum = [];
                var energySum = [];
                var loudnessSum = [];
                var tempoSum = [];
                var instrumentalnessSum = [];

                function timeDelay() {
                    if (response.tracks.length !== topTracksIns.length) {
                        setTimeout(timeDelay, 1000); // try again in 300 milliseconds
                    } else {
                        //Take average of all 6 datapoints
                        //topTracksDance
                        var sumtopTracksDance = topTracksDance.reduce(function(a, b) {
                            return a + b;
                        }, 0);
                        var averagetopTracksDance = sumtopTracksDance / topTracksDance.length
                        danceSum.push(averagetopTracksDance);
                        // console.log(averagetopTracksDance);

                        //topTracksValence
                        var sumtopTracksVal = topTracksVal.reduce(function(a, b) {
                            return a + b;
                        }, 0);
                        var averagetopTracksVal = sumtopTracksVal / topTracksVal.length
                        valenceSum.push(averagetopTracksVal)

                        //topTracksEnergy
                        var sumtopTracksEnergy = topTracksEnergy.reduce(function(a, b) {
                            return a + b;
                        }, 0);
                        var averagetopTracksEnergy = sumtopTracksEnergy / topTracksEnergy.length
                        energySum.push(averagetopTracksEnergy)

                        //topTracksLoudness
                        var sumtopTracksLoud = topTracksLoud.reduce(function(a, b) {
                            return a + b;
                        }, 0);
                        var averagetopTracksLoud = sumtopTracksLoud / topTracksLoud.length
                        loudnessSum.push(averagetopTracksLoud)

                        //topTracksTempo
                        var sumtopTracksTempo = topTracksTempo.reduce(function(a, b) {
                            return a + b;
                        }, 0);
                        var averagetopTracksTempo = sumtopTracksTempo / topTracksTempo.length
                        tempoSum.push(averagetopTracksTempo)

                        //topTracksInstrumentalness
                        var sumtopTracksIns = topTracksIns.reduce(function(a, b) {
                            return a + b;
                        }, 0);
                        var averagetopTracksIns = sumtopTracksIns / topTracksIns.length
                        instrumentalnessSum.push(averagetopTracksIns)

                        //Make aggregates out of 100
                        //Dance Level
                        var danceLevel = (danceSum * 100).toFixed(0);
                        console.log(danceLevel);

                        //Valence Level
                        if (valenceSum > 0.5) {
                            var valLevel = ((valenceSum - .5) * 200).toFixed(0);
                        } else {
                            var valLevel = ((.5 - valenceSum) * 200).toFixed(0);
                        }
                        console.log(valLevel);

                        //Energy Level
                        var energyLevel = (energySum * 100).toFixed(0)
                        console.log(energyLevel);

                        //Loudness Level
                        var loudnessLevel = (100 - (0 - loudnessSum)).toFixed(0);
                        console.log(loudnessLevel);

                        //Tempo Level
                        var tempoLevel = parseInt(tempoSum).toFixed(0);
                        console.log(tempoLevel);


                        //Instrumentalness Level
                        var instrumentalnessLevel = (instrumentalnessSum * 100).toFixed(0);
                        console.log(instrumentalnessLevel);


                        //Graph 1 - Danceability
                        var chart = JSC.chart('chartDiv1', {
                            debug: true,
                            type: 'column',

                            /*Chart Area Settings*/
                            chartArea: {
                                fill: ['#F50000', '#FD0000', 90],
                                opacity: 100,
                                shadow: false,
                            },
                            defaultSeries_type: 'column',
                            yAxis: {
                                defaultTick_enabled: false,
                                scale_range_padding: 0.15,
                                scale: { range: [0, 120] }
                            },
                            legend_visible: false,
                            toolbar_visible: false,
                            series: [{
                                color: "rgb(248, 43, 156)",
                                defaultPoint: {
                                    marker: {
                                        visible: true,
                                        size: 40,
                                        outline_width: 0
                                    },
                                    label: { text: '%value' }
                                },

                                points: [{
                                    name: 'Danceability',
                                    y: parseInt(danceLevel),
                                }]
                            }]
                        });

                        //Graph 2 - Valence Level
                        if (valenceSum > .5) {
                            var valType = "Positivity";
                        } else {
                            var valType = "Negativity"
                        };

                        var chart = JSC.chart('chartDiv2', {
                            debug: true,
                            defaultSeries_type: 'column',
                            yAxis: {
                                defaultTick_enabled: false,
                                scale_range_padding: 0.15,
                                scale: { range: [0, 120] }
                            },
                            legend_visible: false,
                            toolbar_visible: false,
                            series: [{
                                color: 'turquoise',
                                defaultPoint: {
                                    marker: {
                                        visible: true,
                                        size: 40,
                                        outline_width: 0
                                    },
                                    label: { text: '%value' }
                                },

                                points: [{
                                    name: valType,
                                    y: parseInt(valLevel),
                                }]
                            }]
                        });

                        //Graph 3 - Energy Level
                        var chart = JSC.chart('chartDiv3', {
                            debug: true,
                            defaultSeries_type: 'column',
                            yAxis: {
                                defaultTick_enabled: false,
                                scale_range_padding: 0.15,
                                scale: { range: [0, 120] }
                            },
                            legend_visible: false,
                            toolbar_visible: false,
                            series: [{
                                color: 'turquoise',
                                defaultPoint: {
                                    marker: {
                                        visible: true,
                                        size: 40,
                                        outline_width: 0
                                    },
                                    label: { text: '%value' }
                                },

                                points: [{
                                    name: 'Energy',
                                    y: parseInt(energyLevel),
                                }]
                            }]
                        });

                        //Graph 4 - Loudness Level
                        var chart = JSC.chart('chartDiv4', {
                            debug: true,
                            defaultSeries_type: 'column',
                            yAxis: {
                                defaultTick_enabled: false,
                                scale_range_padding: 0.15,
                                scale: { range: [0, 120] }
                            },
                            legend_visible: false,
                            toolbar_visible: false,
                            series: [{
                                color: 'turquoise',
                                defaultPoint: {
                                    marker: {
                                        visible: true,
                                        size: 40,
                                        outline_width: 0
                                    },
                                    label: { text: '%value' }
                                },

                                points: [{
                                    name: 'Loudness',
                                    y: parseInt(loudnessLevel),
                                }]
                            }]
                        });

                        //Graph 5 - Tempo Level
                        var chart = JSC.chart('chartDiv5', {
                            debug: true,
                            defaultSeries_type: 'column',
                            yAxis: {
                                defaultTick_enabled: false,
                                scale_range_padding: 0.15,
                                scale: { range: [0, 200] }
                            },
                            legend_visible: false,
                            toolbar_visible: false,
                            series: [{
                                color: 'turquoise',
                                defaultPoint: {
                                    marker: {
                                        visible: true,
                                        size: 40,
                                        outline_width: 0
                                    },
                                    label: { text: '%value' }
                                },

                                points: [{
                                    name: 'Tempo',
                                    y: parseInt(tempoLevel),
                                }]
                            }]
                        });

                        //Graph 6 - Instrumentalness
                        var chart = JSC.chart('chartDiv6', {
                            debug: true,
                            defaultSeries_type: 'column',
                            yAxis: {
                                defaultTick_enabled: false,
                                scale_range_padding: 0.15,
                                scale: { range: [0, 100] }
                            },
                            legend_visible: false,
                            toolbar_visible: false,
                            series: [{
                                color: 'turquoise',
                                defaultPoint: {
                                    marker: {
                                        visible: true,
                                        size: 40,
                                        outline_width: 0
                                    },
                                    label: { text: '%value' }
                                },

                                points: [{
                                    name: 'Instrumentalness',
                                    y: parseInt(instrumentalnessLevel),
                                }]
                            }]
                        });
                    };
                };

                //Need to delay the averages or else it tries to run them with empty arrays
                timeDelay();

            })

        });
    })

});