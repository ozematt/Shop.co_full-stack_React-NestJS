import { useCallback, useState } from 'react';
import { user } from '../assets/index';
import { UserInfoDetails, UserInfoDetailsEdit } from '.';
import { useQuery } from '@tanstack/react-query';
import { getUserDetails } from '../api/queries';

const UserInfo = () => {
  //
  ////DATA
  const [openDetails, setOpenDetails] = useState(false);
  const [openDetailsEdit, setOpenDetailsEdit] = useState(false);
  const [editUserDetails, setEditUserDetails] = useState(false);

  const { data: userDetails, refetch } = useQuery({
    queryKey: ['userDetails'],
    queryFn: getUserDetails,
    // enabled: openDetails,
  });

  const username = localStorage.getItem('user') || '';

  ////LOGIC

  const handleEditButton = useCallback(() => {
    setOpenDetails(false);
    setOpenDetailsEdit(true);
    setEditUserDetails(true);
  }, []);

  const handleAddDetailsButton = useCallback(() => {
    setOpenDetails(true);
    setOpenDetailsEdit(false);
    setEditUserDetails(false);
    refetch();
  }, []);

  const handleUserDetailsButton = useCallback(() => {
    if (userDetails) {
      setOpenDetails((prev) => !prev);
      setOpenDetailsEdit(false);
      return;
    }

    setOpenDetailsEdit((prev) => !prev);
    setOpenDetails(false);
  }, [userDetails]);

  ////UI
  return (
    <div className="flex h-full w-1/3 shrink-0 flex-col items-center rounded-[20px] p-2 py-5 ring-1 ring-black ring-opacity-10 max-lg:w-full md:py-7 dark:ring-white">
      <img
        src={user}
        alt="avatar"
        className="h-[150px] w-[150px] rounded-full bg-grayBG object-contain opacity-80 md:h-[200px] md:w-[200px] dark:bg-zinc-900 dark:bg-opacity-30 dark:opacity-100 dark:invert"
      />
      <p className="my-9 font-satoshi text-2xl font-medium opacity-60 dark:opacity-100">
        {username}
      </p>
      {openDetails && (
        <UserInfoDetails
          onEditClick={handleEditButton}
          userDetailsData={userDetails}
        />
      )}
      {openDetailsEdit && (
        <UserInfoDetailsEdit
          edit={editUserDetails}
          onAddDetailsClick={handleAddDetailsButton}
        />
      )}

      <button
        onClick={handleUserDetailsButton}
        className="mt-[30px] cursor-pointer rounded-full border px-[80px] py-[15px] transition duration-200 ease-in-out hover:scale-95 active:scale-100 sm:mt-[36px]"
      >
        User Details
      </button>
    </div>
  );
};

export default UserInfo;

//{firstName} {lastName}
