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
        top: 20,
        left: 21
    },
    skillandcompetencies: {
        width: 340,
        height: 138,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#00000040',
        textAlignVertical: 'top'
    },
    changedatabutton: {
        width: 200,
        height: 40,
        backgroundColor: '#004443',
        borderRadius: 10,
        top: 125,
        left: 96,
        justifyContent: 'center',
        alignItems: 'center'
      },
      textbutton: {
        fontSize: 14,
        color: '#fff',
        fontFamily: fonts.titleconfig
      },
      objective: {
        width: 340,
        height: 104,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#00000040',
        textAlignVertical: 'top'
      },
      professionalhistory: {
        width: 340,
        height: 138,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#00000040',
        textAlignVertical: 'top'
      },
      academictraining: {
        width: 340,
        height: 62,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#00000040',
        textAlignVertical: 'top'
      },
})