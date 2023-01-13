import React from 'react';
import { View, Text, TouchableOpacity, TextStyle, ViewStyle } from 'react-native';
import styles from './styles';

type ActionTypeProps = {
    onPress: () => void
    ButtonText: string;
    ButtonTextStyle?: TextStyle
    ButtonStyle?: ViewStyle
}

export default function ActionButton(props: ActionTypeProps): JSX.Element {
    return (
        <TouchableOpacity style={[styles.ButtonContainer, props.ButtonStyle]} onPress={props.onPress}>
            <Text style={[styles.ButtonTextStyle, props.ButtonTextStyle]}>{props.ButtonText}</Text>
        </TouchableOpacity>
    )
}