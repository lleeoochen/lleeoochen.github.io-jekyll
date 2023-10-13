function onBangerClick(bangerId) {
  $("#" + bangerId).css("opacity", "0");
  setTimeout(() => {
    $("#" + bangerId).css("display", "none");
  }, 2000);
}

function onPlayClick(soundId) {
  $('.sound-platform').removeClass("show");
  $('.sound-platform.' + soundId).addClass("show");

  $('.sound-row').css("background-color", "unset");
  $('.sound-row.' + soundId).css("background-color", "#f9cbf4");


  $('.sound-row img').attr("src", "/assets/icons/play-button.svg");
  $('.sound-row.' + soundId + " img").attr("src", "/assets/icons/pause-button.svg");
}

// onPlayClick("boys-a-liar")
