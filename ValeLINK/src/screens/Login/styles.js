import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";
import margins from "../../styles/margins";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containergrid: {
        marginHorizontal: margins.marginH
    },
    cx_email: {
        width: 342,
        height: 58,
        fontSize: 20,
        borderBottomWidth: 1,
        borderColor: '#d9d9d9'
    },
    cx_senha: {
        width: 342,
        height: 58,
        fontSize: 20,  
        borderBottomWidth: 1,
        borderColor: '#d9d9d9'
    },
    headerlogin: {
        width: '100%', 
        height: '10%', 
        top: '7%',
        flexDirection: 'row',
        alignItems: 'center',
        
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
        display: 'flex', 
        width: '100%', 
        height: '50%', 
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
        width: 223, 
        height: 45, 
        backgroundColor: '#03BD60',
        borderRadius: 13,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonlogintext: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold'
    }
  });