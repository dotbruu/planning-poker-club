FROM node:18.13.0

WORKDIR /app/frontend

COPY frontend/package*.json ./
RUN npm install

COPY frontend/ .

RUN npm run build

EXPOSE 7051

CMD ["npm", "start"]
