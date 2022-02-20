import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import CollectionOverViewContainer from '../../component/collections-overview/collections-overview.container';
import CollectionContainer from '../collection/collection.container';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';


class ShopPage extends React.Component{


    componentDidMount(){
        const {fetchCollectionsStart} = this.props;
        fetchCollectionsStart();
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
    fetchCollectionsStart: () =>
    dispatch(fetchCollectionsStart())
});

export default connect(null,mapDispatchToProps)(ShopPage);