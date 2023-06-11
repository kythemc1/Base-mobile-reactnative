import {Typography} from 'react-native-ui-lib';
import {addScaleFactor} from './Scaling';
import {fontSize} from '../../Configs/Constants/Fonts';

Typography.loadTypographies(
    addScaleFactor(fontSize, ['fontSize', 'lineHeight']),
);
