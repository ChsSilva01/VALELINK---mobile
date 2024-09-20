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
        borderRadius: 13,
        fontSize: 18
    },
    pickerStyles:{
        width:'100%',
        height: '100%',   
        overflow: 'hidden'
    },
    button: {
        width: 342,
        height: 49,
        backgroundColor: '#01E581',
        borderRadius: 7,
        left: 25,
        top: 100,
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    textbutton: {
        color: '#fff',
        fontSize: 20,
        fontFamily: fonts.title
    },
    vacancies: {
        width: 390,
        height: 70,
        backgroundColor: '#ffff',
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
    },
    filters: {
        width: 92, 
        height: 29, 
        backgroundColor: '#ffff',
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 5, 
        elevation: 2,
    },
    filterstext: {
        fontWeight: 'bold',
        color: '#01E581', 
        fontSize: 14,
    }
})
