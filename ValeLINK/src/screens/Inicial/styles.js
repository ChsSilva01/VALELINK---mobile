import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";
import { Button } from "react-native-paper";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCFFF9',
    },
    margin: {
        marginLeft: 24, 
        marginTop: 28
    },
    ImagemInicial: {
        width: 316.86,
        height: 279.05,
        top: 86,
        left: 36
    }, 
    texttitle: {
        fontSize: 20, 
        color: '#01E581',
        fontFamily: fonts.title
    },
    button: {
        width: 282,
        height: 49,
        backgroundColor: '#01E581',
        color: '#ffff'
    }

})