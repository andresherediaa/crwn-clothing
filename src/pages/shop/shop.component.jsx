import React from "react";
import { Route, Routes } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import { connect } from "react-redux";
import {
  convertCollectionsSnapshpotToMap,
  firestore,
} from "../../firebase/firebase.utils";
import withRouter from "../../components/parse-react-router/parseversions";
import { collection_update } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/wit-spinner.component";
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
class ShopPage extends React.Component {
  state = {
    isLoading: true,
  };

  async componentDidMount() {
    const collectionRef = await firestore.collection("collections").get();
    const collectionMap = await convertCollectionsSnapshpotToMap(collectionRef);
    this.props.updateCollections(collectionMap);
    this.setState({ isLoading: false });
  }

  render() {
    const { isLoading } = this.state;
    return (
      <Routes>
        <Route
          index
          element={<CollectionsOverviewWithSpinner isLoading={isLoading} />}
        />
        <Route
          path=":id"
          element={<CollectionPageWithSpinner isLoading={isLoading} />}
        />
      </Routes>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateCollections: (collectionMap) =>
    dispatch(collection_update(collectionMap)),
});

export default withRouter(connect(null, mapDispatchToProps)(ShopPage));
