# Use a base image
FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

# Install dependencies
RUN npm install

COPY . .

EXPOSE 3000

# Start the application
CMD [ "npm", "start" ]