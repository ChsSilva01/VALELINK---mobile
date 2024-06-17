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
        left: 18,
        fontFamily: fonts.title
    },
    infostyle:{
        fontSize: 18,
        fontFamily: fonts.infostyle
    },
    infostyleDeficiety: {
        fontSize: 18,
        fontFamily: fonts.infostyle,
        width: 254
    },
    input: {
        top: 20,
        left: 21
    },
    nameinput: {
        width: 200,
        height: 39,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#00000040'
    },
    rginput: {
        width: 117,
        height: 39,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#00000040',
        justifyContent: 'center'
    },
    dateinput: {
        width: 169,
        height: 39,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#00000040'
    },
    maritalstatusinput: {
        width: 117,
        height: 39,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#00000040',
        justifyContent: 'center'
    },
    // 
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
      },
      checkbox: {
        alignSelf: 'center',
      },
      changedatabutton: {
        width: 200,
        height: 40,
        backgroundColor: '#004443',
        borderRadius: 10,
        top: 250,
        left: 96,
        justifyContent: 'center',
        alignItems: 'center'
      },
      textbutton: {
        fontSize: 14,
        color: '#fff',
        fontFamily: fonts.titleconfig
      }
})