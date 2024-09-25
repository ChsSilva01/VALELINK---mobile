import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        width: 390,
        height: 90,
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        flexDirection: 'row',
        borderBottomWidth: 0.5,
    },  
    logoimage: {
        width: 50,
        height: 30,
        resizeMode: 'stretch',
        bottom: 5
    },
    searchvacancies: {
        width: 348,
        height: 546,
        borderRadius: 15,
        elevation: 1.5,
        left: 22,
        top: 17,
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        fontFamily: fonts.title,
        color: '#00755C',
        textAlign: 'center'
    },
    image: {
        width: 347.04,
        height: 272.06,

    },
    textinfo: {
        fontSize: 16,
        textAlign: 'center',
        width: 284,
        color: '#696969',
        fontFamily: fonts.text
    },
    course: {
        width: 307,
        height: 44,
        backgroundColor: '#F5F5F5',
        borderWidth: 1,
        borderRadius: 13,
        marginTop: 10,
        fontSize: 18
    },
    button: {
        width: 342,
        height: 49,
        backgroundColor: '#01E581',
        borderRadius: 7,
        left: 25,
        top: 75,
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textbutton: {
        color: '#fff',
        fontSize: 20
    }
})