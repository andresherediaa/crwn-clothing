import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections
      ? Object.keys(collections).map(
          (keyCollection) => collections[keyCollection]
        )
      : []
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(() => {
    console.log("collectionUrlParam", collectionUrlParam);
    return (
      [selectCollections],
      (collections) => (collections ? collections[collectionUrlParam] : null)
    );
  });

export const selectIsFetchingCollection = createSelector (
  [selectShop],
  (shop)=>shop.isFetching
)

export const selectIsCollectionLoaded =createSelector (
  [selectCollections],
  (collections)=> !!collections
)
