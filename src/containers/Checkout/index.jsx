import { Elements } from '@stripe/react-stripe-js';

import { useLocation } from 'react-router-dom';

import { CheckoutForm } from '../../components';
import stripePromise from '../../config/stripeConfig';

export const Checkout = () => {
  const { state } = useLocation();
  const clientSecret = state?.clientSecret;

  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <CheckoutForm />
    </Elements>
  );
};
