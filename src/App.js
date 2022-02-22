import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './component/header/header.component';

import { Switch, Route, Redirect } from 'react-router-dom';
import { auth,createUserProfileDocument , addCollectionAndDocuments } from './firebase/firebase.utils';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import { selectCollectionsForPreview } from './redux/shop/shop.selectors';
import {
  checkUserSession
} from './redux/user/user.actions';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount(){
    const {checkUserSession} = this.props;
    checkUserSession();
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header />
        <Switch>
                  <Route exact path='/' component={HomePage} />
                  <Route path='/shop' component={ShopPage} />
                  <Route exact path='/checkout' component={CheckoutPage} />
             <Route
                         exact
                         path='/signin'
                         render={() =>
                           this.props.currentUser ? (
                             <Redirect to='/' />
                           ) : (
                             <SignInAndSignUpPage />
                           )
                         }
                       />
                     </Switch>
      </div>
   );
  }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    collectionArray :selectCollectionsForPreview
})

const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
