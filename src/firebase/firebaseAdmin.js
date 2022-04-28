import admin from 'firebase-admin';
import * as functions from 'firebase-functions';

const createuser = functions.https.onCall( (data) => {
    return admin.auth().createUser(data).catch (error => {
        return alert(error.message);
    });
});

export default createuser;