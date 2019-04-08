# Github-user-search
Simple webpage to fetch github users and learn about their profile using ReactJS and Redux frameworks. \
[Demo](https://fedex995-github-user-search.herokuapp.com/)

##Getting started
Install all dependencies with ``npm install``

##Run the project
``npm run start-react``

##Project structure
The src folder follows this structure
```
src
├── actions -> redux actions
├── assets -> icons, imgs, etc
├── components -> ReactJS components
├── containers -> Redux containers (bridge between ReactJS and Redux)
├── middlewares -> middlewares used for https calls
├── reducers -> Redux reducers
├── utils -> Helper functions
├── constants.scss -> Style constants 
├── index.js -> Entry point of the app
├── routes.js -> Routes of the app
├── settings.json -> JSON including projects settings (URLS, etc)
├── store.js -> Definition of redux's store
├── styles.scss -> General styles for the app

```
##Build
``npm run build`` generates a production build folder, which can be used to deploy the app in a production environment.

##Deployment
The platform Heroku was used for the deployment of the project, following [this guide](#https://medium.com/jeremy-gottfrieds-tech-blog/tutorial-how-to-deploy-a-production-react-app-to-heroku-c4831dfcfa08)