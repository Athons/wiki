FROM python:3-alpine

ADD ./docker-entrypoint.sh /usr/bin/docker-entrypoint.sh
RUN chmod 755 /usr/bin/docker-entrypoint.sh

RUN apk update && apk upgrade && apk add --no-cache git

ENTRYPOINT [ "docker-entrypoint.sh" ]
