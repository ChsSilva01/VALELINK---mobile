import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 393,
        height: 852,
        
    },
    areaprofile: {
        top: '20%',
        backgroundColor: '#fff',
        width: '100%',
        height: '80%',
        borderTopEndRadius: 50,
        borderTopStartRadius: 50,
        alignItems: 'center'
    },
    back: {
        top: '10%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    actionsprofile: {
        padding: 15,
        color: '#fff',
    },
    circleimage: {
        borderRadius: 100,
        width: 150,
        height: 150,
        backgroundColor: '#fff',
        bottom: '12%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileimage: {
        width: 140,
        height: 140,
        borderRadius: 100
    },
    employeefollowersandprofile: {
        flexDirection: 'row',
        height: 100,
        width: 394,
        justifyContent: 'space-around'
    },
    infostatus: {
        alignItems: 'center',
        paddingTop: 10
    },
    Settingsprofile: {
        width: '100%',
        height: '100%',
    },
    Settingsname: {
        alignItems: 'center'
    },
    nameprofile: {
        fontWeight: 'bold',
        fontSize: 20
    },
    descriptionsprofile: {
        fontSize: 13.12,
        color: '#696969',
        width: 294,
        height: 71,
        textAlign: 'center'
    },
    Settingsfromperson: {
        width: '100%',
        height: 'auto',
    },
    organize: {
        flexDirection: 'row'
    },
    personalinformation: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 70,
        borderBottomWidth: 1,
        justifyContent: 'space-between',
        padding: 10,
        borderColor: '#E9E9E9'
        
    },
    textpersonalinformation: {
        fontSize: 18,
        left: 5
    },
    follow: {
        backgroundColor: '#00755C',
        width: 248,
        height: 41,
        borderRadius: 20.19,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5
    },
    amount: {
        color: '#004443', 
        fontSize: 15.14,
        fontFamily: fonts.title
    },
    quantityofwhat: {
        color: '#00755C', 
        fontSize: 13.12,
        fontFamily: fonts.title
    },
    followtext: {
        color: '#FFFF'
    }
})