import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    // Header
    menuheaderbutton: {
        left: 24,
        top: 18
    },
    Iconheader: {
        width: 40,
        height: 40,
        borderRadius: 50
    },
    logoheader: {
        left: 75, 
        top: 18,
        flexDirection: 'row',
        alignItems: 'center',
    },
    header:{
        backgroundColor: '#fafafa',
        width: '100%',
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        height: 95,
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        alignItems: "center",
    },

    logo:{
        width: 35,
        height: 35,
        alignSelf: "center",
        marginTop:15,
    },

    tituloHeader:{
        color: '#000', 
        fontSize: 18, 
        marginLeft: 10,
        marginTop: 17,
    },

})