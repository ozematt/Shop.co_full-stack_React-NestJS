import { useQuery } from '@tanstack/react-query';
import { memo, useEffect } from 'react';
import { getUserDetails } from '../api/queries';
import { AppDispatch, useAppDispatch } from '../redux/store';
import { setUsername } from '../redux/userSlice';

type UserDetailsData = {
  user_id: number;
  username: string;
  firstName: string;
  lastName: string;
  gender: string;
  age: number;
};

type UserInfoDetailsProps = {
  onEditClick: () => void;
  userDetailsData: UserDetailsData;
};

const UserInfoDetails = memo(({ onEditClick }: UserInfoDetailsProps) => {
  //
  ////DATA
  const dispatch: AppDispatch = useAppDispatch();

  const { data: userDetails } = useQuery({
    queryKey: ['userDetails'],
    queryFn: getUserDetails,
  });

  ////LOGIC
  let gender;
  if (userDetails) {
    if (userDetails.gender === 'M') {
      gender = 'Male';
    } else {
      gender = 'Female';
    }
  }

  useEffect(() => {
    dispatch(setUsername(userDetails.username));
  }, [userDetails]);

  ////UI
  return (
    <>
      <div className="mt-9 flex items-start justify-start gap-3 font-satoshi text-lg">
        <div className="flex w-[90px] flex-col items-end gap-2">
          {' '}
          <p>Username:</p>
          <p>First Name: </p>
          <p>Last Name: </p>
          <p>Age: </p>
          <p>Gender:</p>
        </div>
        <div className="flex w-[90px] flex-col items-start gap-2 font-bold">
          <p>{userDetails?.username}</p>
          <p>{userDetails?.firstName} </p>
          <p>{userDetails?.lastName}</p>
          <p>{userDetails?.age}</p>
          <p>{gender}</p>
        </div>
      </div>
      <button
        onClick={onEditClick}
        className="mt-5 cursor-pointer rounded-full border bg-orange-500 px-[40px] py-[7px] text-sm transition duration-200 ease-in-out hover:scale-95 active:scale-100"
      >
        Edit
      </button>
    </>
  );
});

export default UserInfoDetails;
