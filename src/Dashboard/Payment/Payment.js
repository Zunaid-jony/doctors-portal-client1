import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router'
import CheckoutForm from './CheckoutForm';
import './payment.css'
import  img  from '../../../src/assets/images/credit-cards.png.jpg'

const Payment = () => {
    const {appointmentId} = useParams();
    const [appointment, setAppointmet] = useState({})
    const stripePromise = loadStripe('pk_test_51L2pOtHhplZr1smqfRUz4bGzdpXmlY3HiYcvLxRkmepUhFZREfnlbDqNjL65HkTE0TViHRaLKTrbO6F4fcxInnA400EWVL6YFH')
    useEffect(()=>{
        fetch(`https://ancient-island-03613.herokuapp.com/appointments/${appointmentId}`)
        .then(res => res.json())
        .then(data => setAppointmet(data));    
    },[appointmentId])
    return (
        <div className='payment-class'>
            <h1>please pay for:  {appointment.serviceName}</h1>
            <img src={img}></img>
            <h4> pay: $ {appointment.price}</h4>
            <Elements stripe={stripePromise}>
           
      <CheckoutForm 
      
      appointment={appointment}
      />
     
 
    </Elements>
        </div>
    );
};

export default Payment;