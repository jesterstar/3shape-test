import BooksStore from './books';

export default class RootStore {
    constructor(){
        this.books = new BooksStore();
    }
}