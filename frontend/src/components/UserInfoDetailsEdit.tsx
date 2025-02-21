import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { memo } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { editUserDetails, setUserDetails } from '../api/queries';
import { AppDispatch, useAppDispatch } from '../redux/store';
import { setUsername } from '../redux/userSlice';
import { FormInputAgeField, FormInputGenderField, FormInputTextField } from '.';

const userInfoDetailsSchema = z.object({
  username: z.string().min(3, 'Username must be at last 3 characters'),
  firstName: z.string().min(2, 'First name must be at last 2 characters'),
  lastName: z.string().min(2, 'First name must be at last 2 characters'),
  age: z.coerce.number().min(13, 'Age must be at least 13'),
  gender: z.enum(['M', 'F'], { message: "Gender must be 'M' or 'F'" }),
});

export type UserInfoDetails = z.infer<typeof userInfoDetailsSchema>;

type UserInfoDetailsEditProps = {
  onAddDetailsClick: () => void;
  edit: boolean;
};

const UserInfoDetailsEdit = memo(
  ({ edit, onAddDetailsClick }: UserInfoDetailsEditProps) => {
    //
    ////DATA
    const dispatch: AppDispatch = useAppDispatch();

    const {
      register,
      handleSubmit,
      setError,
      clearErrors,
      formState: { errors, isSubmitting },
    } = useForm<UserInfoDetails>({
      resolver: zodResolver(userInfoDetailsSchema),
    });

    const setUserDetailsMutation = useMutation({
      mutationFn: edit ? editUserDetails : setUserDetails,
      onError: (error) => {
        if (error.message) {
          setError('username', { type: 'custom', message: error.message });
        } else {
          console.error('Unexpected error:', error);
        }
      },
      onSuccess: (_, variables) => {
        clearErrors(['username']);
        dispatch(setUsername(variables.username));
        onAddDetailsClick();
      },
    });

    const onSubmit = (data: UserInfoDetails) => {
      setUserDetailsMutation.mutate(data);
    };

    ////UI
    return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[27px] pt-5 font-satoshi"
      >
        <FormInputTextField
          id="username"
          placeholder="Username"
          register={register('username')}
          error={errors.username?.message}
        />
        <FormInputTextField
          id="firstName"
          placeholder="First Name"
          register={register('firstName')}
          error={errors.firstName?.message}
        />
        <FormInputTextField
          id="lastName"
          placeholder="Last Name"
          register={register('lastName')}
          error={errors.lastName?.message}
        />
        <FormInputAgeField
          register={register('age')}
          error={errors.age?.message}
        />
        <FormInputGenderField
          register={register('gender')}
          error={errors.gender?.message}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="mx-auto mt-5 max-w-[150px] cursor-pointer rounded-full border bg-orange-500 px-[30px] py-[7px] text-sm transition duration-200 ease-in-out hover:scale-95 active:scale-100 max-sm:w-full"
        >
          Add details
        </button>
      </form>
    );
  },
);

export default UserInfoDetailsEdit;
