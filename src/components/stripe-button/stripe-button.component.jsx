import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
const StripeCheckoutButton=({price})=> {

    const priceForStripe=price*100;
    const publishableKey='pk_test_51KGPsIBNsfNnzvwFKznq2DyCTfoFdASdqeVnmRZBaZK8rI4QbbmK3dj2ERABt1wh1M9Yt8YPKeLthOnExPTeRUlo00wytZvhbR';
    
    const onToken=token=>{
        console.log("EL TOKEN", token)
    }

    return (
       <StripeCheckout
            label='Pay now'
            name='CRWN Clothing LTD.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
       />
    )
}

export default StripeCheckoutButton;
