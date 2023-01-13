import { StyleSheet } from 'react-native';
import { responsiveFont, responsiveHeight, responsiveWidth } from '../../utils/Responsive';


const styles = StyleSheet.create({
    splashImageStyle: {
        width: responsiveWidth(375), 
        height: responsiveHeight(264)
    },
    splashTextStyle: {
        fontSize: responsiveFont(40), 
        fontWeight: '700', 
        textAlign: 'center', 
        textAlignVertical: 'center', 
        color: '#3C3A36',
        marginTop: responsiveHeight(16)
    }
})


export default styles;