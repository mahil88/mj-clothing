import {ShopActionTypes} from './shop.types';

import {firestore,convertCollectionSnapshotToMap} from '../../firebase/firebase.utils'

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTION_START
});
export const fetchCollectionsSuccess = collectionMap => ({
    type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
    payload: collectionMap
});

export const fetchCollectionsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
    payload: errorMessage
});
export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collection');
        dispatch(fetchCollectionsStart());
        collectionRef.get().then(
            snapshot => {
             const collectionMap = convertCollectionSnapshotToMap(snapshot);
             dispatch(fetchCollectionsSuccess(collectionMap));
             this.setState({loading:false});
        }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
    }
};