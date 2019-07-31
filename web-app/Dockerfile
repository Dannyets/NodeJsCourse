FROM node:10

# Create app directory
WORKDIR /src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production
RUN npm install -g @angular/cli@7.1.2

# Bundle app source
COPY . .

EXPOSE 4200

CMD ng serve --host 0.0.0.0