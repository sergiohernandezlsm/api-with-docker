FROM node:12.16.2-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY ./src ./

EXPOSE 8080

RUN ls
RUN pwd

CMD [ "node", "app.js" ]