# Upcoming Events
This list showcases upcoming UK student-run hackathons and hackathon-associated events.

Want to add something to this list? [Fork and pull request](https://github.com/Hackathons-UK/wiki/edit/master/mkdocs.yml) to add your event! You can find the hackathons inside <code>hackathon_seasons:</code>

{% for season in extra.hackathon_seasons %}

{% if season.past == False %}

## {{season.name}}

<div class="hack-list">
    
    {% for hackathon in season.hackathons %}

        {% set background = extra.placeholder_hackathon_background %}
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
                </div>
                <img class="icon" src="{{ logo }}" alt="{{ hackathon.location }}">
                <dl class="hack-details">
                    <dt class="name">Hackathon</dt>
                    <dd class="name">{{ hackathon.name }}</dd>
                    
                    <dt class="location">Location</dt>
                    <dd class="location">{{ hackathon.location }}</dd>
                    
                    <dt class="date">Date</dt>
                    <dd class="date">{{ hackathon.when }}</dd>
                    
                    <dt class="additional-information">Additional Information</dt>
                    <dd class="additional-information">
                        <ul>
                            <!--<li><i class="fas fa-laptop-code"></i> Digital</li>-->
                        </ul>
                    </dd>
                </dl>
            </div>
        </a>

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
                </div>
                <img class="icon" src="{{ logo }}" alt="{{ hackathon.location }}">
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