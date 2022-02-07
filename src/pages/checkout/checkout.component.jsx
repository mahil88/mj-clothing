import React from 'react';
import { connect } from 'react-redux';
import CheckoutItem from '../../component/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../component/stripe-button/stripe-button.component';

import './checkout.styles.scss';
import { createStructuredSelector } from 'reselect';
import { selectCartItems ,selectCartTotal } from '../../redux/cart/cart.selectors';

const CheckoutPage = ({cartItems,total}) => (
    <div className='checkout-page'>
         <div className='checkout-header'>
             <div className='header-block'>
                Product
            </div>
             <div className='header-block'>
                Description
            </div>
             <div className='header-block'>
                Quantity
            </div>
             <div className='header-block'>
                Price
            </div>
             <div className='header-block'>
                Remove
            </div>
        </div>
        {cartItems.map( cartItem => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)
        )}
        <div className='total'>
            <span>TOTAL ${total}</span>
        </div>
        <div className='test-warning'>
            * 4242 4242 4242 4242 *
        </div>
        <StripeCheckoutButton price={total}/>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    total : selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);