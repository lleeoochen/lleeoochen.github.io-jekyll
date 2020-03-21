---
layout: default
title: Home
page_css:
- "/assets/css/custom/home.css"
---

<div class="container-main">
	<h1 class="header"> Welcome to My Website. </h1>
	<div id="whale-btn" class="btn" onclick="toggleWhale()"> Dive In </div>
	<div id="whale-wrap">
		<img id="whale" src="/assets/images/whale.png" width="500" style="margin-top: 50px;"/>
	</div>
</div>

<script>
var whale_present = false;

function toggleWhale() {
	if (whale_present) {
		$('#whale').addClass('diveout');
		$('#whale').removeClass('divein');
		$('#whale-btn').text('Dive In');
		setTimeout(() => {
			$('#whale').removeClass('diveout');
		}, 1500);
	}
	else {
		$('#whale').addClass('divein');
		$('#whale').removeClass('diveout');
		$('#whale-btn').text('Dive Out');
	}

	whale_present = !whale_present;
}
</script>