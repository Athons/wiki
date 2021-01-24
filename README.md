[![Netlify Status](https://api.netlify.com/api/v1/badges/197c452f-493f-48ad-8b45-caf7ec9c9766/deploy-status)](https://app.netlify.com/sites/cranky-hermann-f72f70/deploys)

# hack.athon.uk - The Hackathon Community Wiki

This a project to build a wiki to help document how to get involved and organise
hackathons.

## Contributing

Thanks for taking an interest in our project!

The site is built with:

* [mkdocs](https://www.mkdocs.org/)
* [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)
* The site is hosted on Netlify, behind Cloudflare (for vague statistics)

If you want to help out, but don't know were to get started check the open
issues!

*We don't bite and will work with you to make sure your contribution gets merged
in!*

### Adding events

The list of events is stored in `events.yml`, sorted by season.

You just need to feel in your events info like so:

```yaml
        - name: Example Hackathon
          website: https://example.com/
          location: The Internet
          when: 31st December 2020
          attendees: 1000
          digital: true
```

If you don't feel comfortable editing the event list directly, please feel free
to open a new issue with our `New Event` template.

### Writing Content

The site is written in Markdown, with multiple special features available to use!

First, put your content in the appropriate sub directory under `docs/`. Make
sure your file ends with `.md` as otherwise mkdocs won't pick it up!

Then, you can add a link to the sites navigation by changing the `nav` section
in `mkdocs.yml`.

For example, to add a new document to the organise section:

```yaml
  - Organise:
      - Example Section:
          - Your File: 'path/to/your/file.md'
```

Paths do not need to include `docs/` as that is where mkdocs checks by default.

You can include HTML in the page, and also use Jinja2 Templates, but worth
checking if it's really needed. This is how we implemented the event list,
hexbin and family tree.

Static resources go in `docs/static/`. If you are contributing something like
and example budget, it'll get in `docs/static/documents/`.

#### Markdown Extentions

We have the following enabled:

* [Admonition](https://squidfunk.github.io/mkdocs-material/extensions/admonition/) - Allows adding block content, for things like warnings, etc.
* [Footnotes](https://squidfunk.github.io/mkdocs-material/extensions/footnotes/) - Allows adding footnotes to the bottom of your page.

Feel free to open an issue to suggest enabling another one!

### Changing parts of layout / theme

We have static css stored under `docs/static/css/`, where you can find various
stylesheets.

Add your stylesheet to `extra_css` in `mkdocs.yml` if you need it to be
included on every page.

The `theme` folder contains templates that can be used to override a specific
pages theme, and partials which can be included to add new components.

You can find documentation on how this feature [here](https://squidfunk.github.io/mkdocs-material/customization/)

## Running Locally

If you want to work on the site locally, you can setup it up by doing the
following:

```bash
virtualenv -p python3 .venv
source .venv/bin/activate
pip install -r requirements.txt
```

And then run the development server with:

```bash
mkdocs serve
```
