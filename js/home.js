anime({
  targets: '.signature path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  delay: function (el, i) { return i * 150 },
  loop: false
});

anime.timeline({
  easing: 'easeInOutSine',
  duration: 5000,
  loop: false,
})
.add({ targets: '.signature path', fill: '#000000' }, 0)

anime({
  targets: '#profile-pic',
  translateX: 100,
  opacity: 1,
  duration: 3000
});
