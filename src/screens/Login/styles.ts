import { StyleSheet } from 'react-native';
import { responsiveFont, responsiveHeight, responsiveWidth } from '../../utils/Responsive';


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1
    },
    loginImageStyle: {
        width: responsiveWidth(343),
        height: responsiveHeight(253),
    },
    loginTextStyle: {
        fontSize: responsiveFont(24),
        fontWeight: '500',
        textAlign: 'center',
        color: '#3C3A36'
    },
    loginDescStyle: {
        fontSize: responsiveFont(14),
        fontWeight: '500',
        textAlign: 'center',
        color: '#78746D',
        marginTop: responsiveHeight(8)
    },
    textsContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: responsiveHeight(16)
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: responsiveHeight(52)
    },
    socialIconsContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        width: responsiveWidth(144), 
        marginTop: responsiveHeight(8)
    },
    socialIconsStyle: {
        backgroundColor: '#65AAEA', 
        width: responsiveWidth(40), 
        height: responsiveHeight(40), 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: responsiveWidth(8)
    },
    socialIconDimesntions: {
        width: responsiveWidth(24), 
        height: responsiveHeight(24)
    },
    inputsStyle: {
        alignItems: 'center', 
        marginTop: responsiveHeight(16)
    },
    forgetPassowrdBtnStyle: {
        padding: 0, 
        marginBottom: responsiveHeight(16)
    },
    loginBtnStyle: {
        backgroundColor: '#E3562A',
    },
    signUpBtnStyle: {
        padding: 0, 
        marginTop: responsiveHeight(16)
    },
    loginBtnTextStyle: { 
        color: '#fff', 
        fontSize: responsiveFont(16) 
    },
    buttonsContainer: {
        alignItems: 'center', 
        justifyContent: 'center'
    }
})


export default styles;