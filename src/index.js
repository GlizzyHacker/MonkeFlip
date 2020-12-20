var video = document.createElement("video");
video.width = "348";
video.height = "360";
video.onended = function () {
  location.reload();
};
var source = document.createElement("source");
source.src = "src/monke.mp4";
source.type = "video/mp4";
video.append(source);

var button = document.getElementById("b");
button.onclick = function () {
  var body = document.getElementById("body");
  body.append(video);
  video.play();
  button.remove();
};
