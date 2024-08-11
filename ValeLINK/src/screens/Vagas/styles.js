import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    margin: { 
        marginTop: 28
    },
    header: {
        width: 390,
        height: 90,
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 0.5
    },
    logoimage: {
        width: 46,
        height: 37,
        resizeMode: 'stretch'
    },
    searchview: {
        width: 348,
        height: 122,
        left: 22,
        top: 17,
        elevation: 2,
        backgroundColor: '#ffff',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    course: {
        width: 307,
        height: 44,
        backgroundColor: '#F5F5F5',
        borderWidth: 1,
        borderRadius: 13
    },
    pickerContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 8,
        overflow: 'hidden',
        width: 125,
        height: 29,
        marginTop: 30
    },
    pickertypeofwork: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    pickeritem: {
        fontSize: 12,
        height: 44,
        borderRadius: 5
    },
    button: {
        width: 342,
        height: 49,
        backgroundColor: '#01E581',
        borderRadius: 7,
        left: 25,
        top: 400,
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textbutton: {
        color: '#fff',
        fontSize: 20
    },
    vacancies: {
        width: 390,
        height: 70,
        backgroundColor: '#ffff',
        top: 17,
        flexDirection: 'row',
        alignItems: 'center'
    },
    imagecompany: {
        width: 58,
        height: 58,
    },
    line: {
        width: 2,
        height: 38,
        backgroundColor: '#01E581',
    },
    texttitlevacancie: {
        fontSize: 14,
        fontFamily: fonts.title
    },
    textnamecompany: {
        fontSize: 14,
        fontFamily: fonts.text,
        color: '#444444'
    }
})
