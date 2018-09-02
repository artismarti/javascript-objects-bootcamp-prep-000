var playlist = {
  artist: "Beatles",
  songTitle: "All you need is love"
}
function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign({}, playlist, 
  {
    [artistName]:songTitle
    })
}
function removeFromPlaylist(playlist, artist) {
  delete playlist.artist
  return playlist
}