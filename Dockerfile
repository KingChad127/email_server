FROM --platform=amd64 node:16-alpine
COPY . /app
WORKDIR /app
CMD node main.js