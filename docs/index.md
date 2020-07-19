<img src="/static/logo.svg" width="50%">

<div class="menu">
  <a class="button" href="./events/list"><span>Events</span></a>
  <a class="button" href="./attend/firsttime"><span>Attend</span></a>
  <a class="button" href="./organise/before/gettingstarted"><span>Organise</span></a>
  <a class="button" href="./sponsor"><span>Sponsor</span></a>
  <a class="button" href="./volunteer"><span>Volunteer</span></a>
  <a class="button" href="./discord"><span>Chat</span></a>
</div>

## About

This is a Wiki for the UK Hackathon scene! Primarily focused on the various
Student Hackathons ran at all the various Universities around the country.

Here you can find information on what to expect when attending, event information
and help with organising your own hackathon!

We also have a Discord server, whether you're an experienced organiser or want
to attend your first hackathon or something inbetween join us [here](https://hack.athon.uk/discord).

## Contribute

You can find the Git Repository [here](https://github.com/Hackathons-UK/wiki).
Feel free to send Pull Requests to update the content!

# Upcoming Events
This list showcases upcoming UK student-run hackathons and hackathon-associated events.
Want to add something to this list? [Fork and pull request](https://github.com/Hackathons-UK/wiki/edit/master/docs/index.md) to add your event!

{% for season in extra.hackathon_seasons %}

{% if season.name == 'Autumn 2020' or season.name == 'Summer 2020'%}

## {{season.name}}

<div class="hack-list">
    
    {% for hackathon in season.hackathons %}

        {% set background = extra.cal %}
        {% if hackathon.background is defined %}
            {% set background = hackathon.background %}
        {% endif %}

        {% set logo = extra.cal %}
        {% if hackathon.logo is defined %}
            {% set logo = hackathon.logo %}
        {% endif %}

        <a href="{{ hackathon.website }}">
            <div class="card">
                <div class="header">
                    <div class="backdrop" style="background-image: url('{{ background }}'")></div>
                    <img class="icon" src="{{ logo }}" alt="{{ hackathon.location }}">
                </div>
                <dl class="hack-details">
                    <dt class="name">Hackathon</dt>
                    <dd class="name">{{ hackathon.name }}</dd>
                    
                    <dt class="location">Location</dt>
                    <dd class="location">{{ hackathon.location }}</dd>
                    
                    <dt class="date">Date</dt>
                    <dd class="date">{{ hackathon.when }}</dd>
                </dl>
            </div>
        </a>

    {% endfor %}

</div>

{% endif %}

{% endfor %}


# Past Events
This list has been moved to [here](events/list)
