FROM node:latest

WORKDIR /back

COPY package*.json /back/

RUN yarn install

COPY . /back/

EXPOSE 4000

CMD ["node", "index.js"]