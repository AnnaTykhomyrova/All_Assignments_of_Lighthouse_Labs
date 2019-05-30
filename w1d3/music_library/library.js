var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

 var printPlaylists = function () {


  for (var playListKey in library.playlists) {
    var playlistObject = library.playlists[playListKey]; // everything inside p01, p02

    var lengthOfTrack = playlistObject.tracks.length;

    var nameOfPlaylist = playlistObject.name;

    var output = `${playListKey}: ${nameOfPlaylist} - ${lengthOfTrack} tracks`;

    console.log(output);
  }
 };

 //printPlaylists(library);

// prints a list of all tracks, in the form:
// st01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  for (var tracksKey in library.tracks) {
    var trackObject = library.tracks[tracksKey]; // everything inside t01, t02, t03

    var artistOfTrack = trackObject.artist;

    var nameOfTrack = trackObject.name;

    var albumOfTrack = trackObject.album;

    var output = `${tracksKey}: ${nameOfTrack} by ${artistOfTrack} (${albumOfTrack})`;

    console.log(output);
  }
};

//printTracks(library);

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
 //console.log(library.playlists[playlistId].id);
 var name = library.playlists[playlistId].name;
 var trackLength = library.playlists[playlistId].tracks.length;
 var output = `${playlistId}: ${name} - ${trackLength} tracks`;
 console.log(output);

 var listOfTracks = library.playlists[playlistId].tracks;
  for(i in listOfTracks){
    var trackId = listOfTracks[i];
    var track = library.tracks[trackId];
    var name = library.tracks[trackId].name;
    var artist = library.tracks[trackId].artist;
    var album = library.tracks[trackId].album;
    var output = `${trackId}: ${name} by ${artist} (${album})`;
    console.log(output);
  }

};
// printPlaylist('p01');

// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  return library.playlists[playlistId].tracks.push(trackId);
};

 // addTrackToPlaylist('t01', 'p02');
 // console.log(library.playlists);


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};


// adds a track to the library

var addTrack = function (name, artist, album) {

};


// adds a playlist to the library

var addPlaylist = function (name) {

};


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

};