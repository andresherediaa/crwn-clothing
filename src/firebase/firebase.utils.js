import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyB9lLxC_ugp9yu9XNFqBokdqxlvVT-19zE",
  authDomain: "crwn-db-e2898.firebaseapp.com",
  projectId: "crwn-db-e2898",
  storageBucket: "crwn-db-e2898.appspot.com",
  messagingSenderId: "578565239667",
  appId: "1:578565239667:web:b277d3b20734f4da850b06",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return; //si no existe el usuario
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get(); //trae el objetoocn datos
  if (!snapShot.exists) {
    //veriifca qu el usurio existe
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("ERROR AL GUARDAR EN LA BASE DE DATOS...", error);
    }
  }

  return userRef;
  //const userRef = firestore.doc(`users/${userAuth.uid}`);
};

export const addCollectionDocuments = async (collectionKey, objectsToAdd) => {//function to save a collection in firstore
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit(); //envia a gaurdar a firebase las colecciones de datos hats , sneakers etc
};

export const convertCollectionsSnapshpotToMap = collectionsSnapshot => {
  const transformedCollection = collectionsSnapshot.docs.map(doc => {
    const {title,  items} = doc.data();
    return {
      routeName : encodeURI(title.toLowerCase()),
      id:doc.id,
      title,
      items
    }
  })

return transformedCollection.reduce((accumulator, collection)=>{
  accumulator[collection.title]=collection
  return accumulator;
}, {})
 
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
