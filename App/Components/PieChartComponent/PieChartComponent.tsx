import {PieChart} from 'react-native-gifted-charts';
import {View, Text} from 'react-native';
export const PieChartComponent = () => {
    const pieData = [
        {value: 60, color: '#143980'},
        {value: 5, color: '#77A5FF'},
        {value: 5, color: '#EE283B'},
        {value: 15, color: '#F2B04D'},
        {value: 10, color: '#27AE60'},
        {value: 5, color: '#EEEEEE'},
    ];
    return (
        <View>
            <PieChart
                donut
                radius={70}
                innerRadius={58}
                showTextBackground
                // textBackgroundColor="white"
                // textBackgroundRadius={10}
                // radius={150}
                // showText
                textSize={20}
                // showTextBackground
                // textBackgroundRadius={26}
                data={pieData}

                centerLabelComponent={() => {
                    return (
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Text
                                style={{
                                    fontSize: 10,
                                    color: 'rgba(0, 89, 171, 1)',
                                    fontFamily: 'LexendDeca-Light'
                                }}>
                                April 2023

                            </Text>
                            <Text
                                style={{
                                    fontSize: 12,
                                    color: 'rgba(0, 89, 171, 1)',
                                    fontFamily: 'LexendDeca-Medium',
                                }}>
                                90 Contracts
                            </Text>
                        </View>
                    );
                }}
            />
        </View>
    );
};
