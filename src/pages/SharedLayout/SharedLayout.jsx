import NavigationBar from 'components/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <NavigationBar />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
        quibusdam corrupti quos nesciunt facere sint cum quasi beatae, soluta
        dignissimos illo dolores itaque quia at consequuntur maiores alias
        ratione velit.
      </p>
      <Outlet />
    </>
  );
};

export default SharedLayout;
