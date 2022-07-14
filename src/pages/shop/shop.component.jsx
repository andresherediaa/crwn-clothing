import React from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import CollectionPageContainer from "../collection/collection.container";
import { fetchCollectionsStartAsynchronous } from "../../redux/shop/shop.actions";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }
  render() {
    return (
      <Routes>
        <Route index element={<CollectionsOverviewContainer />} />
        <Route path=":id" element={<CollectionPageContainer />} />
      </Routes>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () =>
    dispatch(fetchCollectionsStartAsynchronous()),
});
export default connect(null, mapDispatchToProps)(ShopPage);
