# React Native (Web) Mono Repository

Basic app that helps users to setup their workout schedule and see their workout history

### Features

- One repo for android, ios and web
- Based on [react-native](https://facebook.github.io/react-native/) and [react-native-web](https://github.com/necolas/react-native-web)

### Installation and usage

1. ```bash
    # clone this repo
    git clone git@github.com:ZVER3D/rn-rnw-monorepo.git
   ```
1. ```bash
    # install dependencies
    yarn
   ```
1. ```bash
    # build common package
    yarn build:common
    # or manualy go to packages/common and execute
    yarn build
   ```
1. ```bash
    # start the web app
    yarn start:web
    # or manualy go to packages/web and execute
    yarn start
   ```
   **See [app](https://github.com/ZVER3D/rn-rnw-monorepo/tree/master/packages/app) or [web](https://github.com/ZVER3D/rn-rnw-monorepo/tree/master/packages/web) readme to create production app**

### App demo

Web version of this app could be found [here](https://rnw-workout.netlify.com/)

### License

MIT
