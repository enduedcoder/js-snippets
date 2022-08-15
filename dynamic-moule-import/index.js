// // this approach downlaod all the files(including user.js) whenever index.js load
// import User, { printName } from './user.js';
// const user = new User('Bruce', 'Wayne');
// printName(user);

// // DMI
// // see this in network time. after 5 seconda only the user.js will looad
// setTimeout(() => {
//   import('./user.js').then(({ default: User, printName }) => {
//     const user = new User('Bruce', 'Wayne');

//     printName(user);
//   });
// }, 5000);

//  ----------------------------

// // code splitting - example below is just for demo. the whole of admin.js is downloaded even if the user is not admin even though setupAdminUser() is called only when user is admin.

// import { setupAdminUser } from './admin.js';
// import User from './user';

// if (user.admin) {
//   setupAdminUSer();
// }

// // // To avoid the above case.
// // // in this case down here, the admin.js is downloaded only if user is admin. and for users who are not admin, this code will not even downlood

// if (user.admin) {
//   import('./admin.js').then(({ setupAdminUser }) => {
//     setupAdminUSer();
//   });
// }

//  ----------------------

// import englishTranslations from './locale/en-translation.js';
// import spanishTranslations from './locale/sp-translation.js';
// import frenchTranslations from './locale/fr-translation.js';

// const user = { locale: 'fr' };

// let translationsData;

// switch (user.locale) {
//   case 'sp':
//     translations = spanishTranslations;

//     break;
//   case 'fr':
//     translations = frenchTranslations;

//     break;
//   default:
//     translations = englishTranslations;
// }
// console.log(translationsData);

// // // To avoid the above case.
const user = { locale: 'fr' };
import(`./locale/${user.locale}-translation.js`).then(
  ({ default: translations }) => {
    console.log(translations.HI);
  }
);
