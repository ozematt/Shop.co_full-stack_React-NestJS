import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const CheckoutAddressForm = () => {
  //
  ////DATA
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<>({
    resolver: zodResolver(),
  });

  return <div>CheckoutAddressForm</div>;
};

export default CheckoutAddressForm;
