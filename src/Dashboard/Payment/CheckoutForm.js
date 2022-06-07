import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React,{useState} from 'react';
import './CheckOutForm.css'


const CheckoutForm = ({appointment}) => {
    const {price} = appointment;
    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState('')

    const handleSubmit = async(e) =>{
        e.preventDefault();
        if(!stripe || !elements){
            return;
        }
        const card = elements.getElement(CardElement);
        if(card === null){
            return;
        }
        const {error, PaymentMethod} = await stripe.createPaymentMethod({
            type:'card',
            card
        });
        if(error){
            setError(error.message);
        }
        else{
            setError('');
            console.log(PaymentMethod);
        }
  
    }
    return (
        <div className='payment-area'>
            <form onSubmit={handleSubmit}>
      <CardElement 
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button type="submit" disabled={!stripe}>
        Pay {price}
      </button>
    </form>
        </div>
    );
};

export default CheckoutForm;