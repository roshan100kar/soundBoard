const sounds = [
  "Collision",
  "EvilLaugh",
  "jump",
  "week7-bounce",
  "week7-brrring",
  "week7-button",
];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopSongs();
    document.getElementById(sound).play();
  });

  document.getElementById("buttons").appendChild(btn);
});
function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}
