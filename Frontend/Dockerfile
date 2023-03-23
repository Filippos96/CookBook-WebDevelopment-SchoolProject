FROM node:18.14.1

EXPOSE 5173

WORKDIR  /frontend

COPY ./package*.json ./

RUN npm install 

COPY ./code ./

RUN npm run build

EXPOSE 5173

CMD ["npm", "run", "dev"]
