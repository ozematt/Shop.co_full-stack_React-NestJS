import { Outlet } from 'react-router';
import { Nav, TopBar } from '../sections';

const Dashboard = () => {
  //
  ////UI
  return (
    <>
      <TopBar />
      <div className="sticky top-0 z-50 backdrop-blur-[10px]">
        <Nav />
      </div>
      <Outlet />
    </>
  );
};

export default Dashboard;
