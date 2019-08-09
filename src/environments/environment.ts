// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  dialogflow: {
    angularBot: 'f12104014b3840ca8f11bafe05c38739'
  },
  
  firebase: {
    apiKey: 'AIzaSyDB4eB3WOjTmxhvizKb-wrvCCRrQgPJEj4',
    authDomain: 'nuavo-cwmyoi.firebaseapp.com',
    databaseURL: 'https://nuavo-cwmyoi.firebaseio.com',
    projectId: 'nuavo-cwmyoi',
    storageBucket: 'nuavo-cwmyoi.appspot.com',
    messagingSenderId: '824003767462'
}
 
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
