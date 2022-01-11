import React from "react";
import { connect } from 'react-redux';
import './collection.styles.scss';
import { selectCollection } from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";
import CollectionItem from '../../components/collection-item/collection-item.componnet'


const CollectionPage = ({collection, collectionId}) => {



 console.log(collection)
 const {items, routeName}= collection;
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


const mapStateToProps = (state, ownProps) => {
  return{
    collection: selectCollection(ownProps.collectionId)(state)
  }
};

export default connect(mapStateToProps)(CollectionPage);
