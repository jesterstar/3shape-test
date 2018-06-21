import { toast } from 'react-toastify';

/**
 * Service for creating notify message
 * @param {string} errText - error text for notify
 * @param {string} type - type of notify (success, info, warning, error)
 */
export function initNotify(type, errText) {

    /**
     * Constructor for notify message service
     */
    switch (type) {
        case 'info':
            toast.info(errText);
            break;
        case 'success':
            toast.success(errText);
            break;
        case 'warning':
            toast.warning(errText);
            break;
        case 'error':
            toast.error(errText);
            break;
        default:
            toast.error(errText);
    }

}