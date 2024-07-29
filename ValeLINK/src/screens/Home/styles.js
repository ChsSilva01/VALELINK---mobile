import { StyleSheet } from "react-native";

import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F7F7F8',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    // Área para as postagens
    scrollfunctions: {
      width: 390,
      
    },
    // Post
    post: {
      width: 345,
      height: 350,
      display: 'flex',
      left: '5%',
      top: '5%',
      backgroundColor: '#fff',
      borderWidth: 0.5,
      borderBottomWidth: 0.5
    },
    // Parte da conta da pessoa que postou
    profile: {
      width: 345, 
      height: 45, 
      display: 'flex', 
      flexDirection: 'row', 
      alignItems: 'center',
    },
    icon: {
      width: 40, 
      height: 40, 
      borderRadius: 50, 
      left: '25%'
    },
    nameUser: {
      left: '50%'
    },
    nameUsertext: {
      fontFamily: fonts.title
    },
    imageIcon: {
        width: '100%',
        height: '100%'
      },
    // Informações do post
    infopost: {
      width: 345,
      height: 268, 
    },
    textpost: {
      width: '100%',
    },
    textposstyle: {
      fontFamily: fonts.text,
      fontSize: 14,
      left: 10
      
    },
    imagepost: {
      width: 323,
      height: 202,
      borderRadius: 7
    },
    actionspost: {
      top: 10,
      width: 345,
      height: 50,
      flexDirection: 'row',
      borderBottomWidth: 0.5
    },
    iconactionspost: {
      padding: 5 
    },

    // Botões
    buttonS: {
        backgroundColor: '#00755C', 
        width: 120, 
        height: 25, 
        borderRadius: 10, 
        alignItems: 'center', 
        justifyContent: 'center',
        left: 140
    },
    buttonC: {
        backgroundColor: '#00755C', 
        width: 120, 
        height: 25, 
        borderRadius: 10, 
        alignItems: 'center', 
        justifyContent: 'center',
        margin: 10
    },
    textButton: {
        color: '#fff', 
        fontWeight: 'bold'
    }
  });