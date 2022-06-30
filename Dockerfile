FROM node:16.15.1

WORKDIR /app
COPY package*.json ./
RUN npm install

FROM 480925350240.dkr.ecr.us-east-1.amazonaws.com/back-libros

COPY . .

CMD [ "npm", "start" ]