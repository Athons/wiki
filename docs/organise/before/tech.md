## Communication

Two main options here:

* Discord
* Slack

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
