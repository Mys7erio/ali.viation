FROM node:lts-slim AS build

WORKDIR /webroot

COPY ./package.json /webroot/package.json
# COPY ./package-lock.json /webroot/package-lock.json
RUN npm install

COPY ./src /webroot/src
COPY ./index.html /webroot/index.html
COPY ./public /webroot/public
COPY ./vite.config.js /webroot/vite.config.js

RUN npm run build


FROM nginx:alpine AS final

COPY --from=build /webroot/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
