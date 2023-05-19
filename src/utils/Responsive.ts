import { Dimensions, PixelRatio, Platform } from 'react-native';

const { fontScale } = Dimensions.get('window');

class Responsive {

    private WIDTH: number = 0;
    private HEIGHT: number = 0;

    constructor() {
        this.WIDTH = 414;
        this.HEIGHT = 896;
    }

    calcHeight = (size: number, enableResponsive: boolean = false): number => {
        var { height } = Dimensions.get('window');
        var percentage = (size / this.HEIGHT) * 100;
        var calculations = (percentage * height) / 100;
        return PixelRatio.roundToNearestPixel(calculations);
    };

    calcWidth = (size: number, enableResponsive: boolean = false): number => {
        var { width } = Dimensions.get('window');
        var percentage = (size / this.WIDTH) * 100;
        var calculations = (percentage * width) / 100;
        return PixelRatio.roundToNearestPixel(calculations);
    };

    calcFont = (size: number, enableResponsive: boolean = false): number => {
        const newSize = size;
        if (Platform.OS === 'ios') {
            return PixelRatio.roundToNearestPixel(newSize);
        } else {
            return PixelRatio.roundToNearestPixel(newSize) - 2;
        }
    };
}

const instance = new Responsive();
const responsiveWidth = instance.calcWidth;
const responsiveHeight = instance.calcHeight;
const responsiveFont = instance.calcFont;
const screenwidth = Dimensions.get('window').width;
const screenheight = Dimensions.get('window').height;

export default instance;

export {
    responsiveWidth,
    responsiveHeight,
    responsiveFont,
    screenwidth,
    screenheight,
};
