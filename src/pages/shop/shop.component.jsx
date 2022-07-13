import React from "react";
import { Route, Routes } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import withRouter from "../../components/parse-react-router/parseversions";
import {
  selectIsFetchingCollection,
  selectIsCollectionLoaded,
} from "../../redux/shop/shop.selectors";
import WithSpinner from "../../components/with-spinner/wit-spinner.component";
import { fetchCollectionsStartAsynchronous } from "../../redux/shop/shop.actions";

const CollectionPageWithSpinner = WithSpinner(CollectionPage);
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);

class ShopPage extends React.Component {
  componentDidMount() {
    this.props.fetchCollectionsStartAsync();
  }

  render() {
    const { isCollectionFetching, isCollectionLoaded } = this.props;
    return (
      <Routes>
        <Route
          index
          element={
            <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} />
          }
        />
        <Route
          path=":id"
          element={
            <CollectionPageWithSpinner isLoading={!isCollectionLoaded} />
          }
        />
      </Routes>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsFetchingCollection,
  isCollectionLoaded: selectIsCollectionLoaded,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchCollectionsStartAsync: () =>
    dispatch(fetchCollectionsStartAsynchronous()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ShopPage)
);
