{% if hackathon is defined and hackathon.past is not true %}

    {% set background = extra.placeholder_hackathon_background %}
    {% if hackathon.background is defined %}
        {% set background = hackathon.background %}
    {% endif %}

    <a href="{{ hackathon.website }}">
        <div class="card">
            <div class="header">
                <div class="backdrop" style="background-image: url('{{ background }}'")></div>
            </div>
            {% if hackathon.logo is defined %}
            <img class="icon" src="{{ hackathon.logo }}" alt="{{ hackathon.name }}">
            {% endif %}
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
                        {% if hackathon.digital is defined and hackathon.digital == true %}
                            <li><i class="fas fa-laptop-code"></i> Digital</li>
                        {% endif %}
                        {% if hackathon.u_18_only is defined and hackathon.u_18_only == true %}
                            <li><i class="fas fa-book-reader"></i> U18 Only</li>
                        {% endif %}
                        {% if hackathon.all_ages is defined and hackathon.all_ages == true %}
                            <li><i class="fas fa-users"></i> All Ages </li>
                        {% endif %}
                    </ul>
                </dd>
            </dl>
        </div>
    </a>

{% endif %}
