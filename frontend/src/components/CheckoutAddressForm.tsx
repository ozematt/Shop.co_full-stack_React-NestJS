import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const zipCodeValidation = new RegExp(/^[0-9]{2}-[0-9]{3}/);
const fullNameValidation = new RegExp(/^\b[a-zA-Z]{2,}\b \b[a-zA-Z]{2,}\b$/);

const checkoutAddressFormSchema = z.object({
  fullName: z
    .string()
    .regex(
      fullNameValidation,
      'Full name must contain two words with at least 2 characters',
    ),
  street: z.string().min(2, 'Street must be at least 2 characters'),
  houseNumber: z.string().min(1, 'House number must be at least 1'),
  city: z.string().min(2, 'City must be at least 2 characters'),
  zipCode: z.string().regex(zipCodeValidation, 'Zip code must be XX-XXX'),
  country: z.string().min(2, 'Country must be at least 2 characters'),
});

export type CheckoutAddressForm = z.infer<typeof checkoutAddressFormSchema>;

const CheckoutAddressForm = () => {
  //
  ////DATA
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<CheckoutAddressForm>({
    resolver: zodResolver(checkoutAddressFormSchema),
  });

  return <div>CheckoutAddressForm</div>;
};

export default CheckoutAddressForm;
