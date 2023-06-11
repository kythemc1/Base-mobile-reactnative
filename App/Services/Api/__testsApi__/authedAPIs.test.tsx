import {describe} from '@jest/globals';
import axios from 'axios';
import {API_PATHS} from 'Services/Api';
import {STATUS_CODES} from 'Configs/Constants/HTTPStatusCodes';
import {page, pageSize} from 'Configs/Constants/PageSize';

describe('authedAPIs TEST', () => {
    let token = '';
    let keyclok='';
    const dataAuth = {
        username: '0110210190_huynh',
        password: 'Huynh2001@'
    };
 
    const dataCustomer = {
        page: page[0],
        size: pageSize[10]
    };
    // jest.mock("@react-native-community/netinfo", () => RNCNetInfoMock);

    /*Test api Auth khi test phỉ test api login đăng nhập lấy token
   để test các api bắt buộc phải đăng nhập và dùng token để không bị lỗi Unauthorized  */
    test('API AUTH LOGIN', async () => {
        const response = await axios.post(API_PATHS.LOGIN, dataAuth);
        expect(response.status).toEqual(STATUS_CODES.OK);
        token = response.data.data.access_token;
        keyclok = response.data.data.user_keycloak_id;
        console.log(response.status,'auth');
    });

    /* Test api get danh sách customer */

    test('API LIST CUSTOMER SUCCESS', async () => {
        const headers = {
            headers: {Authorization: `Bearer ${token}`},
        };
        const response = await axios.post(
            API_PATHS.GET_MANAGE_CUSTOMER,
            dataCustomer,
            headers,
        );
        expect(response.status).toEqual(STATUS_CODES.OK);
        expect(response.data).toBeDefined();
    // console.log(response.data.data.content,"data customer");
    });
    test('ERROR NOT WORKING TOKEN 401', async () => {
        try {
            await axios.post(API_PATHS.GET_MANAGE_CUSTOMER, dataCustomer);
        } catch (error: any) {
            expect(error.response.status).toEqual(STATUS_CODES.Unauthorized);
        }
    });
    test('TEST API GET CREATOR ', async () => {
        try {
            const response = await axios.get(API_PATHS.GET_CREATOR, {
                params: {
                    filter: ''
                }, headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            expect(response.status).toEqual(STATUS_CODES.OK);
            expect(response.data).toBeDefined();
            // console.log(response.data.data,"data creator");
        } catch (e: any) {
            // console.log(e,'lỗi');
            expect(e.response.status).toEqual(STATUS_CODES.Unauthorized);

        }
    });
    test('changePassWord', async () => {
        try {
            const resChangePass =  await axios.post(API_PATHS.PASSWORD_RESET,
                {
                    'expireDatePass': null,
                    'keyVerifyPass': null,
                    'newPassword': 'Huynh2001@',
                    'newPasswordConfirm': 'Huynh2001@',
                    'oldPassword': 'Huynh2001@',
                    'userId': `${keyclok}`
                }, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });
            console.log(resChangePass.status,'change passs');

            expect(resChangePass.status).toEqual('OK');
        }catch (e) {

        }


    });

});
