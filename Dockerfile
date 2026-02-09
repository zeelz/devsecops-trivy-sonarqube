FROM node:alpine

WORKDIR /express-app

COPY package*.json .

RUN npm ci --only=production

RUN npm install @isaacs/brace-expansion@^5.0.1 qs@^6.14.1 tar@^7.5.7

COPY . .

RUN npm run build

# EXPOSE 5005

CMD ["node", "./build/index.js"]