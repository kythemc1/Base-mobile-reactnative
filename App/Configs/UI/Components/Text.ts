import {StyleProp, StyleSheet, TextStyle} from 'react-native';
import {Colors, ThemeManager, Typography} from 'react-native-ui-lib';
import {fontWeight, fontSize, fontFamily} from '../../../Configs/Constants/Fonts';
import {addScaleFactor} from '../Scaling';

function isNumeric(n: any) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

ThemeManager.setComponentTheme(
    'Text',
    ({italic, underline, overline, lineThrough, customStyle, ...rest}: any) => {
        let propsColor: string | null = null;
        let propsStyle: TextStyle = {};

        const listKeysFontFamily: string[] = ['inter'];

        const listKeysFontSize: string[] = [
            'xs',
            'sm',
            'base',
            'lg',
            'xl',
            'xxl',
            'xxxl',
            'xxxxl',
        ];
        const listKeysFontWeight: string[] = [
            'thin',
            'extraLight',
            'light',
            'normal',
            'medium',
            'semiBold',
            'bold',
            'extraBold',
            'black',
        ];

        const listKeysTextAlign: string[] = [
            'auto',
            'left',
            'right',
            'center',
            'justify',
        ];

        Object.keys(rest).forEach(key => {
            if (typeof rest[key] === 'boolean' && !rest[key]) {
                return;
            }

            const suffix = key.split('-')[1];
            //text-16
            // font-size   // font-color
            if (key.startsWith('text-')) {
                if (isNumeric(suffix)) {
                    propsStyle = {...propsStyle, fontSize: parseInt(suffix)};
                    return;
                }
                if (listKeysFontSize.includes(suffix) && Typography[suffix]) {
                    propsStyle = {...propsStyle, ...Typography[suffix]};
                }
                if (Colors[suffix]) {
                    propsColor = Colors[suffix];
                }
            }

            // font-weight
            if (key.startsWith('font-')) {
                if (!suffix) return;
                if (listKeysFontWeight.includes(suffix) && fontWeight[suffix]) {
                    propsStyle = {...propsStyle, ...fontWeight[suffix]};
                }
                if (listKeysFontFamily.includes(suffix) && fontFamily[suffix]) {
                    propsStyle = {...propsStyle, fontFamily: fontFamily[suffix]};
                }
            }

            // line-height
            if (key.startsWith('leading-')) {
                if (!isNumeric(suffix)) return;
                propsStyle = {...propsStyle, lineHeight: parseInt(suffix)};
            }

            // text-align
            if (key.startsWith('text-')) {
                if (!suffix) return;
                if (listKeysTextAlign.includes(suffix)) {
                    propsStyle = {
                        ...propsStyle,
                        textAlign: suffix as TextStyle['textAlign'],
                    };
                }
            }
        });

        return {
            style: StyleSheet.flatten([
                {
                    //   fontFamily: propsStyle?.fontFamily
                    //     ? propsStyle?.fontFamily
                    //     : fontFamily.inter + '-Regular',
                    fontWeight: propsStyle?.fontWeight
                        ? propsStyle?.fontWeight
                        : fontWeight['normal'].fontWeight,
                    color: propsColor || Colors.mainText,
                    textDecorationLine: underline
                        ? 'underline'
                        : overline
                            ? 'overline'
                            : lineThrough
                                ? 'line-through'
                                : 'none',
                },
                propsStyle,
                customStyle,
            ]),
        };
    },
);
