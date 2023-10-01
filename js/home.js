const isPortraitMode = window.innerHeight > window.innerWidth;

anime (
  {
    targets: ".signature path",
    strokeDashoffset: [
      anime.setDashoffset,
      0
    ],
    easing: "easeInOutSine",
    duration: 1000,
    delay: function (el, i)
    {
      return i * 150;
    },
    loop: false
  }
);

anime.timeline (
  {
    easing: "easeInOutSine",
    duration: 3000,
    loop: false
  }
).add (
  {
    targets: ".signature path",
    fill: "#ffffff"
  },
  0
);

anime (
  {
    targets: "#profile-pic",
    translateX: isPortraitMode ? 0 : 100,
    translateY: isPortraitMode ? 100 : 0,
    opacity: 1,
    duration: 3000,
    delay: 1500,
    maxWidth: isPortraitMode ? "100%" : "50%",
    maxHeight: isPortraitMode ? "30%" : "100%",
  }
);;