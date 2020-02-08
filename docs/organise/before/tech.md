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

## Web Hosting

Both [Netlify](https://www.netlify.com/) and [GitHub Pages](https://pages.github.com/) are great for static sites. This wiki is hosted on GitHub Pages and compiled with [GitHub Actions](https://github.com/features/actions).

For dynamic things, you could use [heroku](https://www.heroku.com/) which has a good free tier, it is also part of the [GitHub Student Developer Pack](https://www.heroku.com/github-students).

[Firebase](https://firebase.google.com) also works pretty well if you don't want to maintain any infrastructure, but can be limiting as it adopts a serverless model. It's also worth noting, Google's had a history of deprecating features on short notice for the Firebase platform.

If you need a fully fledged virtual machine, both [Google Cloud](https://cloud.google.com/free) and [Amazon Web Services](https://aws.amazon.com/free/) offer free tiers for [Compute Engine](https://cloud.google.com/compute) and [Elastic Compute Cloud (EC2)](https://aws.amazon.com/ec2/).

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
