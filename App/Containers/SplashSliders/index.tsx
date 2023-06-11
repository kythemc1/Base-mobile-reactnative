// import React, {useEffect, useRef, useState} from 'react';
// import {TouchableOpacity, View, Text} from 'react-native';
// import Swiper from 'react-native-swiper';
import {
    SafeAreaView,
    Image,
    StatusBar,
    FlatList,
    Text,
    View,
} from 'react-native';
import {useTranslation} from 'react-i18next';
// import {style} from './SplashSlidersStyles';
import {HeaderOnboard} from 'Components/Commons/HeaderOnboard';
import {HeaderSkip} from 'Components/Commons/HeaderSkip';
import {Button} from 'Components/Commons/Button';
import images from 'Configs/Constants/images';
import React from 'react';
import {colors} from 'Configs/UI/Colors';
import sizes from 'Configs/UI/Sizes';
import {styles} from 'Containers/SplashSliders/SplashSlidersStyles';

// Item slide
const Slide = ({item}: { item: any }) => {
    return (
        <View style={{alignItems: 'center'}}>
            <Image
                source={item?.image}
                style={{
                    width: sizes._screenWidth,
                    height: sizes._screenWidth * 0.75,
                    resizeMode: 'contain'
                }}
            />
            <View>
                <Text style={styles.title}>{item?.title}</Text>
                <Text style={styles.subtitle}>{item?.subtitle}</Text>
            </View>
        </View>
    );
};


export default function SplashSliders({navigation}: { navigation: any }) {
    const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
    const ref = React.useRef<any>();
    const {t} = useTranslation();
    /**NOTE**
     *Sides item data
     **/
    const slides = [
        {
            id: '1',
            image: images.Onboard,
            title: t('on_boarding.welcome_title'),
            subtitle: t('on_boarding.content'),
        },
        {
            id: '2',
            image: images.SoanThao,
            title: t('on_boarding.on_boarding_drafting'),
            subtitle: t('on_boarding.content'),
        },
        {
            id: '3',
            image: images.ThuongThao,
            title: t('on_boarding.on_boarding_negotiation'),
            subtitle: t('on_boarding.content'),
        },
        {
            id: '4',
            image: images.KyKet,
            title: t('on_boarding.on_boarding_contract'),
            subtitle: t('on_boarding.content'),
        },
        {
            id: '5',
            image: images.QuanLy,
            title: t('on_boarding.on_boarding_manage'),
            subtitle: t('on_boarding.content'),
        },
        {
            id: '6',
            image: images.TichHop,
            title: t('on_boarding.on_boarding_integration'),
            subtitle: t('on_boarding.content'),
        },
    ];

    /**NOTE**
     *handle next slide
     **/
    const goToNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        if (nextSlideIndex != slides.length) {
            const offset = nextSlideIndex * sizes._screenWidth;
            // @ts-ignore
            ref?.current.scrollToOffset({offset});
            setCurrentSlideIndex(currentSlideIndex + 1);
        }
    };
    /**NOTE**
     *handle skip slide
     **/
    const skip = () => {
        const lastSlideIndex = slides.length - 1;
        const offset = lastSlideIndex * sizes._screenWidth;
        // @ts-ignore
        ref?.current.scrollToOffset({offset});
        setCurrentSlideIndex(lastSlideIndex);
    };

    const Footer = () => {
        return (
            <View
                style={styles.mIndicatorContainer}>
                {/* Indicator container */}
                <View
                    style={styles.mIndicator}>
                    {/* Render indicator */}
                    {slides.map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.indicator,
                                currentSlideIndex == index && {
                                    backgroundColor: colors.color_primary1,
                                    width: sizes._24sdp,
                                },
                            ]}
                        />
                    ))}
                </View>

                {/* Render buttons */}
                <View style={{marginBottom: sizes._60sdp}}>
                    {currentSlideIndex == slides.length - 1 ? (
                        <Button
                            text={`${t('sign_in.sign_in')}`}
                            typeButton={'secondary'}
                            sizeButton={'large'}
                            onPressButton={() => navigation.navigate('SignIn')}
                        />
                    ) : (
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <Button
                                text={`${t('sign_in.sign_in')}`}
                                typeButton={'secondary'}
                                sizeButton={'normal'}
                                onPressButton={() => {
                                    navigation.navigate('SignIn');
                                }}
                            />
                            {currentSlideIndex != slides.length - 1 && currentSlideIndex != 0 ?
                                <Button
                                    text={`${t('sign_in.next')}`}
                                    typeButton={'secondary'}
                                    sizeButton={'no_line'}
                                    onPressButton={() => {
                                        goToNextSlide();
                                    }}
                                /> :
                                <Button
                                    text={`${t('sign_in.start')}`}
                                    typeButton={'primary'}
                                    sizeButton={'normal'}
                                    onPressButton={() => {
                                        goToNextSlide();
                                    }}
                                />
                            }
                        </View>
                    )}
                </View>
            </View>
        );
    };
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: colors.color_background, paddingVertical: sizes._32sdp}}>
            <StatusBar backgroundColor={colors.color_background}/>
            {currentSlideIndex != 0 ?
                <HeaderSkip onSkip={skip}/>
                :
                <HeaderOnboard/>
            }
            <FlatList
                ref={ref}
                scrollEnabled={false}
                contentContainerStyle={{height: sizes._screenHeight}}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={slides}
                pagingEnabled
                renderItem={({item}) => <Slide item={item}/>}
            />
            <Footer/>
        </SafeAreaView>
    );


}

