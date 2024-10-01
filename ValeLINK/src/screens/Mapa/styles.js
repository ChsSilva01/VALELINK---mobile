import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";


export const styles = StyleSheet.create({
      map: {
          height: '100%'
      },
      search: {
          height: '30%'
      },
      distancia: {
        marginTop: -40
      },
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 45,
        paddingStart: 10
    },
    tittle: {
        fontSize: 24,
        left: 125,
        fontFamily: fonts.title
    },
    search:{
        height: '30%'
    },
    distancia:{
       marginTop: -40
    },
    marcador: {
        resizeMode: 'stretch',
        flexDirection: 'column',
        borderRadius: 8,
        alignItems: 'center'
    },
    marcadorImage: {
        width: 70,
        height: 70,
        resizeMode: 'cover'
    }
})