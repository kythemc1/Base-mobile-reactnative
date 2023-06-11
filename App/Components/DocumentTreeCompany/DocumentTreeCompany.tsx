import {
    View,
    Text,
    Modal,
    Image,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import React from 'react';
import {colors} from 'Configs/UI/Colors';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'Store/reduxProvider';
import Header from 'Components/Commons/Header/Header';
import icons from 'Configs/Constants/icons';
import {styles} from './styles';
import {SET_ID_TREE, SET_NAME_TREE, SET_PARENT_ID, SET_TYPE} from 'Store/Reducers/documentCompanySlice';
interface Interface {
  visible: boolean;
  handleUnVisible?: any;
  onShowSubTree?: any;
  onBackPress?: () => void;
}
const DocumentTreeCompany = (props: Interface) => {
    const dispatch = useDispatch();
    const {dataTreeDocument} = useSelector((state: RootState) => ({
        dataTreeDocument: state.documentCompany.dataTreeDocumentWithRole,
    }));
    return (
        <Modal
            visible={props.visible}
            animationType={'fade'}
            style={{backgroundColor: colors.color_background}}>
            <Header
                typeHeader={'back_header'}
                titleHeader={dataTreeDocument.name}
                onBackPress={props.onBackPress}
            />
            <View style={styles.mContainer}>
                <FlatList
                    data={dataTreeDocument.subTrees}
                    renderItem={({item}) => {            
                        return (
                            <View
                                style={styles.mItemContainer}>
                                <TouchableOpacity
                                    onPress={()=>{
                                        props.handleUnVisible();
                                        dispatch(SET_ID_TREE(item.id));
                                        dispatch(SET_NAME_TREE(item.name));
                                        dispatch(SET_TYPE(item.type));
                                        dispatch(SET_PARENT_ID(item.parentId));
                                    }}
                                    style={styles.mContent}>
                                    <Image
                                        source={icons.ic_tree_structure}
                                        style={styles.mIconTree}
                                        resizeMode="contain"
                                    />
                                    <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.text}>
                                        {item.name}
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.mIconRight}
                                    onPress={() => {
                                        props.onShowSubTree();
                                        dispatch(SET_ID_TREE(item.id));
                                        dispatch(SET_NAME_TREE(item.name));
                                    }}>
                                    <Image
                                        source={icons.ic_back_right}
                                        style={styles.mIconRight}
                                        resizeMode="contain"
                                    />
                                </TouchableOpacity>
                            </View>
                        );
                    }}
                />
            </View>
        </Modal>
    );
};

export default DocumentTreeCompany;
