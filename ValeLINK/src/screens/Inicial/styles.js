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
        left: 15
    }, 
    texttitle: {
        fontSize: 20, 
        color: '#01E581',
        fontFamily: fonts.title
    },
    viewtextinfo: {
        top: 164,
    },
    textinfo: {
        textAlign: 'center',
        fontSize: 26,
        color: '#00755C'
    },
    textinfosecond: {
        textAlign: 'center',
        fontSize: 16,
        color: '#696969',
        top: 14

    },
    button: {
        width: 282,
        height: 49,
        backgroundColor: '#01E581',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        top: 111,
        left: 20,
        fontFamily: fonts.titleconfig
    },
    textbutton: {
        color: '#ffff',
        fontSize: 20
    }

})