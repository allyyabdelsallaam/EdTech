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

function convertPercentageToDP(percentage: number = 100): number {
    var { width } = Dimensions.get('window');

    if (typeof percentage == 'string') {
        percentage = parseFloat(percentage);

        // In case percentage return NaN value.
        if (percentage != percentage) {
            percentage = 100;
        }
    }

    var valInDP = (percentage * width) / 100;

    return PixelRatio.roundToNearestPixel(valInDP);
}

function responsiveOnWidthScale(dp: number): number {
    const WIDTH = 428;
    return convertPercentageToDP((dp / WIDTH) * 100);
}

function convertPercentageToDPHeight(percentage: number = 100): number {
    var { height } = Dimensions.get('window');

    if (typeof percentage == 'string') {
        percentage = parseFloat(percentage);

        // In case percentage return NaN value.
        if (percentage != percentage) {
            percentage = 100;
        }
    }

    var valInDP = (percentage * height) / 100;

    return PixelRatio.roundToNearestPixel(valInDP);
}

function responsiveOnHeightScale(dp: number): number {
    const HEIGHT = 809;
    return convertPercentageToDPHeight((dp / HEIGHT) * 100);
}

function calcHeightFromPercentage(percentage: number): number {
    return screenheight * (percentage / 100);
}
function calcWidthFromPercentage(percentage: number): number {
    return screenwidth * (percentage / 100);
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
    convertPercentageToDP,
    responsiveOnWidthScale,
    responsiveOnHeightScale,
    calcHeightFromPercentage,
    calcWidthFromPercentage,
};
