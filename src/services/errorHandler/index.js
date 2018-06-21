import { initNotify } from './../notify';

/**
 * Error handle service for axios responde, to more info look here - https://github.com/axios/axios#handling-errors
 */
export default class ErrorHandler {

    /**
     * Constructor of error handler service
     * @param {object} error - error request response
     */
    constructor(error) {

        /**
         * Error catcher for bad request from client
         */
        this.responde = error.response;
        if (this.responde) {
            console.log(this.responde);

            switch (this.responde.status) {
                case 404:
                    initNotify('error', `Occurs an error with status ${this.responde.status}, message - ${this.responde.statusText}.`);
                    break;
                default:
                    initNotify('error', 'Unknown error.');
            }
        } else {

            /**
             * Error catcher for wrong request in payload
             */
            this.code = error.code;
            this.message = error.message;
            console.log(error);

            switch (this.code) {
                default:
                    initNotify('error', 'Unknown error.');
            }
        }
    }
}