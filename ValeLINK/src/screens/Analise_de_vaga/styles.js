import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    header: {
        width: 390,
        height: 90,
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 0.5
    },
   
    logoimage: {
        width: 46,
        height: 37,
        resizeMode: 'stretch'
    },
    vacancy: {
        width: 353,
        elevation: 2,
        borderRadius: 15,
    },
    logocompany: {
        width: 309,
        height: 277,
        left: 23,
        top: 16
    }
})