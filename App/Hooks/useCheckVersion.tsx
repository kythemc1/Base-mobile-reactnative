import DeviceInfo from 'react-native-device-info';
import axios from 'axios';
import {API_PATHS} from 'Services/Api';
import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import navigator from 'Utils/Navigator';


export const useCheckVersion=()=>{
    const [showModal,setShowModal]=useState(false);
    const [type,setType]=useState(false);
    const checkVersion= async ()=>{
        const appVersion = DeviceInfo.getVersion();
        const applicationId= DeviceInfo.getBundleId();
        await axios({
            url:API_PATHS.APP_VERSION_CHECK,
            method: 'post',
            data:{
                applicationId: applicationId,
                version: appVersion
            }
        }).then((res)=>{
            if(res.data.forceUpgrade== true ){
                setShowModal(true);
                setType(true);
            }
            else if(res.data.forceUpgrade==false && res.data.recommendUpgrade ==true){
                setShowModal(true);
                setType(false);
            }
            else {
                setTimeout(async () => {
                    const name =  AsyncStorage.getItem('firstLogin');
                    if (name !== null) {
                        navigator.reset('SignIn');
                    } else {
                        navigator.reset('SplashSliders');
                    }
                }, 1000);
            }

        });

    };


    return{checkVersion,showModal,type};
};
