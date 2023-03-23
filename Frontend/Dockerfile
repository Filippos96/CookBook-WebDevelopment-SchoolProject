FROM node:18.14.1

EXPOSE 5173

WORKDIR  /frontend

COPY ./package*.json ./

RUN npm install 

COPY ./code ./

CMD ["npm", "run", "dev"]
