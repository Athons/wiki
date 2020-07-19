# Upcoming Events
This list showcases upcoming UK student-run hackathons and hackathon-associated events.

Want to add something to this list? [Fork and pull request](https://github.com/Hackathons-UK/wiki/edit/master/mkdocs.yml) to add your event! You can find the hackathons inside <code>hackathon_seasons:</code>

{% for season in extra.hackathon_seasons %}

{% if season.past == False %}

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


### Spring 2019

|Hackathon        |Website| University         |No. of Hackers|Date|
|-----------------|-------|--------------------|--------------|----|
| HackMed   | [hackmed.uk](http://hackmed.uk/) | University of Sheffield | 100 | 30th-31st March 2019 |
| CovHack 19   | [covhack.org](https://covhack.org) | Coventry University | 110 | 16th-17th March 2019 |
| Hack the Burgh V | [hacktheburgh.com](https://2019.hacktheburgh.com) | University of Edinburgh | 200 | 16th-17th March 2019 |
| R. U. Hacking? 2019   | [ruhacking.me](https://ruhacking.me) | University of Reading | 150 | 16th-17th February 2019 |
| HackSurrey Mk2 | [mk2.hacksurrey.uk](https://mk2.hacksurrey.uk) | University of Surrey | 150 | 9th-10th February 2019 |
| Hack The South | [hackthesouth.co.uk](https://hackthesouth.co.uk/) | University of Southampton | 150 | 9th-10th February 2019 |
| Royal Hackaway v2 | [royalhackaway.com/hackaway2019](https://royalhackaway.com/hackaway2019) | Royal Holloway | 150 | 2nd-3rd February 2019 |
| IC Hack 19 | [ichack.org](https://ichack.org) | Imperial College London | 400 | 26th-27th January 2019 |
| ManMetHacks | [manmethacks.com](https://manmethacks.com) | Manchester Metropolitan University | 150 | 26th-27th January 2019 |
| Hack Cambridge 4D | [hackcambridge.com](https://hackcambridge.com) | University of Cambridge | 300 | 19th-20th January 2019 |

### Autumn 2018

|Hackathon        |Website| University         |No. of Hackers|Date|
|-----------------|-------|--------------------|--------------|----|
| HackKings v5.0 | [hackkings.org](https://hackkings.org) | King's College London | 200 | 8th-9th December 2018 |
| HackNotts 2018  | [hacknotts.com](https://www.hacknotts.com)  | University of Nottingham  | 150 | 25th-26th November 2018 |
| OxfordHack | [oxfordhack.uk](http://www.oxfordhack.uk/) | University of Oxford | 300 | 25th-26th November 2018 |
| DurHack 2018   | [durhack.com](https://durhack.com) | Durham University | 150 | 17th-18th November 2018 |
| Porticode 3.0 | [porticode.org](https://www.porticode.org/) | University College London | ?? | 17th-18th November 2018 |
| ExImpact | [exeterentrepreneurs.com/eximpact](http://exeterentrepreneurs.com/eximpact/) | University of Exeter | ?? | 16th-18th November 2018 |
| GreatUniHack 2018 | [greatunihack.com](https://greatunihack.com/) | University of Manchester | 200 | 10th-11th November 2018 |
| HackSussex 2018 | [hacksussex.com](https://hacksussex.com/) | University of Sussex | 150 | 10th-11th November 2018 |
| AstonHack | [astonhack.co.uk](https://astonhack.co.uk/) | Aston University, Birmingham | 150 | 10th-11th November 2018 |
| HackTheMidlands 3.0 | [hackthemidlands.com](https://Hackthemidlands.com/) | Millennium Point, Curzon St, Birmingham B4 7XG | 200 | 3rd-4th November 2018 |
| hackSheffield 4 | [hacksheffield.co](https://hacksheffield.co/) | University of Sheffield | 200 | 27th-28th October 2018 |
| Leeds Hackathon | [hackathon.leeds.ac.uk](https://hackathon.leeds.ac.uk/) | University of Leeds | ?? | 26th-28th October 2018 |
| Do You Have The GUTS? | [gutechsoc.com/hackathon](https://gutechsoc.com/hackathon) | University of Glasgow | ?? | 12th-14th October 2018 |

### Spring 2018

|Hackathon        |Website| University         |No. of Hackers|Date|
|-----------------|-------|--------------------|--------------|----|
| HackSurrey Beta | [beta.hacksurrey.uk](https://beta.hacksurrey.uk/) | University of Surrey | 100 | 5th-6th May 2018 |
| StudentHack VI | N/A | Manchester | 150 | 28th-29th April 2018 |
| Music Hack Day London 2018 | [goldsmiths.tech/music](https://goldsmiths.tech/music/) | Goldsmiths, University of London | 100 | 9th-10th April 2018 |
| STACSHack | N/A | St Andrews, UK | 130 | 7th-8th April 2018 | 
| HackKent | [kentcomputingsociety.co.uk/hackkent](https://kentcomputingsociety.co.uk/hackkent) | University of Kent | N/A | 13th-14th March |
| HackMed | [hackmed.uk](https://hackmed.uk) | University of Sheffield | 80 | 10th-11th March |
| Hack the Burgh 2018 | [hacktheburgh.com](https://2018.hacktheburgh.com) |  University of Edinburgh | 150 | 10th-11th March 2018 |
| BullHacks | N/A | Birmingham City University | 100 | 3rd-4th March 2018 |
| Anvil Hack IV | [goldsmiths.tech/anvil](https://goldsmiths.tech/anvil) | Goldsmiths, University of London | 120 | 24th-25th February 2018 | 
| HackCity 2018 | N/A | City, University of London | 100 | 17th-18th February 2018 |
| IC Hack 18 | [ichack.org](https://ichack.org) | Imperial College London | 250 | 27th-28th January 2018 |
| ExHack | [exeterentrepreneurs.com/exhack](http://exeterentrepreneurs.com/exhack/) | University of Exeter | ?? | 26th-28th January 2018 |
| Global Game Jam @ Goldsmiths | N/A | Goldsmiths, University of London | 100 | 26th-27th January 2018 |
| Hack Cambridge Ternary | [hackcambridge.com](https://hackcambridge.com/) | University of Cambridge | 300 | 20th-21st January 2018 |
| Royal Hackaway | [royalhackaway.xyz](https://royalhackaway.xyz/) | Royal Holloway, University of London | ?? | 13th-14th January 2018 |

### Autumn 2017

|Hackathon        |Website| University         |No. of Hackers|Date|
|-----------------|-------|--------------------|--------------|----|
| DurHack 2017 | [durhack.com](http://durhack.com) | Durham University | 100 | 9th-10th December 2017 |
| Sex Tech Hack II | [sexhack.tech](https://sexhack.tech) | Goldsmiths, University of London | 100 | 25th-26th November 2017 | 
| HackKings 4.0 | [hackkings.org](https://hackkings.org) | King's College London | 200 | 25th-26th November 2017 |
| OxfordHack 2017 | [oxfordhack.com](http://oxfordhack.com/) | University of Oxford | 200? | 25th-26th November 2017 |
| Hatch UCL | N/A | University College London | 100 | 25th-26th November 2017 |
| BrumHack 7.0 | [brumhack.co.uk](https://www.brumhack.co.uk) | University of Birmingham | ?? | 18th-19th November 2017 |
| HackSussex | [hacksussex.com](https://hacksussex.com/) | University of Sussex | 150 | 11th-12th November 2017 |
| AstonHack | [astonhack.co.uk](https://astonhack.co.uk/) | Aston University, Birmingham | 150 | 11th-12th November 2017 |
| GreatUniHack 2017 | [greatunihack.com](https://greatunihack.com/) | University of Manchester | 200 | 11th-12th November 2017 |
| HackNotts 2017  | [hacknotts.com](https://www.hacknotts.com)  | University of Nottingham  | 150 | 28th-29th October 2017 |
| Porticode 2.0 | [porticode.io](https://porticode.io/) | University College London | ?? | 28th-29th October 2017 |
| Do You Have The Guts | [gutechsoc.com/hackathon](https://gutechsoc.com/hackathon) | University of Glasgow | ?? | 27th-29th October 2017 |
| hackSheffield 3 | [hacksheffield.co](https://hacksheffield.co/) | University of Sheffield | 200 | 14th-15th October 2017 |
| HackTheMidlands 2.0 | [hackthemidlands.com](https://hackthemidlands.com/) | Millennium Point, Birmingham | 150 | 23rd-24th September 2017 |



