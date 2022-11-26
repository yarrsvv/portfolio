const finder = (key, element) => {
  return element.dataset.key == key;
};

const playSound = (audio, block) => {
  audio.play();
  block.classList.add("playing");
  setTimeout(() => {
    audio.pause();
    audio.currentTime = 0;
    block.classList.remove("playing");
  }, 100);
};

const audios = [...document.querySelectorAll("audio")];
const keysBlocks = [...document.querySelectorAll(".key")];

console.log(keysBlocks);
window.addEventListener("keydown", (event) => {
  const { keyCode } = event;
  // const finderWithKey = finder.bind(null, keyCode);
  // const currentAudio = audios.find(finderWithKey);
  // const currentBlock = keysBlocks.find(finderWithKey);
	const currentAudio = audios.filter((element) => element.dataset.key == keyCode)[0];
	const currentBlock = keysBlocks.filter((element) => element.dataset.key == keyCode)[0];
  currentAudio && playSound(currentAudio, currentBlock);
});
