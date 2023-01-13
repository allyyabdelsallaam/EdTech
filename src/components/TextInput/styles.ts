import { StyleSheet, ViewStyle } from 'react-native';
import { responsiveHeight, responsiveWidth } from '../../utils/Responsive';

type Style = {
    container: ViewStyle;
    passwordIcon: ViewStyle;
    passwordIconStyle: ViewStyle
}

const styles = StyleSheet.create<Style>({
    container: {
        borderRadius: responsiveWidth(12), 
        borderColor: '#BEBAB3', 
        width: responsiveWidth(370), 
        padding: responsiveHeight(15), 
        borderWidth: 1, 
        marginBottom: responsiveHeight(16), 
        justifyContent: 'center'
    },
    passwordIcon: {
        position: 'absolute', 
        right: responsiveWidth(16),
        zIndex: 1
    },
    passwordIconStyle: {
        width: responsiveWidth(24), 
        height: responsiveHeight(24)
    }
})

export default styles