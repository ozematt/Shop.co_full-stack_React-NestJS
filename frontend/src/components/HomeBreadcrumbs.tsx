import { useNavigate } from 'react-router-dom';
import { Arrow } from '.';

const HomeBreadcrumbs = () => {
  //
  ////DATA
  const navigate = useNavigate();

  ////UI
  return (
    <>
      <p
        className="cursor-pointer pr-2 font-satoshi leading-none hover:opacity-70"
        onClick={() => navigate('/')}
      >
        Home
      </p>
      <Arrow />
    </>
  );
};

export default HomeBreadcrumbs;
