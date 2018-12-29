FROM node:10

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app
RUN apt-get update && apt-get install -y \
    xsel

RUN yarn

EXPOSE 7000

CMD [ "yarn", "start"]