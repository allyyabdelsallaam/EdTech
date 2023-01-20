import { StyleSheet, TextStyle } from 'react-native';
import { ImageStyle } from 'react-native-fast-image';
import { ViewProps } from 'react-native-svg/lib/typescript/fabric/utils';
import { responsiveFont, responsiveHeight, responsiveWidth } from '../../utils/Responsive';

type Style = {
    container: ViewProps;
    registerImageStyle: ImageStyle;
    textsContainer: ViewProps;
    signUpTextStyle: TextStyle;
    createAccountTextStyle: TextStyle;
    inputsContainer: ViewProps;
    btnsContainer: ViewProps;
    signUpBtnStyle: ViewProps;
    signUpBtnTextStyle: TextStyle;
    loginBtnTextStyle: TextStyle
}

const styles = StyleSheet.create<Style>({
    container: {
        justifyContent: 'center', 
        alignItems: 'center'
    },
    registerImageStyle: {
        width: responsiveWidth(343), 
        height: responsiveHeight(253)
    },
    textsContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: responsiveHeight(16)
    },
    signUpTextStyle: {
        fontSize: responsiveFont(24),
        fontWeight: '500',
        textAlign: 'center',
        color: '#3C3A36'
    },
    createAccountTextStyle: {
        fontSize: responsiveFont(14),
        fontWeight: '500',
        textAlign: 'center',
        color: '#78746D',
        marginTop: responsiveHeight(8)
    },
    inputsContainer: {
        alignItems: 'center',
        marginTop: responsiveHeight(16)
    },
    btnsContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    signUpBtnStyle: {
        backgroundColor: '#E3562A'
    },
    signUpBtnTextStyle: {
        color: '#fff', 
        fontSize: responsiveFont(16)
    },
    loginBtnTextStyle: {
        padding: 0, 
        marginTop: 16
    }
})


export default styles;