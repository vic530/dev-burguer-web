import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  'pk_test_51UcrLP1WP4erxjVJvtqBSCnvWeTW973wUcEHzYeqhAUnaTnYKdcMUdL73cdfE4MZ7YdtRgI3hs63RbHfS8KrNvh200Hp2ZEfFk',
);

export default stripePromise;
