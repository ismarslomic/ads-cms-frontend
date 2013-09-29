# Accenture Digital Signage Frontend

## Prerequisites
* [NodeJS and npm](http://nodejs.org/download/)
* [Heroku Toolbelt](https://toolbelt.heroku.com/)
* [A Heroku user account](https://devcenter.heroku.com/articles/quickstart) (see step 1,2 and 3)


## Getting started
```
git clone https://github.com/ismarslomic/ads-cms-frontend.git
cd ads-cms-frontend
heroku login // only first time
git clone git@heroku.com:ads-cms-frontend.git distHeroku
npm install
grunt build:heroku
cd distHeroku
node server
open in web browser http://localhost:5000/
```

## Grunt tasks
* ``` grunt build:heroku ``` - builds and optimization of the code in app folder. Destination folder is distHeroku
* ``` grunt deploy:heroku ``` - deploy of distHeroku to Heroku application [ads-cms-frontend](http://ads-cms-frontend.herokuapp.com/)

## Backend
* https://github.com/ismarslomic/ads-cms-backend

## Heroku
* Heroku application: http://ads-cms-frontend.herokuapp.com/
* Heroku GIT: git@heroku.com:ads-cms-frontend.git
