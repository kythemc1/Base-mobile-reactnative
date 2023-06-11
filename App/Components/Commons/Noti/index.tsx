import {View, Image, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import icons from 'Configs/Constants/icons';
import { useTranslation } from 'react-i18next';
import {styles} from 'Components/Commons/Noti/styleNoti';
import moment from 'moment';
import {ListNoti} from 'Configs/Constants/ListNoti';

interface props{
   itemNotification:any,
    showSelectAll : boolean
}
export const Noti=(props:props)=>{
    const listNoti = ListNoti;
    const {t} = useTranslation();
    const formatDate =(props:any)=>{
        return(`${moment(props).format('DD/MM/YYYY')}`);
    } ;
    const formatTittle =(props : string)=>{
        switch (props) {
        case  listNoti.INITIALS_DONE_DOCUMENT_OTHER_USER :  return `${t('noti.done_document')}`;
        case listNoti.INITIALS_DOCUMENT_OTHER_USER:return `${t('noti.notify_initial_title')}`;
        case listNoti.INITIALS_DOCUMENT_USER:  return `${t('noti.notify_initial_title')}`;
        case listNoti.SIGN_DOCUMENT_USER:  return `${t('noti.notify_sign_approval_title')}`;
        case listNoti.SIGN_DONE_DOCUMENT_USER:      return `${t('noti.done_document')}`;
        case listNoti.SIGN_DONE_DOCUMENT_OTHER_USER:    return `${t('noti.done_document')}`;
        case listNoti.SIGN_DOCUMENT_OTHER_USER:    return `${t('noti.notify_sign_approval_title')}`;
        case listNoti.REJECT_INITIALS_USER:    return `${t('noti.notify_reject_initial_title')}`;
        case listNoti.REJECT_INITIALS_OTHER_USER:  return `${t('noti.notify_reject_initial_title')}`;
        case listNoti.REJECT_SIGN_USER: return `${t('noti.notify_sign_reject_title')}`;
        case listNoti.INITIALS_DONE_DOCUMENT_USER : return `${t('noti.done_document')}`;
        case listNoti.REJECT_SIGN_OTHER_USER:  return `${t('noti.notify_sign_reject_title')}`;
        default: return `${t(props)}}`;
        }
    };

    const formatContent =(type: string,props :string)=>{
        try {
            const content = JSON.parse(props);
            // const content =props;
            // console.log('propssss' ,props);
            switch (type) {
            case listNoti.INITIALS_DONE_DOCUMENT_OTHER_USER:return (`${t('noti.notify_initial_0')}`+ ' ' + `${content.data.name}` + '-'+`${content.data.email}` + ' ' +`${t('noti.notify_initial_1')}` +' '+ `${content.data.documentCode}`+'-'+ `${content.data.documentName}`);
            case listNoti.INITIALS_DOCUMENT_OTHER_USER: return (`${t('noti.notify_initial_0')}`+ ' ' + `${content.data.name}` + '-'+`${content.data.email}` + ' ' +`${t('noti.notify_initial_1')}` +' '+ `${content.data.documentCode}`+'-'+ `${content.data.documentName}`);
            case listNoti.INITIALS_DOCUMENT_USER: return (`${t('noti.notify_initial_success')}`+' '+ `${content.data.documentCode}`+'-'+ `${content.data.documentName}`);
            case listNoti.SIGN_DOCUMENT_USER: return (`${t('noti.notify_sign_approval_success')}`+' '+ `${content.data.documentCode}`+'-'+ `${content.data.documentName}`);
            case listNoti.SIGN_DOCUMENT_OTHER_USER: return (`${t('noti.notify_sign_approval_0')}`+ ' ' + `${t('noti.notify_sign_approval_1')}`+' '+ `${content.data.documentCode}`+'-'+ `${content.data.documentName}`  );
            case listNoti.REJECT_INITIALS_USER: return ( `${t('noti.notify_reject_initial_success')}`+' '+ `${content.data.documentCode}`+'-'+ `${content.data.documentName}`  );
            case listNoti.REJECT_INITIALS_OTHER_USER: return ( `${t('noti.notify_reject_initial_0')}`+' '+`${t('noti.notify_reject_initial_1')}`+' '+ `${content.data.documentCode}`+'-'+ `${content.data.documentName}`  );
            case listNoti.REJECT_SIGN_USER: return  (`${t('noti.notify_sign_reject_success')}`+' '+ `${content.data.documentCode}`+'-'+ `${content.data.documentName}`);
            case listNoti.REJECT_SIGN_OTHER_USER: return (`${t('noti.notify_sign_reject_0')}`+ ' ' + `${content.data.name}` + '-'+`${content.data.email}` + ' ' +`${t('noti.notify_sign_reject_1')}` +' '+ `${content.data.documentCode}`+'-'+ `${content.data.documentName}`);
            case listNoti.INITIALS_DONE_DOCUMENT_USER: return (`${t('noti.notify_initial_success')}`+ ' ' + `${content.data.name}` + '-'+`${content.data.email}` + ' ' +`${t('noti.notify_initial_2')}` +' '+ `${content.data.documentCode}`+'-'+ `${content.data.documentName}`);
            case listNoti.SIGN_DONE_DOCUMENT_USER: return (`${t('noti.notify_sign_approval_success')}`+ ' ' + `${content.data.name}` + '-'+`${content.data.email}` + ' ' +`${t('noti.notify_sign_approval_2')}` +' '+ `${content.data.documentCode}`+'-'+ `${content.data.documentName}`);
            case listNoti.SIGN_DONE_DOCUMENT_OTHER_USER: return (`${t('noti.notify_sign_approval_0')}`+ ' ' + `${content.data.name}` + '-'+`${content.data.email}` + ' ' +`${t('noti.notify_sign_approval_1')}` +' '+ `${content.data.documentCode}`+'-'+ `${content.data.documentName}`);
            default :
                return (`${props}` );
            }
        }
        catch {

        }
};
    return(
        <TouchableOpacity style={styles.container} onPress={()=>{}}>

            <View style={styles.mViewClipBoard}>
                {props.showSelectAll ?  <Image source={icons.ic_detail} style={styles.mIcon}/>:<Image source={icons.ic_clipboard_text} style={styles.mIcon}/>}

            </View>
            {props.itemNotification.hasReadNotification?<View style={styles.mViewData}>

                <Text style={styles.textHead} numberOfLines={2}>{formatTittle(props.itemNotification.titleNotification)}</Text>
                <Text style={styles.textDetail} numberOfLines={2}>{formatContent(props.itemNotification.titleNotification,props.itemNotification.contentNotification)}</Text>
                <View style={styles.mViewDate} >
                    <Text style={styles.textDate}>{formatDate(props.itemNotification.createTimeNotification)}</Text>
                    <Text style={styles.read}>{t('noti.read')}</Text>
                </View>
            </View>
                :
                <View style={styles.mViewData}>

                    <Text style={styles.textHeadFalse} numberOfLines={2}>{props.itemNotification.titleNotification}</Text>
                    <Text style={styles.textDetail} numberOfLines={2}>{props.itemNotification.contentNotification}</Text>
                    <View style={styles.mViewDate} >
                        <Text style={styles.textDate}>{props.itemNotification.createTimeNotification}</Text>
                        <View style={styles.mViewDot}>
                            <View style={styles.dot}></View>
                            <Text style={styles.textRead}>{t('noti.unread')}</Text>
                        </View>

                    </View>
                </View>
            }

        </TouchableOpacity>
    );
};

