FROM nodered/node-red-docker

WORKDIR /usr/src/node-red
RUN mkdir node-red-contrib-fully-tts
COPY fully-tts.html node-red-contrib-fully-tts/
COPY fully-tts.js node-red-contrib-fully-tts/
COPY package.json node-red-contrib-fully-tts/
RUN npm install ./node-red-contrib-fully-tts