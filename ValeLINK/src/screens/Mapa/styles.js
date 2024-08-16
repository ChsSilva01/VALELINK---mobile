import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      map: {
          height: '30%'
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
    map:{
        height: '70%',
        
    },
    search:{
        height: '30%'
    },
    distancia:{
       marginTop: -40
    },
    marcador: {
        width: 90,
        height: 70,
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