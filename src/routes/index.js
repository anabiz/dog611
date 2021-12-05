import { Suspense, lazy } from 'react';
import {
  Switch,
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Spinner from "../components/Spinners/Spinner";
import { SecureRoute } from '../RouteGuard/RouteGuard';

export const PATHS = {
  dashboard: "/dashboard",
  changePassword: '/change-password',
  register: '/register',
  adminDashboard: "/admin",
  adminParticipants: "/admin/participants/:participantId",
}

const routes = [
  {
    path: '/',
    component: lazy(() => import('pages/HomePage')),
    layout: 'public'
  },
  {
    path: '/contact',
    component: lazy(() => import('pages/Contact')),
    layout: 'public'
  },

  // {
  //   path: PATHS.dashboard,
  //   component: lazy(() => import('pages/Dashboard')),
  //   layout: 'private'
  // },
 
];

const renderRoute = ({ component: Component, ...route }) => {
  if(route.layout === "public"){
    return (
      <Route key={route.path} exact path={route.path}>
        <Suspense fallback={<Spinner />}>
          <Component />
        </Suspense>
      </Route>
    );
  }else if(route.layout === "private"){
    return (
        <Suspense fallback={<Spinner />}>
          <SecureRoute 
            key={route.path} 
            exact 
            component={Component} 
            path={route.path} 
          />
        </Suspense>
    );
  }
};

const AllRoutes = () => routes.map((route) => renderRoute(route));

const Routes = () => {
  return (
    <Router>
      <Switch>
        <AllRoutes />
      </Switch>
    </Router>
  );
};

export default Routes;
