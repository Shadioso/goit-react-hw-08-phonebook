import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Navigation/Layout';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectRefresh } from 'redux/selectors';
import { refresh } from 'services/api';
import { RestrictedRoute } from 'services/RestrictedRoute';
import { Loader } from './Loader/Loader';
//
const Home = lazy(() => import('pages/Home'));
const Contacts = lazy(() => import('pages/Contacts'));
const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));

//
export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectRefresh);
  //
  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);
  //
  return !isRefreshing ? (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contacts" element={<Contacts />}></Route>
        <Route
          path="register"
          element={
            <RestrictedRoute
              component={Register}
              redictertTo="/"
            ></RestrictedRoute>
          }
        ></Route>
        <Route
          path="login"
          element={
            <RestrictedRoute
              component={Login}
              redictertTo="/"
            ></RestrictedRoute>
          }
        ></Route>
      </Route>
    </Routes>
  ) : (
    <Loader />
  );
};
