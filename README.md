# AngularJS demo project
Demo project/showcase/template, experimenting with modularized AngularJS.

## Setup (Node and NPM)
This project requires Node.js for the build process (download 'latest' from https://nodejs.org).

Install node module dependencies:
```
npm install
```
Install gulp on your system (run as admin user)
```
npm install -g gulp
```

## Build / Run with Gulp
Build and run local server (accessible on [http://localhost:3000](http://localhost:3000)):
```
gulp
```
Build only (target folder: `./build`):
```
gulp build
```

## Build / Bundle with Maven
The project also contains a **Maven** POM, allowing it to be built using the `maven-frontend-plugin` (which does not require Node or Gulp to be pre-installed on the system). This POM can be used as a template for Java/Angular web projects, and bundles the application as a WAR file in the target folder.
Usage:

    mvn clean install

## Notes

 - For keeping the Node modules/dependencies up-to-date, use [npm-check-updates](https://www.npmjs.com/package/npm-check-updates)

