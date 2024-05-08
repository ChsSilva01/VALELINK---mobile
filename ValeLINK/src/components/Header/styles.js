import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    // Header
    containerheader: {
        top: '10%',
        width: '100%',
        height: 75,
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuheaderbutton: {
        width: 30,
        height: 30
    },
    logoheader: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '45%',
        left: '20%',
    },
    header:{
        backgroundColor: '#fafafa',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.1,
        elevation: 6,
        shadowRadius: 15,
        shadowOffset : { width: 1, height: 5},
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        height: 85,
        borderBottomWidth: 0.5
    },

    menu:{
        position: 'absolute',
        left: 20,
        alignSelf: "center",
        top: 13,
    },

    logo:{
        width: 35,
        height: 35,
        alignSelf: "center",
        marginTop:15,
    },

    containerHeader:{
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
    },

    tituloHeader:{
        color: '#000', 
        fontSize: 18, 
        marginLeft: 10,
        marginTop: 17,
    },

})