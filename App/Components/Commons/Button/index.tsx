import {Text, TouchableOpacity} from 'react-native';
import {styles} from 'Components/Commons/Button/styles';
import sizes from 'Configs/UI/Sizes';

interface buttonInterface {
    text: string,
    typeButton: 'secondary' | 'primary',
    sizeButton: 'large' | 'normal' | 'small' | 'compact' | 'no_line' | 'custom',
    onPressButton: () => void
}

export const Button = (props: buttonInterface) => {

    return (
        <>
            {props.sizeButton == 'custom' ?
                props.typeButton == 'secondary' ?
                    <TouchableOpacity style={[styles.mContainerSecondaryCustom, {
                        marginHorizontal: sizes._16sdp,
                        width: sizes._screenWidth * 0.8,
                        height: sizes._56sdp
                    }]} onPress={props.onPressButton}>
                        <Text style={styles.mTextSecondaryCustom}>
                            {props.text}
                        </Text>
                    </TouchableOpacity> :
                    <TouchableOpacity style={[styles.mContainerPrimaryCustom, {
                        marginHorizontal: sizes._16sdp,
                        width: sizes._screenWidth * 0.8,
                        height: sizes._56sdp
                    }]} onPress={props.onPressButton}>
                        <Text style={styles.mTextPrimaryCustom}>
                            {props.text}
                        </Text>
                    </TouchableOpacity> : null}
            {props.sizeButton == 'large' ?
                props.typeButton == 'secondary' ?
                    <TouchableOpacity style={styles.mContainerSecondaryLarge} onPress={props.onPressButton}>
                        <Text style={styles.mTextSecondaryLarge}>
                            {props.text}
                        </Text>
                    </TouchableOpacity> :
                    <TouchableOpacity style={styles.mContainerPrimaryLarge} onPress={props.onPressButton}>
                        <Text style={styles.mTextPrimaryLarge}>
                            {props.text}
                        </Text>
                    </TouchableOpacity> : null}
            {props.sizeButton == 'normal' ?
                props.typeButton == 'secondary' ?
                    <TouchableOpacity style={styles.mContainerSecondaryNormal} onPress={props.onPressButton}>
                        <Text style={styles.mTextSecondaryNormal}>
                            {props.text}
                        </Text>
                    </TouchableOpacity> :
                    <TouchableOpacity style={styles.mContainerPrimaryNormal} onPress={props.onPressButton}>
                        <Text style={styles.mTextPrimaryNormal}>
                            {props.text}
                        </Text>
                    </TouchableOpacity> : null}
            {
                props.sizeButton == 'small' ?
                    props.typeButton == 'secondary' ?
                        <TouchableOpacity style={styles.mContainerSecondarySmall} onPress={props.onPressButton}>
                            <Text style={styles.mTextSecondarySmall}>
                                {props.text}
                            </Text>
                        </TouchableOpacity> :
                        <TouchableOpacity style={styles.mContainerPrimarySmall} onPress={props.onPressButton}>
                            <Text style={styles.mTextPrimarySmall}>
                                {props.text}
                            </Text>
                        </TouchableOpacity> : null}
            {
                props.sizeButton == 'compact' ?
                    props.typeButton == 'secondary' ?
                        <TouchableOpacity style={styles.mContainerSecondaryCompact} onPress={props.onPressButton}>
                            <Text style={styles.mTextSecondaryCompact}>
                                {props.text}
                            </Text>
                        </TouchableOpacity> :
                        <TouchableOpacity style={styles.mContainerPrimaryCompact} onPress={props.onPressButton}>
                            <Text style={styles.mTextPrimaryCompact}>
                                {props.text}
                            </Text>
                        </TouchableOpacity> : null}
            {
                props.sizeButton == 'no_line' ?
                    props.typeButton == 'secondary' ?
                        <TouchableOpacity style={styles.mContainerNoLine} onPress={props.onPressButton}>
                            <Text style={styles.mTextNoLine}>
                                {props.text}
                            </Text>
                        </TouchableOpacity> : null
                    : null}
        </>

    );
};
