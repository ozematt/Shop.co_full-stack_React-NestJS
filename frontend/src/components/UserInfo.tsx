import { useState } from 'react';
import { user } from '../assets/index';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const userInfoDetailsSchema = z.object({
  username: z.string().min(3, 'Username must be at last 3 characters'),
  firstName: z.string().min(2, 'First name must be at last 2 characters'),
  lastName: z.string().min(2, 'First name must be at last 2 characters'),
  age: z.coerce.number().min(13, 'Age must be at least 13'),
  gender: z.enum(['M', 'F'], { message: "Gender must be 'M' or 'F'" }),
});

type UserInfoDetails = z.infer<typeof userInfoDetailsSchema>;

const UserInfo = () => {
  //
  ////DATA
  const [openDetails, setOpenDetails] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserInfoDetails>({
    resolver: zodResolver(userInfoDetailsSchema),
  });

  const onSubmit = (data: UserInfoDetails) => {
    console.log(data);
  };

  ////UI
  return (
    <div className="flex h-full w-1/3 shrink-0 flex-col items-center rounded-[20px] py-5 ring-1 ring-black ring-opacity-10 max-lg:w-full md:py-7 dark:ring-white">
      <img
        src={user}
        alt="avatar"
        className="h-[150px] w-[150px] rounded-full bg-grayBG object-contain opacity-80 md:h-[200px] md:w-[200px] dark:bg-zinc-900 dark:bg-opacity-30 dark:opacity-100 dark:invert"
      />
      <p className="mt-2 font-satoshi text-2xl font-medium opacity-60 dark:opacity-100">
        User email
      </p>
      {openDetails && (
        <>
          <div className="mt-9 flex items-start justify-start gap-3">
            <div className="flex w-[90px] flex-col items-end gap-2 font-satoshi">
              {' '}
              <p>Username:</p>
              <p>First Name: </p>
              <p>Last Name: </p>
              <p>Age: </p>
              <p>Gender:</p>
            </div>
            <div className="flex w-[90px] flex-col items-start gap-2 font-satoshi">
              <p>Username</p>
              <p>First Name </p>
              <p>Last Name</p>
              <p>Age </p>
              <p>Gender</p>
            </div>
          </div>
          <button className="mt-5 cursor-pointer rounded-full border bg-orange-500 px-[40px] py-[7px] text-sm transition duration-200 ease-in-out hover:scale-95 active:scale-100 max-sm:w-full">
            Edit
          </button>
        </>
      )}
      <button
        onClick={() => setOpenDetails(!openDetails)}
        className="mt-[-30px] cursor-pointer rounded-full border px-[80px] py-[15px] transition duration-200 ease-in-out hover:scale-95 active:scale-100 max-sm:w-full sm:mt-[36px]"
      >
        User Details
      </button>
      {/* User Details */}
      {/* set user details */}
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
          className="mx-auto mt-5 max-w-[150px] cursor-pointer rounded-full border bg-orange-500 px-[30px] py-[7px] text-sm transition duration-200 ease-in-out hover:scale-95 active:scale-100 max-sm:w-full"
        >
          Add details
        </button>
      </form>
    </div>
  );
};

export default UserInfo;

//{firstName} {lastName}
