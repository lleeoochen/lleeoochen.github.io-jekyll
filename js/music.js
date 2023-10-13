function onPlayClick(soundId) {
  $('.sound-platform').removeClass("show");
  $('.sound-platform.' + soundId).addClass("show");

  $('.sound-row').css("background-color", "unset");
  $('.sound-row.' + soundId).css("background-color", "#00e939");
  
  
  $('.sound-row img').attr("src", "/assets/icons/play-button.svg");
  $('.sound-row.' + soundId + " img").attr("src", "/assets/icons/pause-button.svg");
}

onPlayClick("elgar-cello")
