FROM node:19-bullseye-slim as build

# Install git
RUN apt-get update && apt-get install git -y

# Clone Repository & change working dir
RUN git clone https://github.com/Mys7erio/ali.viation
WORKDIR /ali.viation

# Install dependencies
RUN npm install

# Build production version
RUN npm run build


# Transfer build to nginx root folder
FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /ali.viation/dist/ /usr/share/nginx/html
