import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SVG } from '../../utils/Svg';


interface HeaderProps {
    withBackIcon?: boolean;
    onBackPressed?: () => void;
    withTitle?: boolean;
    headerTitle?: string;
    headerRightSide?: JSX.Element
}

export default function Header(props: HeaderProps): JSX.Element {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'space-between', width: '100%', paddingHorizontal: 16, marginTop: 16, flexDirection: 'row' }}>
            {props.withBackIcon ? <TouchableOpacity onPress={props.onBackPressed} style={{ borderWidth: 1, borderColor: '#BEBAB3', width: 48, height: 48, borderRadius: 48 / 2, alignItems: 'center', justifyContent: 'center' }}>
                <SVG.BackIcon width={16} height={16} />
            </TouchableOpacity> : null}
            {props.withTitle ? <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text>{props.headerTitle}</Text>
            </View> : null}
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                {props.headerRightSide}
            </View>
        </View>
    )
}