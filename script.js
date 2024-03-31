// Get all the song elements
var songs = document.querySelectorAll('.welcome-tracks .song');

// Get the audio player and image element in the bottom bar
var player = document.querySelector('.bottombar audio');
var playerImage = document.querySelector('.bottombar img');

// Function to play a song
function playSong(e) {
    // Get the song source and image from the clicked element
    var songSource = e.target.getAttribute('data-song-source');
    var songImage = e.target.getAttribute('data-song-image');

    // Set the player source and image
    player.src = songSource;
    playerImage.src = songImage;

    // Play the song
    player.play();
}

// Add the event listener to each song
for (var i = 0; i < songs.length; i++) {
    songs[i].addEventListener('click', playSong);
}

// Get the replay button
var replayButton = document.querySelector('.bottombar .replay');

// Function to replay the song
function replaySong() {
    player.currentTime = 0;
    player.play();
}

// Add the event listener to the replay button
replayButton.addEventListener('click', replaySong);