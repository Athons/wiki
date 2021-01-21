# Upcoming Events
This list showcases upcoming UK student-run hackathons and hackathon-associated events.

Want to add something to this list? [Fork and pull request](https://github.com/athons/wiki/edit/master/events.yml) to add your event! You can find the hackathons inside `hackathon_seasons:`

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





## Past Events
This list showcases past UK student-run hackathons (most recent first).

{% for season in extra.hackathon_seasons %}

{% if season.past == True %}

## {{season.name}}

<div class="hack-list">
    
    {% for hackathon in season.hackathons %}

        {% include 'events/card.md' %}

    {% endfor %}

</div>

{% endif %}

{% endfor %}
