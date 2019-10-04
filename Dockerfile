FROM node:12

RUN pwd
COPY server/ /app/server/
RUN rm -r /app/server/node_modules
WORKDIR /app/server
RUN npm install
CMD node server.js
EXPOSE 3000
