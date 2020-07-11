# React-Spring Demo

This project demonstrates how to use [React-Spring](https://www.react-spring.io/) in a React project. The React components are intended to be portable to different projects.


## Requirements
This is a React app which requires [Node.js](https://nodejs.org/en/) to run. You can verify Node installation on the command line.

```
node -v
```

## Usage
On the command line, navigate to the lowest level of the repository. The following commands will serve the app on the local network:

```
npm install
npm start
```

To deploy in Heroku, use the [Heroku buildpack](https://github.com/mars/create-react-app-buildpack). Change `mymapviz` to an appropriate title. The following code will deploy the React app to the endpoint https://mymapviz.herokuapp.com/.

```
heroku config:set REACT_APP_API_KEY=XXXXX-XXXXXX
heroku create mymapviz --buildpack mars/create-react-app
git push heroku master
heroku open
```

## Credit
Setting up this repository was made possible by the great community of programmers who have posted their solutions on the web.

- [React Spring Sandboxes](https://codesandbox.io/u/emmabostian/sandboxes) by Emma Bostian
