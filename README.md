# Todolist

Built by [jaewonYoon](https://github.com/jaewonYoon)

# how to connect in localhost

- Clone this repo in your local area (ex: ~/Desktop/todoProject)
- cd ~/Desktop/todoProject
- To install all the dependencies in package.json, type command below

### `npm i`

- to start localhost server, type command below

### `npm start`

- go to
  [http://localhost:3000][df1] in your browser

# How to build

- To modify this repo and build your own project, follow instruction below
- This app Using cloud firestore. To get your own apikey, go to firebase
  [https://firebase.google.com ][df1]

- All the config setting is in src/config/fbConfig.js

## fbConfig.js

```
import {configKey} from './config.js';
const config = {
  apiKey: configKey.apiKey,
  authDomain: "todoapp-bf8f6.firebaseapp.com",
  databaseURL: configKey.databaseURL,
  projectId: "todoapp-bf8f6",
  storageBucket: "todoapp-bf8f6.appspot.com",
  messagingSenderId: configKey.messagingSenderId,
  appId: configKey.appId
};
```

> As you can see, all the personal info is covered with variable, make a file like 'config.js' in same path with fbConfig.js
> get your config info in firebase site, and set below

```
export const configKey = {
  apiKey: "some key ",
  authDomain: "some domain",
  databaseURL: "some URL",
  projectId: "some Id",
  storageBucket: "blah blah blakh",
  messagingSenderId: "some Id",
  appId: "another some Id "
};
```

After setting apikey, you should login firebase

```
//using terminal
 > firebase login  // Sign in to Google
 > firebase init  // Initiate your project
```

Then You can build

```
 //using terminal
  > npm run build
```

Then you have folder name 'build'

```
 -root
    -build
    -dist
    -src
```

> move your files in 'build' to 'dist'
> Then you are ready to deploy app

```
> firebase deploy
```

# Tech

- [React.js]
- [firebase]
- [React-redux]
