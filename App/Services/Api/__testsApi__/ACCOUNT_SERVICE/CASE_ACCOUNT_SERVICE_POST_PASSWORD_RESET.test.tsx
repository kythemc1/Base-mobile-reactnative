// import {describe} from '@jest/globals';
import axios from 'axios';
import {API_PATHS} from 'Services/Api';
import {STATUS_CODES} from 'Configs/Constants/HTTPStatusCodes';
// import {page, pageSize} from 'Configs/Constants/PageSize';
const dataReset = {
    oldPassword: '12345678aA@',
    newPassword: '1234567aA@',
    newPasswordConfirm: '1234567aA@',
    userId: '0a9df5ce-2b80-484f-a3e5-09ff91cc4866',
};
test('API RESET PASSWORD', async () => {
    const response = await axios.post(API_PATHS.PASSWORD_RESET, dataReset);
    expect(response.status).toEqual(STATUS_CODES.OK);
});
