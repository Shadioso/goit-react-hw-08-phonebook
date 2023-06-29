import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
//
const Home = lazy(() => import('pages/Home'));
const Contacts = lazy(() => import('pages/Contacts'));
const Layout = lazy(() => import('./Navigation/Layout'));
const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));

//
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contacts" element={<Contacts />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="login" element={<Login />}></Route>
      </Route>
    </Routes>
  );
};
