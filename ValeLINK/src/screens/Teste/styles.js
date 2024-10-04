import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    postContainer: {
      top: 100,
      backgroundColor: '#fff',
      marginBottom: 15,
      padding: 10,
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 2,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
    },
    headerInfo: {
      flexDirection: 'column',
    },
    nome: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    horario: {
      fontSize: 12,
      color: '#777',
    },
    followButton: {
      backgroundColor: '#007BFF',
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderRadius: 5,
    },
    followText: {
      color: '#fff',
      fontSize: 14,
    },
    comentario: {
      fontSize: 14,
      color: '#333',
      marginBottom: 10,
    },
    postImage: {
      width: '100%',
      height: 200,
      borderRadius: 8,
      marginBottom: 10,
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      borderTopWidth: 1,
      borderTopColor: '#eee',
      paddingTop: 10,
    },
    footerButton: {
      fontSize: 14,
      color: '#007BFF',
    },
  });
  