import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import CollectionOverViewContainer from '../../component/collections-overview/collections-overview.container';
import CollectionContainer from '../collection/collection.container';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';


class ShopPage extends React.Component{


    componentDidMount(){
        const {fetchCollectionsStartAsync} = this.props;
        fetchCollectionsStartAsync();
    }

    render(){
    const { match} = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`}
                  component={CollectionOverViewContainer} />
                <Route path={`${match.path}/:collectionId`}
                  component={CollectionContainer}
                  />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch =>({
    fetchCollectionsStartAsync: () =>
    dispatch(fetchCollectionsStartAsync())
});

export default connect(null,mapDispatchToProps)(ShopPage);