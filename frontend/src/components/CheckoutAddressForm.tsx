import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { FormInputTextField } from '.';
import { useMutation } from '@tanstack/react-query';
import { setUserAddress } from '../api/queries';
import { AppDispatch, useAppDispatch } from '../redux/store';
import { setUserAddressState } from '../redux/userSlice';

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
  const dispatch: AppDispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<CheckoutAddressForm>({
    resolver: zodResolver(checkoutAddressFormSchema),
  });

  const setUserAddressMutation = useMutation({
    mutationFn: setUserAddress,
    onError: () => {},
    onSuccess: () => {
      dispatch(setUserAddressState(true));
    },
  });

  const onSubmit = (data: CheckoutAddressForm) => {
    console.log(data);
    setUserAddressMutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-7 space-y-7">
      <FormInputTextField
        id="fullName"
        placeholder="Full Name"
        register={register('fullName')}
        error={errors.fullName?.message}
      />
      <div className="flex w-[380px] gap-3">
        {' '}
        <FormInputTextField
          id="street"
          placeholder="Street"
          register={register('street')}
          error={errors.street?.message}
        />
        <div className="w-[180px]">
          {' '}
          <FormInputTextField
            id="houseNumber"
            placeholder="House Number"
            register={register('houseNumber')}
            error={errors.houseNumber?.message}
          />
        </div>
      </div>
      <div className="flex w-[480px] gap-3">
        <FormInputTextField
          id="city"
          placeholder="City"
          register={register('city')}
          error={errors.city?.message}
        />
        <div className="w-[150px]">
          {' '}
          <FormInputTextField
            id="zipCode"
            placeholder="Zip Code"
            register={register('zipCode')}
            error={errors.zipCode?.message}
          />
        </div>
      </div>
      <FormInputTextField
        id="country"
        placeholder="Country"
        register={register('country')}
        error={errors.country?.message}
      />
      <button
        disabled={isSubmitting}
        type="submit"
        className="mt-5 cursor-pointer rounded-full border bg-orange-500 px-[40px] py-[7px] text-sm transition duration-200 ease-in-out hover:scale-95 active:scale-100"
      >
        Add address
      </button>
      <button
        onClick={}
        className="ml-3 mt-5 cursor-pointer rounded-full border px-[40px] py-[7px] text-sm transition duration-200 ease-in-out hover:scale-95 active:scale-100"
      >
        Return
      </button>
    </form>
  );
};

export default CheckoutAddressForm;
