
FROM node:18-alpine

RUN npm install -g nodemon

ENV NODE_ENV production


WORKDIR /app


COPY . . 

RUN npm install

EXPOSE 3001

CMD ["npm", "run", "start"]
