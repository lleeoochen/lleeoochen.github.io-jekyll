---
layout: default
page_css:
- "/assets/css/custom/recording.css"
---

<div id="recording" class="row">
	{% for data in site.data.recording %}
		<div class="info-card">
			<div class="title">{{ data.title }}</div>
			<div class="description">{{ data.description }}</div>
			<div class="media">
				{% if data.recording %}
					<iframe
						title="video"
						src="{{ data.recording }}"
						frameborder="0"
						allowfullscreen="allowfullscreen">
					</iframe>
				{% endif %}
			</div>
		</div>
	{% endfor %}
</div>
