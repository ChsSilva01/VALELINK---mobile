import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    infostyle:{
        fontSize: 18,
        fontFamily: fonts.infostyle
    },
    input: {
        width: '100%',
        height: '100%',
    },
    nameinput: {
        width: 200,
        height: 39,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#00000040'
    },
})