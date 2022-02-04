import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../theme';

const Styles = StyleSheet.create({
    text: {      
      fontFamily: FONTS.LIGHT,
      textAlign: 'center'
    },
    title: {
        fontFamily: FONTS.BOLD,
        textAlign: 'center',
        color: COLORS.ORANGE,
        fontSize: 24
    }
});

export { Styles }
