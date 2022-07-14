import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionLoaded } from "../../redux/shop/shop.selectors";
import CollectionPage from "../../pages/collection/collection.component";
import WithSpinner from "../../components/with-spinner/wit-spinner.component";

const mapStateToProps = createStructuredSelector({
  isLoading: (state)=>{
   return !selectIsCollectionLoaded(state)
  },
});

export default connect(mapStateToProps, null)(WithSpinner(CollectionPage));
