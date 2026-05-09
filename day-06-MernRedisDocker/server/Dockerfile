# 1. create base Image
FROM node:20-alpine

# 2. create working dir
WORKDIR /app

# 3. copy .json file
COPY package*.json ./

# 4. Install local dependencies AND nodemon globally
# This ensures "npm run dev" can find the nodemon command
RUN npm install && npm install -g nodemon

# 5. copy all source code
COPY . .

# 6. expose your port
EXPOSE 9090

# 7. start backend server
# It's better to use "npm run dev" to stay consistent with your scripts
CMD [ "npm", "run", "dev" ]
