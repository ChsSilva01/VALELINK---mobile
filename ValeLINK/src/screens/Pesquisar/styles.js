import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    searchbar: {
      width: 300,
      borderRadius: 10,
    },
    searchresult: {
      width: 390,
      top: 75,
    },
    enterprise: {
      width: 345,
      height: 70,
      left: 24.5,
      borderRadius: 10,
      elevation: 0.5,
      flexDirection: 'row',
      alignItems: 'center'
    },
    companyphoto: {
      width: 60,
      height: 60,
      borderRadius: 50
    },
    line: {
      width: 2,
      height: 38,
      backgroundColor: '#01E581',
      left: 5
  },

  distance: {
      left: 10,
      width: 100
  },

  organization: {
      flexDirection: 'row'
  },

  companyname: {
      fontSize: 14,
      fontFamily: fonts.title
  },


});