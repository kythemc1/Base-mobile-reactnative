import {FlexAlignType, FlexStyle, StyleSheet, ViewStyle} from 'react-native';
import {Colors} from 'react-native-ui-lib';
import {Spaces} from '../../../Configs/Constants/Spaces';
import {IMAGE_SIZES} from '../../../Configs/Constants/ImageSize';

import {store} from '../../../Store/reduxProvider';
import {Concept} from './Concept';
function isNumeric(n: any) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function getType(value: any) {
    if (isNumeric(value)) {
        return 'number';
    }
    return 'string';
}
export const commonViewProps = (props: any) => {
    const {
        _key,
        borderColor,
        borderStyle,
        overflowHidden,
        shadow,
        reverseShadow,
        isRound = false,
        absolute,
        relative,
        style: customStyle,
        ...rest
    } = props;

    const authorities = store.getState().auth.user?.authorities || [];

    let width: number = props.width || props.size;
    let height: number = props.height || props.size;
    let propsStyle: any = {};

    for (const key in props) {
        const size = IMAGE_SIZES[key];
        if (size && props[key]) {
            if (typeof size === 'object') {
                width = size.width;
                height = size.height;
            } else {
                width = height = size;
            }
        }
    }

    Object.keys(rest).forEach(key => {
        if (typeof rest[key] === 'boolean' && !rest[key]) return;
        Concept.forEach((cpt, index) => {
            if (cpt.key === key && cpt.prefix === null) {
                cpt.fields.forEach(field => {
                    propsStyle = {
                        ...propsStyle,
                        [field]: 1,
                    };
                });
                return;
            }

            if (cpt.prefix && key.startsWith(cpt.prefix)) {
                const suffix = key.replace(cpt.prefix, '');
                if (cpt.suffixTypes.includes('color') && Colors[suffix]) {
                    cpt.fields.forEach(field => {
                        propsStyle[field] = Colors[suffix];
                    });
                    return;
                }
                if (
                    cpt.suffixTypes.includes(getType(suffix)) &&
          (isNumeric(suffix) || Spaces[suffix])
                ) {
                    cpt.fields.forEach(field => {
                        propsStyle[field] = isNumeric(suffix)
                            ? parseFloat(suffix)
                            : Spaces[suffix]
                                ? Spaces[suffix]
                                : null;
                    });
                    return;
                }
                const prop =
          cpt.suffixes && cpt.suffixes.find(item => item.suffix === suffix);
                if (cpt.suffixTypes.includes(getType(suffix)) && prop) {
                    cpt.fields.forEach(field => {
                        propsStyle[field] = prop.value;
                    });
                    return;
                }
                return;
            }
        });
    });

    const flattenStyles = [
        {
            borderStyle,
            overflow: overflowHidden ? 'hidden' : null,
            position: relative ? 'relative' : absolute ? 'absolute' : undefined,
            backfaceVisibility: 'hidden',
            height,
            // ...customStyle,
            ...propsStyle,
        },
        shadow && styles.shadow,
        reverseShadow && styles.reverseShadow,
    ];

    return {
        style: StyleSheet.flatten(
            !_key
                ? flattenStyles
                : authorities.includes(_key)
                    ? flattenStyles
                    : [
                        {
                            width: 0,
                            height: 0,
                        },
                    ],
        ),
    };
};

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.07,
        shadowRadius: 10,
        elevation: 1,
    },
    reverseShadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: -20,
        },
        shadowOpacity: 0.03,
        shadowRadius: 24,
        elevation: 1,
    },
});
