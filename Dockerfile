FROM node:20-alpine

WORKDIR /app

RUN apk add --no-cache curl

COPY package*.json ./

RUN npm ci --production

COPY . .

RUN npm run build

EXPOSE 1337

ENV NODE_ENV=production

CMD ["npm", "start"]