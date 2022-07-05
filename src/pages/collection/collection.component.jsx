import React from "react";
import "./collection.styles.scss";
import { selectCollection } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item.componnet";
import { useParams } from "react-router";
import {  useSelector } from "react-redux";
const CollectionPage = () => {
  //const {items, routeName}= collection;
  const { id } = useParams();
  
   
  const collections=useSelector(state=>state.shop.collections[id]) //vercomo hacelro en file select[]

  const { items, routeName } = collections;
  return (
    <div className="collection-page">
     <h2 className="title">{routeName}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div> 
    </div>
  );
};

export default CollectionPage;
