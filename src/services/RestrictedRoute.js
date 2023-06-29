import { useSelector } from 'react-redux';
import { selectLoggedUser, selectRefresh } from 'redux/selectors';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({
  component: Component,
  redictertTo = `/`,
}) => {
  const isLoggedIn = useSelector(selectLoggedUser);
  const isRefreshing = useSelector(selectRefresh);
  const shouldRedicrect = isLoggedIn || isRefreshing;
  return shouldRedicrect ? <Navigate to={redictertTo} /> : <Component />;
};
