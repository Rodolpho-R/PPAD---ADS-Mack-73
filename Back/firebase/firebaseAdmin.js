// firebaseAdmin.js
const admin = require('firebase-admin');
const serviceAccount = require('./octagonoschool-firebase-adminsdk-cdwsu-c0eed33084.json'); 
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;
