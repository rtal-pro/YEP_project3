FROM node:latest

WORKDIR /front

COPY package*.json /front/
COPY yarn.lock /front/

RUN yarn install

COPY . /front/

EXPOSE 3000

CMD ["yarn", "start"]