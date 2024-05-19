import { StyleSheet } from 'react-native';
import fonts from '../../styles/fonts';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15
    },
    NotificationArea: {
        width: 393,
        height: 67,
        top: 5,
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
        borderRadius: 50,
        left: 10
    },
    company: {
        fontFamily: fonts.title,
        fontSize: 16,
        left: 10
    },
    situation: {
        fontFamily: fonts.text,
        left: 10
    },
    companyandtime: {
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    smallcircle: {
        width: 6,
        height: 6,
        backgroundColor: '#959595',
        borderRadius: 50,
        left: 15
    },
    timestyle: {
        left: 17,
        color: '#959595',
        fontSize: 12,
        bottom: 1
    },
    actions: {
        width: 143,
        height: 29,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
        backgroundColor: '#FFFFFF'
    },
    areafromactions: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    markasread: {
        color: '#01E581',
        fontSize: 14
    },
    cleanall: {
        color: '#ED0606',
        fontSize: 14
    },
    circle: {
        backgroundColor: '#01E581',
        width: 16,
        height: 16,
        borderRadius: 50
    }

})