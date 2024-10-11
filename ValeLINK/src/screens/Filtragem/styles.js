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
        left: 90,
        fontFamily: fonts.title
    },
    professionsarea: {
        width: '100%',
        height: 218,
        backgroundColor: '#d9d9'
    },
    professionstittle: {
        fontSize: 18,
        padding: 25,
        fontFamily: fonts.title
    },
    filtercontainer: {
        width: 198,
        height: 35,
        borderRadius: 30,
        backfaceVisibility: '#ffff'
    }
})