FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy the application files into the container
COPY . .

RUN npm install

# Expose port 4000 for server
EXPOSE 4000

CMD [ "npm" "start"]