import { Route } from './../route';
import { Main } from './main';

export const MainRoute =  new Route({
    path: '/',
    exact: true,
    component: Main
});