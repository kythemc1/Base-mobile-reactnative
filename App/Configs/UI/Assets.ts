import {Assets} from 'react-native-ui-lib';

Assets.loadAssetsGroup('icons', {});

Assets.loadAssetsGroup('tabs', {
    Home: require('../../Assets/Dashboard/Home.png'),
    MyDoc: require('../../Assets/Dashboard/MyDoc.png'),
    CompanyDoc: require('../../Assets/Dashboard/CompanyDoc.png'),
    CompanyManager: require('../../Assets/Dashboard/CompanyManager.png'),
    Report: require('../../Assets/Dashboard/Report.png'),
});
