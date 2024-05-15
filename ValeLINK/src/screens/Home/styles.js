import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
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
      top: '5%'
    },
    // Parte da conta da pessoa que postou
    profile: {
      width: '100%', 
      height: '10%', 
      display: 'flex', 
      flexDirection: 'row', 
      alignItems: 'center',
      borderBottomWidth: 1,
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
    imageIcon: {
        width: '100%',
        height: '100%'
      },
    // Informações do post
    infopost: {
      width: '100%', 
      height: '90%',
      backgroundColor: '#b7b789'
    },
    textpost: {
      fontSize: 14,
      width: '100%',
      height: '15%',
      backgroundColor: '#c98768'
    },
    imagepost: {
      width: '100%',
      height: '65%',
      backgroundColor: '#f4f4'
    },
    actionspost: {
      width: '100%',
      height: '15%',
      backgroundColor: '#f9b762',
      flexDirection: 'row',
      justifyContent: 'space-around'
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
        justifyContent: 'center'
    },
    textButton: {
        color: '#fff', 
        fontWeight: 'bold'
    }
  });