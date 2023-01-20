import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import ActionButton from '../../components/ActionButton/ActionButton';
import TextInputComponent from '../../components/TextInput/TextInput';
import { LoginImage } from '../../utils/Images';
import { SVG } from '../../utils/Svg';
import styles from './styles';

interface LoginProps {
    navigation: NavigationProp<ParamListBase>
}

export function Login(props: LoginProps): JSX.Element {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <FastImage source={LoginImage} resizeMode="contain" style={styles.loginImageStyle} />
            </View>
            <View style={styles.textsContainer}>
                <Text style={styles.loginTextStyle}>Log in</Text>
                <Text style={styles.loginDescStyle}>Login with social networks</Text>
                <View style={styles.socialIconsContainer}>
                    <TouchableOpacity style={styles.socialIconsStyle}>
                        <SVG.FacebookIcon {...styles.socialIconDimesntions} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialIconsStyle}>
                        <SVG.InstagramIcon {...styles.socialIconDimesntions} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialIconsStyle}>
                        <SVG.GoogleIcon {...styles.socialIconDimesntions} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.inputsStyle}>
                <TextInputComponent
                    value={email}
                    placeholder='Email'
                    onChangeText={(value: string) => setEmail(value)} 
                    placeholderTextColor="#78746D" />
                <TextInputComponent
                    value={password}
                    placeholder='Password'
                    onChangeText={(value: string) => setPassword(value)}
                    isPassword={true}
                    secureTextEntry={secureTextEntry}
                    showPasswordPress={() => setSecureTextEntry(!secureTextEntry)} 
                    placeholderTextColor="#78746D" />
            </View>
            <View style={styles.buttonsContainer}>
                <ActionButton
                    ButtonText='Forgot Password?'
                    onPress={() => { }}
                    ButtonStyle={styles.forgetPassowrdBtnStyle} />
                <ActionButton
                    ButtonText='Log in'
                    onPress={() => { }}
                    ButtonStyle={styles.loginBtnStyle}
                    ButtonTextStyle={styles.loginBtnTextStyle} />
                <ActionButton
                    ButtonText='Sign up'
                    onPress={() => props.navigation.navigate('Register')}
                    ButtonStyle={styles.signUpBtnStyle} />
            </View>
        </View>
    )
}