import { lazy } from 'react';
import appPaths from "./appPaths";
import { RouteDefinition } from '../types/RouteDefinition';

// eager pages
import HomePage from '../pages/HomePage';

// lazy pages
const AvailableHoursPage = lazy(() => import('../pages/AvailableHoursPage'))
const ClaimedHoursPage = lazy(() => import('../pages/ClaimedHoursPage'))
const SubRequestsPage = lazy(() => import('../pages/SubRequestsPage'))
const LoginPage = lazy(() => import('../pages/LoginPage'))
const SignUpPage = lazy(() => import('../pages/SignUpPage'))
const SettingsPage = lazy(() => import('../pages/SettingsPage'));

export const appRoutes: RouteDefinition[] = [
  {
    path: appPaths.available,
    exact: false,
    authenticated: true,
    sidebar: true,
    component: AvailableHoursPage,
  },
  {
    path: appPaths.claimed,
    exact: false,
    authenticated: true,
    sidebar: true,
    component: ClaimedHoursPage,
  },
  {
    path: appPaths.requests,
    exact: false,
    authenticated: true,
    sidebar: true,
    component: SubRequestsPage,
  },
  {
    path: appPaths.settings,
    exact: false,
    authenticated: true,
    sidebar: true,
    component: SettingsPage,
  },
  {
    path: appPaths.login,
    exact: false,
    authenticated: false,
    sidebar: false,
    component: LoginPage,
  },
  {
    path: appPaths.register,
    exact: false,
    authenticated: false,
    sidebar: false,
    component: SignUpPage,
  },
  {
    path: appPaths.home,
    exact: true,
    authenticated: false,
    sidebar: false,
    component: HomePage,
  },
];