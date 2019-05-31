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
             },
  printPlaylists: function () {
      for (var playListKey in this.playlists) {
      var playlistObject = this.playlists[playListKey]; // everything inside p01, p02
      var lengthOfTrack = playlistObject.tracks.length;
      var nameOfPlaylist = playlistObject.name;
      var output = `${playListKey}: ${nameOfPlaylist} - ${lengthOfTrack} tracks`;
      console.log(output);
    }
  },
  printTracks: function () {
      for (var tracksKey in this.tracks) {
      var trackObject = this.tracks[tracksKey]; // everything inside t01, t02, t03
      var artistOfTrack = trackObject.artist;
      var nameOfTrack = trackObject.name;
      var albumOfTrack = trackObject.album;
      var output = `${tracksKey}: ${nameOfTrack} by ${artistOfTrack} (${albumOfTrack})`;
      console.log(output);
    }
  },
  printPlaylist: function (playlistId) {
    var name = this.playlists[playlistId].name;
    var trackLength = this.playlists[playlistId].tracks.length;
    var output = `${playlistId}: ${name} - ${trackLength} tracks`;
    console.log(output);
    var listOfTracks = this.playlists[playlistId].tracks;
    for(i in listOfTracks){
    var trackId = listOfTracks[i];
    var track = this.tracks[trackId];
    var name = this.tracks[trackId].name;
    var artist = this.tracks[trackId].artist;
    var album = this.tracks[trackId].album;
    var output = `${trackId}: ${name} by ${artist} (${album})`;
    console.log(output);
    }
  },
  addTrackToPlaylist: function (trackId, playlistId) {
    return this.playlists[playlistId].tracks.push(trackId);
    },
  addTrack: function (name, artist, album) {
    let myId = uid();
    this.tracks[myId] = { id: myId,
                            name: name,
                            artist: artist,
                            album: album
                          };
  },
  addPlaylist: function (name) {
    let myId = uid();
    this.playlists[myId] = { id: myId,
                                name: name,
                                tracks: []
                              };
  }
};

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};

library.printPlaylists();
console.log("**************************************************");


library.printTracks();
console.log("**************************************************");

library.printPlaylist('p01');


library.addTrackToPlaylist('t01', 'p02');


library.addTrack('some name', 'some artist', 'some album');


library.addPlaylist('some playlist');


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

};