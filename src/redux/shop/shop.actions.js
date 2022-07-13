import ShopActionTypes from "./shop.types";
import {
  convertCollectionsSnapshpotToMap,
  firestore,
} from "../../firebase/firebase.utils";

//middlewares Thunks
export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSucess = (collectionMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionMap,
});

export const fetchCollectionsFailure = (errorMesage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMesage,
});

export const fetchCollectionsStartAsynchronous = () => {
  return (dispatch) => {
      const collectionRef= firestore.collection("collections");
      dispatch(fetchCollectionsStart());
      collectionRef
      .get()
      .then(snapshot => {
            const collectionMap= convertCollectionsSnapshpotToMap(snapshot);
            dispatch(fetchCollectionsSucess(collectionMap));
      }).catch(error=>dispatch(fetchCollectionsFailure(error.message)))
  };
};
