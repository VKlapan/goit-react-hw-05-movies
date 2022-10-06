import NavigationBar from 'components/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
};

export default SharedLayout;
