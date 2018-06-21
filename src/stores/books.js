import { action, observable } from 'mobx';

import ApiService from './../services/api';
import ErrorHandler from './../services/errorHandler';

export default class BooksStore {
    @observable isPayloadLoading = false;
    @observable isFoundResult = false;
    @observable booksInfo = {};
    @observable searchResult = {};

    /**
     * Get book info
     * @param currentSearchText
     */
    @action
    getBooks(currentSearchText) {
        ApiService.getBooks()
            .then((res) => {
                if (!res) throw res.error;
                this.booksInfo = res.items;
                let searchItems = [];
                console.log(currentSearchText);
                console.log(res.items);
                for (let i=0; i < this.booksInfo.length; i++) {
                    let title = res.items[i].volumeInfo.title;

                    if (title.toLowerCase().indexOf(currentSearchText) !== -1) {
                        searchItems.push(res.items[i].volumeInfo);
                    }
                }
                console.log(searchItems);
                if (searchItems.length > 0) {
                    this.searchResult = searchItems;
                    this.isFoundResult = true;
                } else {
                    this.searchResult = {};
                    this.isFoundResult = false;
                }
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