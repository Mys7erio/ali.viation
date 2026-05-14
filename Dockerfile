FROM node:lts-slim AS build

WORKDIR /webroot

COPY ./package.json /webroot/package.json
COPY ./pnpm-lock.yaml /webroot/pnpm-lock.yaml
COPY ./pnpm-workspace.yaml /webroot/pnpm-workspace.yaml

# Install pnpm and node dependencies
RUN npm install -g pnpm && \
    pnpm install --frozen-lockfile --ignore-scripts && \
    pnpm approve-builds esbuild protobufjs && \
    # Final install for verification
    pnpm install --frozen-lockfile

COPY ./src /webroot/src
COPY ./index.html /webroot/index.html
COPY ./public /webroot/public
COPY ./vite.config.js /webroot/vite.config.js

RUN pnpm run build


FROM nginx:alpine AS final

COPY --from=build /webroot/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
