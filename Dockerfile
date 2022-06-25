FROM node:16-alpine

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build --prod


FROM nginx:1.20.2-alpine

COPY --from=node /app/dist/technical-evaluation /usr/share/nginx/html