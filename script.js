var artistArray = [{
    name: "Bodily Ruin",
      genre: "METAL",
      bio: "'Death, at its finest, blossoms in a place that's cold and dark, where a candle offers grace.'  Bodily Ruin is a brutal death metal band from North Hollywood, that putts on a spectacle every night they play with lit candles to set the ambiance and ear-piercing death whistles to give you goosebumps while you mosh.",
  },
  {
      name: "Vexxum",
      genre: "METAL",
      bio: "Death/Thrash metal band from West Conva, CA.  With heavy chugged riffs and duo guitar harmonies and guitar solos backed by crips, heavy and hard hitting bass and insane drums, Vexxum is bound to bang your head and start the pit.  Vexxum placed first in the opening round of the 2020 Wacken Metal Battle USA Battle of the Bands.",
  },
  {
      name: "Triangle Fire",
      genre: "ROCK",
      bio: "Triangle Fire is an Alternative Rock and Roll band based in East Los Angeles, comprised of singer-songwriter Robert Abalos and multi-instrumentalists Ian Rosales, Salvador Trejo Jr., and Emilio Moyao.  Their debut record 'Everything Works' is a manifestation of human perseverance through trials of loneliness, failure, and mental illness, holding an optimism that hope can survive beyond the valley of death.  It's fun stuff yo."
  },
  {
      name: "The Absurd",
      genre: "ROCK",
      bio: "The Absurd is a true power trio, firing off catchy hooks and thunderous riffs with equal potency.  Originating from Detroit, now based in Los Angeles, the band is known for their explosive live show.  They've 'melted the paint off the walls at just about every club' they've played, and have been featured on stages ranging from Music Festivals to Gay Pride to underground art galleries.  Their debut LP was released in 2018, meriting inclusion in multiple end-of-year lists.  Their second album, 'The Sun Still Rises' dropped November 2nd, 2020.  'A conflagration of heavy psychedelia that sees Foerg caterwauling over the daunting muscle-flexing of his rhythm section.'"
  },
  {
      name: "Stackztootrill",
      genre: "RAP",
      bio: "3600 boss Stackztootrill is a Los Angeles, CA based artist who has been making waves & setting trends in hip hop from his very first song (Juice).  One of the most versatile artists to hail from California you never know what exactly to expect from a Stackztootrill track which keeps his fans coming back time and again.  Whether it's a banging track like Wave or a crooner love story such as Slidin, All throughout giving his pains and turning it into light, (The Spark) on tracks."
  },
  {
      name: "QU/NTEN",
      genre: "RAP",
      bio: "You may remember QU/NTEN from his bumping song “Route 66.” The young, then 18-year-old, artist impressed us with his mature sound that was melodic and full of summertime drive vibes. What was even more impressive was learning that not only was he creating a legit full body of work. But, that he was doing it all on his own being his producer, writer, and mixing and mastering his songs.  Now in 2020 QU/NTEN is stepping out with his new EP “Forever Slept On.” A 7 track 14-minute project gives a wider lens of which to view his music. Giving us some new new while still coming with that melodic and visceral experience that captivated us before."
  },
  {
      name: "Brittany Akee",
      genre: "POP",
      bio: "My name is Brittany Akee, and I'm from St. Louis, MO. I sing, dance, play the piano and write music for upcoming artist throughout Los Angeles including myself. I have had several opportunities to sing back up for great artist such as: Michael Bolton, Nelly and Andre Cymone just to name a few. My music has allowed me to sing with a group of singers for Cedric 'The Entertainer' The Steve Harvey 'Little Big Shots' Show, and Craig Ferguson, 'The Late Late Show.'"
  },
  {
      name: "Caleb Minter",
      genre: "POP",
      bio: "Independent artist Caleb Minter is no stranger to the 'Main Stream' music and entertainment industry. Caleb is a member of the legendary collective 'Sunday Service' formed and created by the ironic music genius Kanye West. He has graced the stage as the headline opener for Songstress Tweet in New York City, Anthony Hamilton & The Hamiltones, and Q Parker of rnb group 112. Rolling Out Magazine captured Caleb at his performance for the President of Ebony Magazine at the tribute to James Brown in Chicago, Illinois."
  },
  {
      name: "Jonathan Moody",
      genre: "COUNTRY",
      bio: "Jonathan Moody has made his vocation, his avocation.As a singing songwriter,his music reflects hope, dreams and reality, in a world that offers nothing less. Moody believes that turning life’s experiences into song makes them last forever and whether good or not, both can be celebratedthrough music. He embraces his audience in lyrics and melodies, knowing that once we discover ourselves, the world is ours…but we sometimes need a bit of help getting there.A genuine love of people makes him feel that sharing musical moments turns strangers into friends; while disconnecting from the norm reveals whom we really are. Moody has a passion for songwriting, but truly shines on stage."
  },
  {
      name: "Patty Booker",
      genre: "COUNTRY",
      bio: "With her fierce passion and vocal ability, Patty Booker represents a throwback to artists like Loretta Lynn and Brenda Lee. In other words, this honky tonker is the real deal. In 1992, she had a track on the compilation A Town South of Bakersfield Volume 3 alongside the likes of Dale Watson. However, it wasn't until 1999 as a grandmother in her mid-'40s that she would self-release her full-length LP, I Don't Need All That."
  },
  {
      name: "Conc3ept",
      genre: "HIP-HOP",
      bio: "There are many ways to describe Conc3ept, but unique, talented, and charismatic just seem to scratch the surface. However, there is one word that ties him all together and is true to his character: Conc3ept is Real. Few people compose and infuse emotions and real passion in their music, real emotions coming from the heart and soul. Conc3ept does so in just the right way, combining art, story, and sound in perfect unison, to create unique songs. Take a look around the site, and explore what the gift of music truly is."
  },
  {
      name: "MaLe Dane",
      genre: "HIP-HOP",
      bio: "Zsa Zsa Perkins, known as MaLe Dane/Black MaLe has recorded 2 albums : Live Fast, Die Pretty (2017) & Risky Business (2018). In addition, Dane has acted in TV Series such as HBO's Insecure (2018) & Westworld (2018). Dane signed to Money Bags Entertainment, early on as the artist formerly known as Cybil (2000). MaLe Dane's style compliments her music with an exotic, colorful & glamorous image true to her roots."
  }];

var selected = [];

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
        var artistName = selected[i];
        var element = $("<h3>");
        element.addClass("artist-select");
        element.text(artistName);
        $("#search-modal").append(element);
    }
    $("#search-modal").css("display", "block");
})