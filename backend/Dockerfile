FROM node:18.13.0

WORKDIR /app/backend

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run db:generate
RUN npm run build

EXPOSE 7050

CMD ["npm", "run", "start:prod"]
