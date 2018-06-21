import { Route } from './../route';
import { Book } from './book';

export const BookRoute =  new Route({
    path: '/book/:book',
    component: Book
});