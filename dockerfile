FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN npm install
RUN npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons 
RUN npm install --save-dev @babel/plugin-proposal-private-property-in-object

COPY . .

EXPOSE 3000

CMD ["npm", "start"]