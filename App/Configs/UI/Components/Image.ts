import {ThemeManager} from 'react-native-ui-lib';
import {IMAGE_SIZES} from '../../../Configs/Constants/ImageSize';

ThemeManager.setComponentTheme('Image', (props: any) => {
    let width = props.width || props.size;
    let height = props.height || props.size;

    for (const key in props) {
        const size = IMAGE_SIZES[key];
        if (size) {
            if (typeof size === 'object') {
                width = size.width;
                height = size.height;
            } else {
                width = height = size;
            }
        }
    }

    return {
        style: [{width, height, borderRadius: props?.radius}, props.style],
    };
});
