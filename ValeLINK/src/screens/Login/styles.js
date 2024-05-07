import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cx_email: {
        width: 303,
        height: 40,
        backgroundColor: '#F5F5F5',
        borderRadius: 13,
        fontSize: 20
    },
    cx_senha: {
        width: 303,
        height: 40,
        backgroundColor: '#F5F5F5',
        borderRadius: 13,
        fontSize: 20,   
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
        fontSize: 20
    },
    imagelogin: {
        width: '100%', 
        height: '40%', 
        display: 'flex', 
        alignItems: 'center'
    },
    imagedimensions: {
        width: '75%', 
        height: '100%', 
        top: '4%'
    },
    inputslogin: {
        display: 'flex', 
        width: '100%', 
        height: '50%', 
        justifyContent: 'space-evenly', 
        alignItems: 'center'
    },
    tittlelogin: {
        fontWeight: 'bold', 
        color: '#696969', 
        fontSize: 50,
        right: '25%'
    },
    buttonlogin: {
        width: 223, 
        height: 58, 
        backgroundColor: '#03BD60',
        borderRadius: 13,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonlogintext: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
  });