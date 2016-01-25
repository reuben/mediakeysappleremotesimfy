let Player = window.unsafeWindow.document.getElementById("movie_player");

self.port.on("togglePlayback", function () {
  if (Player.getPlayerState() == 1) {
    Player.pauseVideo();
  } else {
    Player.playVideo();
  }
});

self.port.on("playNext", function () {
  Player.nextVideo();
});

self.port.on("playPrevious", function () {
  Player.previousVideo()
});
