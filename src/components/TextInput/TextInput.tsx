import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { SVG } from '../../utils/Svg';
import styles from './styles';


type TextInputProps = {
    containerStyle?: {};
    value?: string;
    onChangeText: (value: string) => void;
    style?: {};
    placeholder: string;
    placeholderTextColor?: string;
    isPassword?: boolean;
    showPasswordPress?: () => void
    secureTextEntry?: boolean;
}


export default function TextInputComponent(props: TextInputProps): JSX.Element {
    return (
        <View style={[styles.container, props.containerStyle]}>
            {props.isPassword ?
                <TouchableOpacity onPress={props.showPasswordPress} style={styles.passwordIcon}>
                    <SVG.PasswordIcon {...styles.passwordIconStyle} />
                </TouchableOpacity> : null}
            <TextInput
                value={props.value}
                onChangeText={props.onChangeText}
                style={props.style}
                placeholder={props.placeholder}
                placeholderTextColor={props.placeholderTextColor}
                secureTextEntry={props.secureTextEntry} />
        </View>
    )
}