---
layout: default
page_css:
- "/assets/css/custom/programming.css"
---

<div id="programming" class="row">
	{% for data in site.data.programming %}
		<div class="info-card">
			<div class="title">{{ data.title }}</div>
			<div class="description">{{ data.description }}</div>
			<div class="media">
				{% if data.image %}
					<img src="{{ data.image }}"/>
				{% endif %}
				{% if data.video %}
					<iframe
						title="video"
						src="{{ data.video }}"
						frameborder="0"
						allowfullscreen="allowfullscreen">
					</iframe>
				{% endif %}
			</div>
			<div class="bottom">
				{% if data.product %}
					<a class="btn" href="{{ data.product }}">Visit</a>
				{% endif %}
				{% if data.repository %}
					<a class="btn" href="{{ data.repository }}">GitHub</a>
				{% endif %}
			</div>
		</div>
	{% endfor %}
</div>
