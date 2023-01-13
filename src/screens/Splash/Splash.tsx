import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import { SplashImage } from '../../utils/Images';
import styles from './styles';


export function Splash(): JSX.Element {

    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login', {});
        }, 3000)
    }, [])

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <FastImage
                source={SplashImage}
                resizeMode="contain"
                style={styles.splashImageStyle} />
            <Text style={styles.splashTextStyle}>CodeFactory</Text>
        </View>
    )
}