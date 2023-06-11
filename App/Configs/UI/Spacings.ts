import {Spaces} from '../../Configs/Constants/Spaces';
import {Spacings} from 'react-native-ui-lib';
import {addScaleFactor} from './Scaling';

Spacings.loadSpacings(addScaleFactor(Spaces));
