const videoPlayer = document.getElementById('videoPlayer');
const videoList = document.getElementById('videoList').getElementsByTagName('a');
let currentVideoIndex = 0;

function playVideo(index) {
  currentVideoIndex = index;
  videoPlayer.src = `video${index + 1}.mp4`;
  videoPlayer.load();
  videoPlayer.play();
}

function playNext() {
  currentVideoIndex++;
  if (currentVideoIndex < videoList.length) {
    playVideo(currentVideoIndex);
  }
}