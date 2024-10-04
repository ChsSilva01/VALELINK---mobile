import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from './styles'
import { icone } from '../../../assets/bonitão.jpg'

const Teste = ({ nome, horario, comentario, imagem, onFollow, onLike, onShare }) => {
  return (
    <View style={styles.postContainer}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <View style={styles.headerInfo}>
          <Text style={styles.nome}>Carlos</Text>
          <Text style={styles.horario}>12h</Text>
        </View>
        <TouchableOpacity style={styles.followButton} onPress={onFollow}>
          <Text style={styles.followText}>Seguir</Text>
        </TouchableOpacity>
      </View>

      {/* Comentário */}
      <Text style={styles.comentario}>lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</Text>

      {/* Imagem (Opcional) */}
      {imagem && (
        <Image
          source={icone}
          style={styles.postImage}
          resizeMode="cover"
        />
      )}

      {/* Rodapé */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={onLike}>
          <Text style={styles.footerButton}>Curtir</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onShare}>
          <Text style={styles.footerButton}>Compartilhar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Teste;
