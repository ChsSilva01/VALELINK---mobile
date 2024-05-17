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
      width: '100%',
      
    },
    // Post
    post: {
      width: '90%',
      height: 500,
      display: 'flex',
      borderRadius: 15,
      left: '5%',
      top: '5%',
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#ff80'
    },
    // Parte da conta da pessoa que postou
    profile: {
      width: '100%', 
      height: '10%', 
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
      width: '100%', 
    },
    textpost: {
      fontSize: 14,
      width: '100%',
    },
    textposstyle: {
      fontFamily: fonts.text
    },
    imagepost: {
      width: '100%',
    },
    actionspost: {
      top: 10,
      width: '100%',
      height: '15%',
      flexDirection: 'row',
    },
    iconactionspost: {
      margin: 10
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