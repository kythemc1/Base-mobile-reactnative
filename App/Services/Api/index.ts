export const DOMAIN = (serviceName: string): string =>
    `http://sidoc-test.demo2.siten.vn:43802/services/${serviceName}/api`;

const services = {
    SIDOC: 'sidoc',
    ACCOUNT_SERVICE: 'account-service',
    NOTIFICATION_SERVICE: 'noti-service',
    SIDOC_DEV: 'sidoc-dev'
};
// @ts-ignore
export const API_PATHS = {
    // auth
    LOGIN: `${DOMAIN(services.ACCOUNT_SERVICE)}/auth/login`,
    ACCOUNT: `${DOMAIN(services.ACCOUNT_SERVICE)}/auth/account`,
    REFRESH_TOKEN: `${DOMAIN(services.ACCOUNT_SERVICE)}/auth/refresh-token`,
    PASSWORD_RESET: `${DOMAIN(services.ACCOUNT_SERVICE)}/auth/password/reset`,
    PASSWORD_FORGOT: `${DOMAIN(services.ACCOUNT_SERVICE)}/auth/password/forgot`,
    // customer
    GET_MANAGE_CUSTOMER: `${DOMAIN(services.SIDOC)}/customers/filter`,
    GET_CREATOR: `${DOMAIN(services.SIDOC)}/users/search`,
    // notification
    CREATE_NOTIFICATION: `${DOMAIN(services.NOTIFICATION_SERVICE)}/notifications`,
    GET_NOTIFICATION: `${DOMAIN(services.NOTIFICATION_SERVICE)}/notifications/get-all`,
    HAS_READ_NOTIFICATION: `${DOMAIN(services.NOTIFICATION_SERVICE)}/notifications/has-read`,
    COUNT_NOTIFICATION_HAS_READ: `${DOMAIN(services.NOTIFICATION_SERVICE)}/notifications/count-notification-has-read`,
    //document
    GET_ALL_DOCUMENT: `${DOMAIN(services.SIDOC)}/document/get-all`,
    GET_DOCUMENT_TYPE: `${DOMAIN(services.SIDOC)}/document-types/get-all`,
    GET_DOCUMENT_PROCESSING:`${DOMAIN(services.SIDOC)}/document/get-all-user-processing`,
    //amount text
    GET_AMOUNT_TEXT:  `${DOMAIN(services.SIDOC)}/dashboard/get-data`,
    //device
    SEND_USER_DEVICE: `${DOMAIN(services.NOTIFICATION_SERVICE)}/user-device`,
    DELETE_USER_DEVICE: `${DOMAIN(services.NOTIFICATION_SERVICE)}/user-device`,
};
