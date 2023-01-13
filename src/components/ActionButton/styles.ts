import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { responsiveFont, responsiveHeight, responsiveWidth } from '../../utils/Responsive';


type Style = {
    ButtonContainer: ViewStyle;
    ButtonTextStyle: TextStyle;
}

const styles = StyleSheet.create<Style>({
    ButtonContainer: {
        padding: responsiveHeight(16), 
        borderRadius: responsiveWidth(16), 
        width: responsiveWidth(370), 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    ButtonTextStyle: {
        fontSize: responsiveFont(14), 
        color: '#78746D', 
        fontWeight: '500', 
        textAlign: 'center'
    }
})


export default styles