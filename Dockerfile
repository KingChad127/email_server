FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD MAIL_USERNAME=${MAIL_USERNAME} MAIL_PASSWORD=${MAIL_PASSWORD} npm run test