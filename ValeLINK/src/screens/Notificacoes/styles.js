import { StyleSheet } from 'react-native';
import fonts from '../../styles/fonts';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    NotificationArea: {
        width: 393,
        height: 67,
        top: 5,
        backgroundColor: '#00C16C1A',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 24 
    },
    informationofcompany: {
        left: 10
    },
    companyimage: {
        width: 40,
        height: 40,
        borderRadius: 50
    },
    company: {
        fontFamily: fonts.title
    },
    situation: {
        fontFamily: fonts.text
    }

})