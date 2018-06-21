import { action, observable } from 'mobx';

import ApiService from './../services/api';
import ErrorHandler from './../services/errorHandler';

export default class BooksStore {
    @observable isPayloadLoading = false;
    @observable isFoundResult = false;
    @observable booksInfo = {};
    @observable book = {};
    @observable searchResult = {};

    /**
     * Get book info for search
     * @param currentSearchText
     */
    @action
    getBooks(currentSearchText) {
        ApiService.getBooks()
            .then((res) => {
                if (!res) throw res.error;
                let searchItems = [];
                console.log(currentSearchText);
                console.log(res.items);
                for (let i=0; i < res.items.length; i++) {
                    let title = res.items[i].volumeInfo.title;

                    if (title.toLowerCase().indexOf(currentSearchText) !== -1) {
                        searchItems.push(res.items[i]);
                    }
                }
                console.log(searchItems);
                this.booksInfo = res.items;
                if (searchItems.length > 0) {
                    this.searchResult = searchItems;
                    this.isFoundResult = true;
                    this.book = {};
                } else {
                    this.searchResult = {};
                    this.book = {};
                    this.isFoundResult = false;
                }
            })
            .catch((e) => {
                new ErrorHandler(e);
            });
    }

    /**
     * Get book info
     * @param id
     * @param loader
     */
    @action
    getBookInfo(id, loader) {
        ApiService.getBooks()
            .then((res) => {
                if (!res) throw res.error;
                console.log(res.items);
                for (let i=0; i < res.items.length; i++) {
                    if (id === res.items[i].id) {
                        this.book = res.items[i];
                        loader();
                    }
                }
                this.booksInfo = res.items;
            })
            .catch((e) => {
                new ErrorHandler(e);
            });
    }

    @action
    clearSearchResult() {
        this.isFoundResult = false;
        this.booksInfo = false;
        this.searchResult = {};
    }
}