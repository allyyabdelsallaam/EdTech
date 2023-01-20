import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import { RegisterImage } from '../../utils/Images';
import Header from '../../components/Header/Header';
import TextInputComponent from '../../components/TextInput/TextInput';
import ActionButton from '../../components/ActionButton/ActionButton';
import styles from './styles';


interface RegisterProps {
    navigation: NavigationProp<ParamListBase>
}


export default function Register(props: RegisterProps): JSX.Element {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);

    return (
        <View style={styles.container}>
            <Header withTitle={false} withBackIcon={true} onBackPressed={() => props.navigation.goBack()} />
            <FastImage source={RegisterImage} resizeMode="contain" style={styles.registerImageStyle} />
            <View style={styles.textsContainer}>
                <Text style={styles.signUpTextStyle}>Sign up</Text>
                <Text style={styles.createAccountTextStyle}>Create your account</Text>
            </View>
            <View style={styles.inputsContainer}>
                <TextInputComponent
                    value={name}
                    placeholder='Name'
                    onChangeText={(value: string) => setName(value)}
                    placeholderTextColor="#78746D" />
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
            <View style={styles.btnsContainer}>
                <ActionButton
                    ButtonText='Sign up'
                    onPress={() => { }}
                    ButtonStyle={styles.signUpBtnStyle}
                    ButtonTextStyle={styles.signUpBtnTextStyle} />
                <ActionButton
                    ButtonText='Log in'
                    onPress={() => props.navigation.navigate('Login')}
                    ButtonStyle={styles.loginBtnTextStyle} />
            </View>
        </View>
    )
}