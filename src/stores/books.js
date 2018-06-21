import { action, observable } from 'mobx';

import ApiService from './../services/api';
import ErrorHandler from './../services/errorHandler';

export default class BooksStore {
    @observable isPayloadLoading = false;
    @observable booksInfo = {};

    /**
     * Get books info
     */
    @action
    getBooks() {
        ApiService.getBooks()
            .then((res) => {
                if (!res.success) throw res.error;
                this.booksInfo = res.data;
            })
            .catch((e) => {
                new ErrorHandler(e);
            });
    }
}