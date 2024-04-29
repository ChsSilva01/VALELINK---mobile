import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#01E581',
        display: 'flex',
    },
    areaprofile: {
        top: '20%',
        backgroundColor: '#fff',
        width: '100%',
        height: '80%',
        borderTopEndRadius: 50,
        borderTopStartRadius: 50
    },
    back: {
        top: '10%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: '#fff'
    },
    actionsprofile: {
        padding: 15
    }
})