$(document).ready(function() {

    var artistArray = [{
            name: "Bodily Ruin",
            genre: "metal",
            bio: "'Death, at its finest, blossoms in a place that's cold and dark, where a candle offers grace.'  Bodily Ruin is a brutal death metal band from North Hollywood, that putts on a spectacle every night they play with lit candles to set the ambiance and ear-piercing death whistles to give you goosebumps while you mosh.",
        },
        {
            name: "Vexxum",
            genre: "metal",
            bio: "Death/Thrash metal band from West Conva, CA.  With heavy chugged riffs and duo guitar harmonies and guitar solos backed by crips, heavy and hard hitting bass and insane drums, Vexxum is bound to bang your head and start the pit.  Vexxum placed first in the opening round of the 2020 Wacken Metal Battle USA Battle of the Bands.",
        },
        {
            name: "Triangle Fire",
            genre: "rock",
            bio: "Triangle Fire is an Alternative Rock and Roll band based in East Los Angeles, comprised of singer-songwriter Robert Abalos and multi-instrumentalists Ian Rosales, Salvador Trejo Jr., and Emilio Moyao.  Their debut record 'Everything Works' is a manifestation of human perseverance through trials of loneliness, failure, and mental illness, holding an optimism that hope can survive beyond the valley of death.  It's fun stuff yo."
        },
        {
            name: "The Absurd",
            genre: "rock",
            bio: "The Absurd is a true power trio, firing off catchy hooks and thunderous riffs with equal potency.  Originating from Detroit, now based in Los Angeles, the band is known for their explosive live show.  They've 'melted the paint off the walls at just about every club' they've played, and have been featured on stages ranging from Music Festivals to Gay Pride to underground art galleries.  Their debut LP was released in 2018, meriting inclusion in multiple end-of-year lists.  Their second album, 'The Sun Still Rises' dropped November 2nd, 2020.  'A conflagration of heavy psychedelia that sees Foerg caterwauling over the daunting muscle-flexing of his rhythm section.'"
        },
        {
            name: "Stackztootrill",
            genre: "rap",
            bio: "3600 boss Stackztootrill is a Los Angeles, CA based artist who has been making waves & setting trends in hip hop from his very first song (Juice).  One of the most versatile artists to hail from California you never know what exactly to expect from a Stackztootrill track which keeps his fans coming back time and again.  Whether it's a banging track like Wave or a crooner love story such as Slidin, All throughout giving his pains and turning it into light, (The Spark) on tracks."
        },
        {
            name: "QU/NTEN",
            genre: "rap",
            bio: "You may remember QU/NTEN from his bumping song “Route 66.” The young, then 18-year-old, artist impressed us with his mature sound that was melodic and full of summertime drive vibes. What was even more impressive was learning that not only was he creating a legit full body of work. But, that he was doing it all on his own being his producer, writer, and mixing and mastering his songs.  Now in 2020 QU/NTEN is stepping out with his new EP “Forever Slept On.” A 7 track 14-minute project gives a wider lens of which to view his music. Giving us some new new while still coming with that melodic and visceral experience that captivated us before."
        },
        {
            name: "Brittany Akee",
            genre: "pop",
            bio: "My name is Brittany Akee, and I'm from St. Louis, MO. I sing, dance, play the piano and write music for upcoming artist throughout Los Angeles including myself. I have had several opportunities to sing back up for great artist such as: Michael Bolton, Nelly and Andre Cymone just to name a few. My music has allowed me to sing with a group of singers for Cedric 'The Entertainer' The Steve Harvey 'Little Big Shots' Show, and Craig Ferguson, 'The Late Late Show.'"
        },
        {
            name: "Caleb Minter",
            genre: "pop",
            bio: "Independent artist Caleb Minter is no stranger to the 'Main Stream' music and entertainment industry. Caleb is a member of the legendary collective 'Sunday Service' formed and created by the ironic music genius Kanye West. He has graced the stage as the headline opener for Songstress Tweet in New York City, Anthony Hamilton & The Hamiltones, and Q Parker of rnb group 112. Rolling Out Magazine captured Caleb at his performance for the President of Ebony Magazine at the tribute to James Brown in Chicago, Illinois."
        },
        {
            name: "Jonathan Moody",
            genre: "country",
            bio: "Jonathan Moody has made his vocation, his avocation.As a singing songwriter,his music reflects hope, dreams and reality, in a world that offers nothing less. Moody believes that turning life’s experiences into song makes them last forever and whether good or not, both can be celebratedthrough music. He embraces his audience in lyrics and melodies, knowing that once we discover ourselves, the world is ours…but we sometimes need a bit of help getting there.A genuine love of people makes him feel that sharing musical moments turns strangers into friends; while disconnecting from the norm reveals whom we really are. Moody has a passion for songwriting, but truly shines on stage."
        },
        {
            name: "Patty Booker",
            genre: "country",
            bio: "With her fierce passion and vocal ability, Patty Booker represents a throwback to artists like Loretta Lynn and Brenda Lee. In other words, this honky tonker is the real deal. In 1992, she had a track on the compilation A Town South of Bakersfield Volume 3 alongside the likes of Dale Watson. However, it wasn't until 1999 as a grandmother in her mid-'40s that she would self-release her full-length LP, I Don't Need All That."
        },
        {
            name: "Conc3ept",
            genre: "hip-hip",
            bio: "There are many ways to describe Conc3ept, but unique, talented, and charismatic just seem to scratch the surface. However, there is one word that ties him all together and is true to his character: Conc3ept is Real. Few people compose and infuse emotions and real passion in their music, real emotions coming from the heart and soul. Conc3ept does so in just the right way, combining art, story, and sound in perfect unison, to create unique songs. Take a look around the site, and explore what the gift of music truly is."
        },
        {
            name: "MaLe Dane",
            genre: "hip-hop",
            bio: "Zsa Zsa Perkins, known as MaLe Dane/Black MaLe has recorded 2 albums : Live Fast, Die Pretty (2017) & Risky Business (2018). In addition, Dane has acted in TV Series such as HBO's Insecure (2018) & Westworld (2018). Dane signed to Money Bags Entertainment, early on as the artist formerly known as Cybil (2000). MaLe Dane's style compliments her music with an exotic, colorful & glamorous image true to her roots."
        }
    ];





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
        var artistName = "arschspire";
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