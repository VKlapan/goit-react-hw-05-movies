import NavigationBar from 'components/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';
import { Header } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <NavigationBar />
      </Header>
      <Outlet />
    </>
  );
};

export default SharedLayout;
