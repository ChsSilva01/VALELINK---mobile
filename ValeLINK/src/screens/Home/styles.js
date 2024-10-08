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
    postcontainer: {
      width: 345,
      marginTop: 26,
      left: 26, 
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 2,
      borderRadius: 10
    },
    headercontainer: {
      paddingTop: 10,
      flexDirection: 'row', 
      alignItems: 'center', 
      justifyContent: 'space-around'
    },
    companylogo: {
      width: 40,
      height: 40, 
      borderRadius: 15
    },
    postschedule: {
      color: '#959595', 
      fontSize: 12, 
      left: 20
    },
    contentcontainer: {
      width: 322,
      left: 11.5,
      alignItems: 'center'
    },
    commentcontainer: {
      alignItems: 'center',
      paddingTop: 10
    },
    imagecontent: {
      width: 323, 
      height: 202, 
      resizeMode: 'stretch',
      borderRadius: 15
    },
    footercontainer: {
      flexDirection: 'row', 
      top: 5
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
      fontFamily: fonts.title,
      left: 10
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
        margin: 5
    },
    buttonD: {
      backgroundColor: '#00755C', 
      width: 25, 
      height: 25, 
      borderRadius: 10, 
      alignItems: 'center', 
      justifyContent: 'center',
      margin: 5
  },
    textButton: {
        color: '#fff', 
        fontWeight: 'bold'
    }
  });