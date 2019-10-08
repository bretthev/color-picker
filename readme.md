## Brett's Color Picker

### Set up local environment

Clone the repository from https://github.com/bretthev/color-picker.git, then run

```
npm install
```

to add all the necessary dependencies.

To run the application locally, you'll need to add an `.env` file to the application's root directory with

```
FIREBASE_API_KEY={yourFirebaseCredentials}
FIREBASE_AUTH_DOMAIN={yourFirebaseCredentials}
FIREBASE_DATABASE_URL={yourFirebaseCredentials}
FIREBASE_PROJECT_ID={yourFirebaseCredentials}
APP_HOST=http://localhost:3000
PROD_APP_HOST={yourFirebaseCredentials}
```

Instructions for setting up an app with firebase [can be found here](https://firebase.google.com/docs/web/setup).

When you've added your credentials to the `.env` file, run

```
npm run dev
```

to start the development server.

A deployed version of the application [can be found here](https://color-picker.bretthevia.now.sh/).
