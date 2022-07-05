import ShopActionTypes from "./shop.types"

export const collection_update =(collectionMap)=>({
      type: ShopActionTypes.UPDATE_COLLECTIONS,
      payload:collectionMap
})