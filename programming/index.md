---
title: Software Projects
layout: default
page_css:
- "/assets/css/custom/programming.css"
---

<div id="programming" class="row">
	{% for data in site.data.programming %}
		{% include card.html data=data %}
	{% endfor %}
</div>
