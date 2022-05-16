import admin from 'firebase-admin'

import serviceAccount from './backendcoder-658b7-firebase-adminsdk-i8ns7-206368a8ad.js'

try {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
    console.log("Firestore conectado");
} catch (error) {
    console.log(error);
}

const config = {
    mongoDb: {
        url: "mongodb+srv://FacundoMuoio:coderback@coderback.r5nm3.mongodb.net/ecommerce?retryWrites=true&w=majority",
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    },
    fileSystem: {
        dirProducts: './src/controllers/files/productos.json',
        dirCarts: './src/controllers/files/carts.json'
    },
    firebase: {
        db: admin.firestore(),
    }
}

export default config;


