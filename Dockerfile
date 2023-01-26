FROM node:19-bullseye-slim

# Install git
RUN apt-get update && apt-get install git -y

# Clone Repository & change dir
RUN git clone https://github.com/Mys7erio/ali.viation /tmp/ali.viation
WORKDIR /tmp/ali.viation

# Install dependencies and server
RUN npm install && npm install -g serve

# Build production version
RUN npm run build

# Change Workdir to app source code
WORKDIR /app

# Copy build and remove source code
RUN cp -r /tmp/ali.viation/dist/* . && rm -r /tmp/*

CMD ["serve", "-l", "$PORT"]