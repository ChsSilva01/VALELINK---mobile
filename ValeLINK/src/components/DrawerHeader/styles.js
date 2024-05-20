import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";


export const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10,
        
    },
    HeaderDrawer: {
        width: '100%',
        height: 250,
        justifyContent: 'center',
        backgroundColor: '#01E581',
    },
    logo: {
        width: '100%',
        height: '40%',
        alignItems: 'flex-end',
        padding: 15
    },
    boxpicture: {
        width: 93,
        height: 93,
        borderWidth: 2,
        borderRadius: 50,
        left: 10,
        borderColor: '#ffff'
    },
    pictureprofile: {
        width: '100%',
        height: '100%',
        borderRadius: 50
    },
    nameprofile: {
        left: 20,
        fontSize: 20,
        color: '#FFFF',
        fontFamily: fonts.title
    },
    separate: { 
        width: '90%', 
        backgroundColor: '#c1c1c1', 
        height: 0.5, 
        alignSelf: 'center', 
        marginBottom: 5, 
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