FROM --platform=amd64 node:16-alpine
COPY . /app
WORKDIR /app
CMD MAIL_USERNAME=${MAIL_USERNAME} MAIL_PASSWORD=${MAIL_PASSWORD} node index.js