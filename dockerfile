# Use an official Node.js runtime as the base image
FROM node:16-alpine

# Set the working directory inside the container
RUN mkdir -p /home/node/app/node_modules 

WORKDIR /home/node/app


# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

RUN apk add --no-cache \
  build-base \
  g++ \
  cairo-dev \
  jpeg-dev \
  pango-dev \
  giflib-dev\
  libc6-compat\
  fontconfig

ENV FONTCONFIG_PATH=/etc/fonts

ENV LD_LIBRARY_PATH /lib:/usr/lib:/usr/local/lib
RUN ln -s /lib/libc.musl-x86_64.so.1 /lib/ld-linux-x86-64.so.2

# Install project dependencies
RUN npm install 

# Copy the rest of the project files to the working directory
COPY . .

# Expose the port on which the application will run (change it to your desired port)
EXPOSE 3000

# Specify the command to run your application
CMD [ "npm", "start" ]