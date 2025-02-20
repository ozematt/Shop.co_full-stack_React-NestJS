type UserInfoDetailsProps = {
  onEditClick: () => void;
};

const UserInfoDetails = ({ onEditClick }: UserInfoDetailsProps) => {
  //
  ////UI
  return (
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
      <button
        onClick={onEditClick}
        className="mt-5 cursor-pointer rounded-full border bg-orange-500 px-[40px] py-[7px] text-sm transition duration-200 ease-in-out hover:scale-95 active:scale-100 max-sm:w-full"
      >
        Edit
      </button>
    </>
  );
};

export default UserInfoDetails;
