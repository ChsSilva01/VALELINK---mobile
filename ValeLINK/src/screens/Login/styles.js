import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";
import margins from "../../styles/margins";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCFFF9',
    },
    containergrid: {
        marginHorizontal: margins.marginH
    },
    cx_email: {
        width: 342,
        height: 49,
        fontSize: 20,
        borderRadius: 13,
        backgroundColor: '#F5F5F5'
    },
    cx_senha: {
        top: 31,
        width: 342,
        height: 49,
        fontSize: 20,  
        borderRadius: 13,
        backgroundColor: '#F5F5F5'
        
    },
    headerlogin: {
        flexDirection: 'row',
        alignItems: 'center',
        top: 35
        
    },
    logologin: {
        width: 55,
        height: 30
    },
    headerlabel: {
        color: '#04BD66', 
        fontSize: 20,
        // fontFamily: fonts.title
        fontFamily: fonts.text
    },
    imagedimensions: {
        width: 328, 
        height: 316.75, 
    },
    inputslogin: {
        top: 138,
        display: 'flex', 
        justifyContent: 'space-evenly', 
        alignItems: 'center',
    },
    tittlelogin: {
        fontWeight: 'bold', 
        color: '#696969', 
        fontSize: 32,
        right: '25%',
    },
    buttonlogin: {
        top: 90,
        width: 342, 
        height: 49, 
        backgroundColor: '#01E581',
        borderRadius: 13,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonlogintext: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold'
    },

    margin: {
        marginLeft: 24, 
        marginTop: 28
    }, 
    texttitle: {
        fontSize: 20, 
        color: '#01E581',
        fontFamily: fonts.title
    },
    texttitlelogin: {
        fontSize: 30, 
        color: '#01E581',
        fontFamily: fonts.title
    },
    textwelcome: {
        fontSize: 20, 
        color: '#424242', 
        width: 217,
        textAlign: 'center',
        fontFamily: fonts.text
    },
    textnohaveacount: {
        top: 34, 
        left: 70, 
        color: '#01E581',
        fontFamily: fonts.infostyle
    }
  });