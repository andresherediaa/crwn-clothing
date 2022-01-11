import React from "react";
import { Route, Routes } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from '../collection/collection.component';

import { useParams } from "react-router";
 
const ShopPage = (props) => {

 const collectionId=useParams()['*'];

  return (
    <div>
      <Routes>
        <Route exact path='/' element={<CollectionsOverview/>} />
        <Route path=':collectionId' element={<CollectionPage collectionId={collectionId}/>} />
      </Routes>
    </div>
  );
};

export default ShopPage;

