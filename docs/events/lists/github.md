# TechSoc Githubs


| **URL** | **University** | **Name** | **Comments** | **Alive or More than just a webiste?** |
| --- | --- | --- | :--- | --- |{% for github in extra.githubs %}
| [{{github.url}}]({{github.url}}) | {{github.location}} | {{github.organisation}} | {{github.about}} | {{github.useful}} |{% endfor %}
