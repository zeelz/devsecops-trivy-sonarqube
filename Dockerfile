FROM node:slim

WORKDIR /express-app

COPY package*.json .

RUN npm ci --only=production

# Install fixed packages "globally" to override base image package
RUN npm install -g @isaacs/brace-expansion@^5.0.1 tar@^7.5.7

COPY . .

RUN npm run build

# EXPOSE 5005

CMD ["node", "./build/index.js"]