# 1. create a base image
FROM node:20-alpine

# 2. create working directory
WORKDIR /app

# 3. copy all .json files into current working dir
COPY package*.json ./

# 4. Copy every source code into current working dir
COPY . .

# 5. expose your port
EXPOSE 5173

# 6. Install all the dependencies
RUN npm install

# 7. start the dev server
CMD [ "npm","run","dev","--","--host" ]