export const API_ROOT =
  'http://sidoc-test.demo2.siten.vn:43802/services/account-service/api/auth/';
export const TIMEOUT = 10000;

export const API = {
    AUTH: {
        LOGIN: `${API_ROOT}/login`,
        ACCOUNT: `${API_ROOT}/account`,
        REFRESH_TOKEN: `${API_ROOT}/refresh-token`,
        PASSWORD_RESET: `${API_ROOT}/password/reset`,
        PASSWORD_FORGOT: `${API_ROOT}/password/forgot`,
    },
};
