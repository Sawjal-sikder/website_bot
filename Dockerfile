
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 14007

CMD ["npm", "run", "dev", "--", "--host"]
