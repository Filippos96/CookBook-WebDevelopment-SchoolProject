#creates the contents of the backend file? ??
#the backend file is the server that the frontend communicates with. 
#frontend sends request. backend sends response

#all files that the backend file should acess should be in /src

FROM node:18.14.1

WORKDIR  /backend

COPY ./package*.json ./

RUN npm install

COPY ./src ./

#EXPOSE 8080

#watch listens to changes in the code, making it restart the aplication
CMD ["node", "--watch", "src/newApp.js"]
