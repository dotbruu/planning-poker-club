FROM node:18.13.0

WORKDIR /app/frontend

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 7051

CMD ["npm", "start"]
