import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10,
        
    },
    HeaderDrawer: {
        width: '100%',
        height: 150,
        justifyContent: 'center'
    },
    logo: {
        width: '100%',
        height: '20%'
    },
    boxpicture: {
        width: '45%',
        height: '75%',
        borderWidth: 2,
        borderRadius: 50,
        left: 10
    },
    pictureprofile: {
        width: '100%',
        height: '100%',
        borderRadius: 50
    },
    nameprofile: {
        left: 10
    },
    separate: { 
        width: '90%', 
        backgroundColor: '#c1c1c1', 
        height: 0.5, 
        alignSelf: 'center', 
        marginBottom: 5, 
        marginTop: 20 
    },
    Pages:{
        flexDirection: 'row',
        marginTop: 15,
    },

    Sair:{
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 15,
    },

    iconRegistered:{
        justifyContent: 'center',
        alignSelf: 'center',
    },

    PagesText:{
        
        fontSize: 18,
        color: '#000',
        alignSelf: "center",
        marginLeft: 10,
    },

    SairText:{
        
        fontSize: 18,
        color: '#000',
        alignSelf: "center",
        marginLeft: 20,
    },

    footer:{
        padding: 10,
    },

    
})