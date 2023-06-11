import {
    View,
    Text,
    Modal,
    FlatList,
    TouchableOpacity,
    Image,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'Store/reduxProvider';
import Header from 'Components/Commons/Header/Header';
import icons from 'Configs/Constants/icons';
import {styles} from './styles';
import {
    SET_ID_SUB_TREE,
    SET_NAME_SUB_TREE,
    SET_PARENT_ID,
    SET_TYPE,
} from 'Store/Reducers/documentCompanySlice';
interface Interface {
  visible: boolean;
  onBackpress?: () => void;
  onUnvisible?: any;
}
const DocumentSubTree = (props: Interface) => {
    const {dataTreeDocument, idTree} = useSelector((state: RootState) => ({
        dataTreeDocument: state.documentCompany.dataTreeDocumentWithRole,
        idTree: state.documentCompany.idTree,
    }));
    const dispatch = useDispatch();
    const nameApartment = dataTreeDocument.subTrees
        ?.filter(item => item.id === idTree)
        .map(item => item.name);
    const formatName = nameApartment?.toString();

    const data: any = dataTreeDocument.subTrees
        ?.filter(item => item.id === idTree)
        .map(item => item.subTrees);

    return (
        <Modal visible={props.visible} animationType="fade">
            <Header
                typeHeader={'back_header'}
                titleHeader={formatName}
                onBackPress={props.onBackpress}
            />
            <View style={styles.mContainer}>
                <FlatList
                    data={data[0]}
                    renderItem={({item}) => {
                        return (
                            <View style={styles.mItemContainer}>
                                <TouchableOpacity
                                    onPress={() => {
                                        props.onUnvisible();
                                        dispatch(SET_ID_SUB_TREE(item.id));
                                        dispatch(SET_NAME_SUB_TREE(item.name));
                                        dispatch(SET_PARENT_ID(item.parentId));
                                        dispatch(SET_TYPE(item.type));
                                    }}
                                    style={styles.mContent}>
                                    <Image
                                        source={icons.ic_tree_structure}
                                        style={styles.mIconTree}
                                        resizeMode="contain"
                                    />
                                    <Text
                                        numberOfLines={1}
                                        ellipsizeMode={'tail'}
                                        style={styles.text}>
                                        {item.name}
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.mIconRight}>
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

export default DocumentSubTree;
