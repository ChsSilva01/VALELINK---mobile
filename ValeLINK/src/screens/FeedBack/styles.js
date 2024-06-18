import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCFFF9',
        alignItems: 'center'
    },
    headerfeed: {
        width: 393,
        height: 80,
    },
    imagefeeddimensions: {
        width: 283,
        height: 250,
    },
    areaforevaluation: {
        width: 348,
        height: 358,
        top: 39,
        backgroundColor: '#fff',
        borderRadius: 15,
        borderWidth: 0.3,
        elevation: 4,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    feedback: {
        width: 50, 
        height: 50, 
        borderRadius: 50
    },
    send: {
        width: 311, 
        height: 33, 
        backgroundColor: '#00C16C', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 5
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 45,
        paddingStart: 10
    },
    tittle: {
        fontSize: 24,
        left: 85,
        fontFamily: fonts.title
    },

  });