import { StyleSheet } from 'react-native';
import fonts from '../../styles/fonts';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15
    },
    NotificationArea: {
        width: 345,
        height: 67,
        top: 5,
        flexDirection: 'row',
        alignItems: 'center',
        left: 15,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 1,
        shadowRadius: 3,
        borderRadius: 10,
        marginTop: 10
    },
    line: {
        width: 2,
        height: 38,
        backgroundColor: '#01E581',
        left: 5
    },
    actions: {
        width: 143,
        height: 29,
        alignItems: 'center',
        justifyContent: 'center',
    },
    areafromactions: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    cleanall: {
        color: '#ED0606',
        fontSize: 14,
        fontWeight: 'bold'
    },
    companyphoto: {
        width: 60,
        height: 60,
        borderRadius: 15
    },
    organization: {
        flexDirection: 'row'
    },
    companyname: {
        fontSize: 14,
        fontFamily: fonts.title
    },
    time: {
        fontSize: 12,
        color: '#959595',
        left: 14
    },
    status: {
        fontSize: 14,
        fontFamily: fonts.text
    },
    distance: {
        left: 10,
        width: 100
    },

})