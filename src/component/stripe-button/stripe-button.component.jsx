import React from 'react';
import StripeCheckout from 'react-stripe-checkout';



const StripeCheckoutButton = ( { price } ) => {
    const priceForStripe = price*100;
    const publishedKey = 'pk_test_51KQQchKiPuGs83UfahqjTZMNUnpaf76vDn2D0vDMIbyPkW0UL9nwrvaQOBUTj4GS0Kt1xAyQwqgF7OW8cWoS6N8300GY4jnHbi';

    const onToken = token =>{
        console.log(token);
        alert('Payment Successfull')
    }

return(
    <StripeCheckout
        label='Pay Now'
        name='mj test'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishedKey}
    />
)};

export default StripeCheckoutButton;