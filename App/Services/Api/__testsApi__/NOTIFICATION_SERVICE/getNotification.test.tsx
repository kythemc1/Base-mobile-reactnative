import {describe} from '@jest/globals';
import axios from 'axios';
import {API_PATHS} from 'Services/Api';
import {STATUS_CODES} from 'Configs/Constants/HTTPStatusCodes';
describe('Notification test', () => {
    let token = '';
    let keyCloak = '';
    const dataAuth = {
        username: '0110210190_ketnguyen',
        password: '12345678aA@'
    };
    const paramsNotification =
        {
            'page': 0,
            'size': 10,
            'sorts': {}
        };

    /*Test api Auth khi test phỉ test api login đăng nhập lấy token
   để test các api bắt buộc phải đăng nhập và dùng token để không bị lỗi Unauthorized  */
    test('API AUTH LOGIN', async () => {
        const response = await axios.post(API_PATHS.LOGIN, dataAuth);
        expect(response.status).toEqual(STATUS_CODES.OK);
        token = response.data.data.accessToken;
        keyCloak = response.data.data.user_keycloak_id;
    });

    /*
    Test API Notification
    */
    test('NOTIFICATION GET', async () => {
        const response = await axios.post(API_PATHS.GET_NOTIFICATION, paramsNotification, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(response.data.data, 'Data');
    });


});
