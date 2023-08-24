FROM node
WORKDIR /usr/src/app
RUN npm install | npm install pm2 -g
COPY . .
#CMD [ "node", "app.js" ]
CMD ["pm2-runtime", "app.js"]
EXPOSE 8080