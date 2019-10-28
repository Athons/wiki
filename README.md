# hack.athon.uk

I bought the domain `athon.uk` to host a hackathon wiki.

## Setup

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
