FROM node:10.17.0-buster-slim

# Install Python 2
RUN apt-get update && apt-get install -y python2

# Install make and build-essential
RUN apt-get update && apt-get install -y make build-essential

WORKDIR /usr/app/src
EXPOSE 3000

# Load Source
COPY . .

# Install node_modules
RUN npm install
RUN ./node_modules/.bin/gulp build

CMD node app.js
