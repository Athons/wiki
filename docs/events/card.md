

{% set background = extra.placeholder_hackathon_background %}
{% if hackathon.background is defined %}
    {% set background = hackathon.background %}
{% endif %}

{% set logo = extra.placeholder_hackathon_icon %}
{% if hackathon.logo is defined %}
    {% set logo = hackathon.logo %}
{% endif %}

<a href="{{ hackathon.website }}">
    <div class="card">
        <div class="header">
            <div class="backdrop" style="background-image: url('{{ background }}'")></div>
        </div>
        <img class="icon" src="{{ logo }}" alt="{{ hackathon.name }}">
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