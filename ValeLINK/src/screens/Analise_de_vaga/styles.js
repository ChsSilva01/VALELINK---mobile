import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
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
    vacancy: {
        top: 6,
        width: 353,
        height: 675,
        elevation: 2,
        borderRadius: 15,
    },
    logocompany: {
        width: 309,
        height: 277,
        left: 23,
        top: 16
    },
    button: {
        width: 311,
        height: 32,
        backgroundColor: '#01E581',
        borderRadius: 7,
        left: 25,
        top: 35,
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    textbutton: {
        color: '#fff',
        fontSize: 20,
        fontFamily: fonts.title
    },
    descriptiontext: {
        fontSize: 18,
        fontFamily: fonts.title,
        top: 40,
        left: 25
    }
})