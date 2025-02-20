import { zodResolver } from '@hookform/resolvers/zod';
import { memo } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const userInfoDetailsSchema = z.object({
  username: z.string().min(3, 'Username must be at last 3 characters'),
  firstName: z.string().min(2, 'First name must be at last 2 characters'),
  lastName: z.string().min(2, 'First name must be at last 2 characters'),
  age: z.coerce.number().min(13, 'Age must be at least 13'),
  gender: z.enum(['M', 'F'], { message: "Gender must be 'M' or 'F'" }),
});

type UserInfoDetails = z.infer<typeof userInfoDetailsSchema>;

type UserInfoDetailsEditProps = {
  onAddDetailsClick: () => void;
};

const UserInfoDetailsEdit = memo(
  ({ onAddDetailsClick }: UserInfoDetailsEditProps) => {
    //
    ////DATA
    const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting, isValid },
    } = useForm<UserInfoDetails>({
      resolver: zodResolver(userInfoDetailsSchema),
      mode: 'onChange',
    });

    const onSubmit = (data: UserInfoDetails) => {
      console.log(data);
    };
    const handleAddDetails = () => {
      if (!isValid) return;
      onAddDetailsClick();
    };

    ////UI
    return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 pt-5 font-satoshi"
      >
        <div>
          <input
            type="text"
            placeholder="Username"
            {...register('username')}
            className={`mt-5 h-[40px] w-[230px] rounded-full bg-grayBG pl-8 focus:outline-none focus:ring-1 focus:ring-black dark:text-black dark:focus:outline-orange-500 ${
              errors.username ? 'border border-red-500' : ''
            }`}
          />
          {errors.username && (
            <p className="mt-1 text-sm text-red-500">
              {errors.username.message}
            </p>
          )}
        </div>

        <div>
          <input
            type="text"
            placeholder="First Name"
            {...register('firstName')}
            className={`h-[40px] w-[230px] rounded-full bg-grayBG pl-8 focus:outline-none focus:ring-1 focus:ring-black dark:text-black dark:focus:outline-orange-500 ${
              errors.firstName ? 'border border-red-500' : ''
            }`}
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-500">
              {errors.firstName.message}
            </p>
          )}
        </div>
        <div>
          <input
            type="text"
            placeholder="Last Name"
            {...register('lastName')}
            className={`h-[40px] w-[230px] rounded-full bg-grayBG pl-8 focus:outline-none focus:ring-1 focus:ring-black dark:text-black dark:focus:outline-orange-500 ${
              errors.lastName ? 'border border-red-500' : ''
            }`}
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-500">
              {errors.lastName.message}
            </p>
          )}
        </div>
        <div className="">
          <div className="flex items-center gap-2">
            <p>Age:</p>
            <input
              type="number"
              min="0"
              {...register('age')}
              className="h-8 w-[50px] rounded-full bg-grayBG pl-3 focus:outline-none focus:ring-1 focus:ring-black dark:text-black dark:focus:outline-orange-500"
            />
          </div>

          {errors.age && (
            <p className="mt-1 text-sm text-red-500">{errors.age.message}</p>
          )}
        </div>

        <div className="">
          <div className="flex items-center gap-3">
            {' '}
            <p>Gender:</p>
            <label className="flex cursor-pointer items-center">
              <input
                type="radio"
                value="M"
                {...register('gender')}
                className="peer sr-only"
              />
              <div
                className={`relative grid h-[30px] w-[30px] place-items-center rounded-full text-black ring-1 ring-black ring-opacity-30 transition peer-checked:bg-grayBG peer-checked:ring-opacity-100 dark:text-white dark:ring-white dark:peer-checked:text-black ${
                  errors.gender ? 'border border-red-500' : ''
                }`}
              >
                M
              </div>
            </label>
            <label className="flex cursor-pointer items-center">
              <input
                type="radio"
                value="F"
                {...register('gender')}
                className="peer sr-only"
              />
              <div
                className={`relative grid h-[30px] w-[30px] place-items-center rounded-full text-black ring-1 ring-black ring-opacity-30 transition peer-checked:bg-grayBG peer-checked:ring-opacity-100 dark:text-white dark:ring-white dark:peer-checked:text-black ${
                  errors.gender ? 'border border-red-500' : ''
                }`}
              >
                F
              </div>
            </label>
          </div>
          {errors.gender && (
            <p className="text-sm text-red-500">{errors.gender.message}</p>
          )}
        </div>

        <button
          type="submit"
          onClick={handleAddDetails}
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
