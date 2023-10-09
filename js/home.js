const isPortraitMode = window.innerHeight > window.innerWidth;

anime(
	{
		targets: ".signature path",
		strokeDashoffset: [
			anime.setDashoffset,
			0
		],
		easing: "easeInOutSine",
		duration: 1000,
		delay: function (el, i) {
			return i * 150;
		},
		loop: false
	}
);

anime.timeline(
	{
		easing: "easeInOutSine",
		duration: 3000,
		loop: false
	}
).add(
	{
		targets: ".signature path",
		fill: "#ffffff",
		stroke: "#ffffff",
		filter: "drop-shadow(0px 3px 2px rgba(0, 0, 0, .7))",
	},
	0
);

anime(
	{
		targets: "#profile-pic",
		translateX: isPortraitMode ? 0 : 0,
		translateY: isPortraitMode ? 100 : 100,
		opacity: 1,
		duration: 1000
	}
);;
