# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the app source code into the container
COPY . .

# Expose the port that the app runs on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
