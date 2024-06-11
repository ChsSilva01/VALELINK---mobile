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
    cityinput: {
        width: 198.47,
        height: 39,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#00000040'
    },
    numberinput: {
        width: 130.99,
        height: 39,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#00000040'
    },
    addressinput: {
        width: 197.48,
        height: 39,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#00000040'
    },
    CEPinput: {
        width: 130.99,
        height: 39,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#00000040'
    },
    residencetimeinput: {
        width: 115.11,
        height: 39,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#00000040'
    },
    typeofresidenceinput: {
        width: 155.8,
        height: 39,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#00000040'
    },
    referencepointinput: {
        width: 262.98,
        height: 39,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#00000040'
    },
    referencepointinput: {
        width: 262.98,
        height: 39,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#00000040'
    },
    valueinput: {
        width: 115.11,
        height: 39,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#00000040'
    },
    neighborhood: {
        width: 155.8,
        height: 39,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#00000040'
    },
})