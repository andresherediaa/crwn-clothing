import { takeLatest, put, call } from "redux-saga/effects";
import ShopActionTypes from "./shop.types";
import {
  convertCollectionsSnapshpotToMap,
  firestore,
} from "../../firebase/firebase.utils";

import {
  fetchCollectionsSucess,
  fetchCollectionsFailure,
} from "./shop.actions";

export function* fetchCollections() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionMap = yield call(
      convertCollectionsSnapshpotToMap,
      snapshot
    );
    yield put(fetchCollectionsSucess(collectionMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* onFetchCollectionsStart() {
    console.log("eeeeee");
  yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollections);
}
