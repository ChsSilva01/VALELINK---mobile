import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    config: {
      height: 140,
      width: 393,
    },
    titlefromconfig: {
      width: 393,
      height: 43,
      backgroundColor: '#00C16C1A',
      justifyContent: 'center'
    },
    titlefromconfigtext: {
      fontFamily: fonts.title,
      fontSize: 24,
      left: 21
    },
    configfromarea: {
      width: 393,
      height: 50,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 15
    },
    configtext: {
      fontFamily: fonts.titleconfig,
      color: '#696969',
      fontSize: 16,
      
    },
    gotosettings: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    icon: {
      alignItems: 'center'
    },
    
  });