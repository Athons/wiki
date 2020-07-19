---
template: overrides/home.html
---

{% for season in extra.hackathon_seasons %}

{% if season.past == False %}

## {{season.name}}

<div class="hack-list">
    
    {% for hackathon in season.hackathons %}

        {% include 'events/card.md' %}

    {% endfor %}

</div>

{% endif %}

{% endfor %}

Want to add something to this list? [Fork and pull request](https://github.com/Hackathons-UK/wiki/edit/master/mkdocs.yml) to add your event! You can find the hackathons inside `hackathon_seasons:`

# Past Events
This list has been moved to [here](events/list)
