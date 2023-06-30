import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Navigation from './Navigation';
import { Loader } from 'components/Loader/Loader';

const Layout = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export { Layout };
