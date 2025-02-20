import { useCallback, useState } from 'react';
import { user } from '../assets/index';
import { z } from 'zod';
import { UserInfoDetails, UserInfoDetailsEdit } from '.';

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
  const [openDetailsEdit, setOpenDetailsEdit] = useState(false);

  const handleEditButton = useCallback(() => {
    setOpenDetails(false);
    setOpenDetailsEdit(true);
  }, []);

  const handleAddDetailsButton = useCallback(() => {
    setOpenDetails(true);
    setOpenDetailsEdit(false);
  }, []);

  const handleUserDetailsButton = useCallback(() => {
    if (openDetailsEdit) return setOpenDetailsEdit(false);
    setOpenDetails((prev) => !prev);
    setOpenDetailsEdit(false);
  }, [openDetailsEdit]);

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
      {openDetails && <UserInfoDetails onEditClick={handleEditButton} />}
      {openDetailsEdit && (
        <UserInfoDetailsEdit onAddDetailsClick={handleAddDetailsButton} />
      )}

      <button
        onClick={handleUserDetailsButton}
        className="mt-[-30px] cursor-pointer rounded-full border px-[80px] py-[15px] transition duration-200 ease-in-out hover:scale-95 active:scale-100 max-sm:w-full sm:mt-[36px]"
      >
        User Details
      </button>
    </div>
  );
};

export default UserInfo;

//{firstName} {lastName}
