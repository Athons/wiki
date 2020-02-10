## Communication

In the immediate run up to, during and after the event, it's important to have a solid platform for communicating with your attendees, sponsors, volunteers, etc. Historically, the two main options have been [Discord](https://discordapp.com/) and [Slack](https://slack.com/).

If you're feeling adventurous, and are confident in your I.T. infrastructure and abilities to maintain it, [Rocket.Chat](https://rocket.chat/) is also an option that has been passed around in the past.

### [Discord](https://discordapp.com/)
Discord is a chat platform originally targeted at gamers. However, has recently seen an uptick in adoption by communities, especially on reddit, but recently also within tech and academic environments.
#### Pros
  * No account creation required (if already on platform)
  * Straightforward Permissions Model
  * No message limit
  * More reliable for pre/post-event communications
  * Easier to indicate mentors/organizers etc. using roles

#### Cons
  * No message threading
  * Limited customizable features e.g. emojis
  * Limitations with platform privacy e.g. mixing anonymous gamer communities with in-person hackathons

### [Slack](https://slack.com/)
Slack is chat platform designed for corporate and enterprise use, it's been adopted by thousands both tech and other-sector companies. And has also seen widespread adoption as the platform of choice for tech events.
#### Pros
  * Workspace specific DMs
  * Users can create channels
  * Message Threading
  * Unlimited custom emojis
  * Slackbot Keywords

#### Cons
  * 10,000 message limit
  * Requires new account per workspace
  * Limited permissions model
  * 10 Apps/Bots per workspace limit

**Note**: If using slack, make sure to disable public email and phone number listings within the workspace

## Web Hosting

Both [Netlify](https://www.netlify.com/) and [GitHub Pages](https://pages.github.com/) are great for static sites. This wiki is hosted on GitHub Pages and compiled with [GitHub Actions](https://github.com/features/actions).

For dynamic things, you could use [heroku](https://www.heroku.com/) which has a good free tier, it is also part of the [GitHub Student Developer Pack](https://www.heroku.com/github-students).

[Firebase](https://firebase.google.com) also works pretty well if you don't want to maintain any infrastructure, but can be limiting as it adopts a serverless model. It's also worth noting, Google's had a history of deprecating features on short notice for the Firebase platform.

If you need a fully fledged virtual machine, both [Google Cloud](https://cloud.google.com/free) and [Amazon Web Services](https://aws.amazon.com/free/) offer free tiers for [Compute Engine](https://cloud.google.com/compute) and [Elastic Compute Cloud (EC2)](https://aws.amazon.com/ec2/).

## Ticketing and Applications
There are generally two ways to manage sign-ups to your hackathon: tickets and applications.

For both options there are plenty of options for platforms, but here are some of the most common.

### Tickets
When picking a ticketing platform, it's important to factor in what you value most (e.g. customizability, ticket management, mailing list support etc.). The two most widely used platforms are [Tito](https://ti.to) and [Eventbrite](https://www.eventbrite.co.uk/). They're fairly comparable platforms, but they have some differences noted below.

#### [Eventbrite](https://www.eventbrite.co.uk/)
Eventbrite has been around for a long time, and operates as both an event discovery system and a ticketing platform. Some of its key advantages are built integrations with services like Mailchimp, the ability to search the platform for events, it also tends to have a better track record when dealing with high volume traffic, which is important if your batches tend to sell out in seconds.

#### [Tito](https://ti.to)
Tito hasn't been around as long, and has more of a startup/small operation feeling, but it tends to offer a load of features that organizers value. While tito doesn't natively integrate with mailing list services, it does have a fairly competent mailing list tool (which you have to request access to). But where it really shines is in customizability, a ticket page on tito is dedicated to your event, and you're able to set a custom domain, details data and gdpr policies, use custom styles etc.

It's worth noting, though, tito can be a bit awkward for some, such that an order is not a ticket, you need to assign one. Which means abandoned tickets can sometimes cause issues with total availability.


### Applications
There are loads of options for applications, below are some of the most common. If you want a dedicated platform, you'll have to self-host 99% of the time, but there are still plenty of ways to run effective applications without using one.

#### [Typeform](https://typeform.com)
Typeform isn't a platform for applications, it isn't really anything more than a really pretty and powerful web form maker. Many events have used Typeform for hackathon applications and registrations of the years. They also offer student discount pricing, and have been known to sponsor some hackathons in the past.

#### [Quill](https://github.com/techx/quill)
Quill is also incredibly common, and popular. It's built in JavaScript using express.js and angular.js, originally for HackMIT. Events all over the UK and Europe now use it for their application system as it's simple to setup and use, and fairly easy to customize.

#### [HackAssistant Registration](https://github.com/HackAssistant/registration)
HackAssistant has been tried and tested by some of the communities largest events, originally built for HackUPC and HackCU (in Barcelona, and Colorado). Unlike Quill it also provides tools for ranking applications. It's also easily customizable, and can be deployed to Heroku easily.

## Shortlinks/URL Shorteners
Using shortlinks is key to providing links to resources at various points during your event, especially when they're presented to attendees in a form that doesn't give them an immediate hyperlink (e.g. opening ceremony slides, over a PA, etc.).

Generally speaking their are two common approaches to providing shortlinks, using a url shortener (e.g. <u>_example.com/devpost_</u>) or using subdomains (e.g. <u>_devpost.example.com_</u>). Both approaches accomplish the same thing however require different types of configuration, DNS vs. running a web service.

### URL Shorteners
There are loads of options and approaches you can take for URL shortening. Primarily, using a service like [bit.ly](https://bit.ly), or hosting your own. The primary advantage of hosting your own over using a service is the ability to control the domain it runs on. However, as with hosting anything, there's a significantly higher risk of downtime as you're responsible for the infrastructure.

Two of the most popular free URL shorteners are [bit.ly](https://bit.ly) and [tinyurl](https://tinyurl.com). bit.ly also lets you customize your links and provides analytics.

Additionally, some paid options for URL shorteners that support custom domains are [bit.ly](https://bit.ly), [rebrandly](https://rebrandly.com), and [short.cm](https://short.cm). Please note, we do not explicitly endorse any of the listed services.

If you wish to host your own URL shortener a couple of options are (smtchahal/url-shortener)[https://github.com/smtchahal/url-shortener] which uses Django and can easily be deployed to [Heroku](https://elements.heroku.com/buttons/smtchahal/url-shortener), and [Polr](https://polrproject.org/) which is built in PHP and can easily be deployed using [Docker or Kubernetes](https://hub.docker.com/r/ajanvier/polr) or to a service like [Google Cloud Run](https://cloud.google.com/run).

Running your URL shortener on your root domain (e.g. example.com) and then your website on (www.example.com) and setting up requests to the root to redirect to the website by default can add an extra touch of professionalism to your event. As of January 2020, HackNotts runs Polr on [hacknotts.com](hacknotts.com) and defaults traffic to [www.hacknotts.com](https://www.hacknotts.com) which runs on GitHub pages.

### Subdomains
Many domain registrars such as [Gandi](https://gandi.net) and [Google Domains](https://domains.google) are able to offer subdomain redirecting for free provided you don't use custom nameservers.

It's worth noting, that unlike an HTTP redirect using a URL shortener, subdomain redirects will often have a delay while DNS servers propagate the new record. Additionally, if hackers enter the subdomain incorrectly, they're likely to just get shown a "server IP address could not be found." error in the browser.

## Info Hub

The Manchester CS society wrote a [hub](https://github.com/unicsmcr/hs_hub)
they use to track achievements and submissions at StudentHack and GreatUniHack.

## Signage

[LibreSignage](https://github.com/eerotal/LibreSignage) is a good open source
solution, but does need some patches to get it to do what you want. Works with
any web browser.

[info beamer](https://info-beamer.com/doc/info-beamer) is a powerful option
and free if you self host it. Used at large conferences like the CCC. Runs on
a Pi or whatever mini computer you have.

[Trumpet](https://hacksocnotts.github.io/trumpet/) is a signage system written
for HackNotts by [@MrJamesCo](https://twitter.com/MrJamesCo). 

## Navigation

If you are running a very large event with a huge venue, it might be worth
forking [c3nav](https://github.com/c3nav/c3nav).
