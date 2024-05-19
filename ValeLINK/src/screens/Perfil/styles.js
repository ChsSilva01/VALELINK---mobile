import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#01E581',
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
    Settingsprofile: {
        bottom: '12%',
        width: '100%',
        height: '100%'
    },
    Settingsname: {
        alignItems: 'center'
    },
    nameprofile: {
        fontWeight: 'bold',
        fontSize: 20
    },
    descriptionsprofile: {
        color: '#696969',
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
})