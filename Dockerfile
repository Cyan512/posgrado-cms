FROM node:20-alpine AS builder

WORKDIR /app

RUN apk add --no-cache curl

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:20-alpine

WORKDIR /app

RUN apk add --no-cache curl

COPY package*.json ./
RUN npm ci --production

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/build ./build
COPY config ./config
COPY public ./public
COPY package.json ./

EXPOSE 1337

ENV NODE_ENV=production

CMD ["npm", "start"]
