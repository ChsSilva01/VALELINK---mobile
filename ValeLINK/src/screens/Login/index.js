import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ImageBackground } from 'react-native';
import { styles } from './styles';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerlogin}>
        <Text style={styles.headerlabel}>VALELINK</Text>
      </View>

      <View style={styles.imagelogin}>
        <Image source={require('../../../assets/login_image.png')} style={styles.imagedimensions}></Image>
      </View>
      
      <View style={{display: 'flex', width: '100%', height: '50%', justifyContent: 'space-evenly', alignItems: 'center'}}>
        <Text style={{fontWeight: 'bold', color: '#696969', fontSize: 50}}>Login</Text>
        <TextInput style={styles.cx_email}
          Ionicons = 'lock-closed-outline'
          placeholder='Email'
        ></TextInput>
        <TextInput style={styles.cx_senha}
          placeholder='Senha'
        ></TextInput>
        <TouchableOpacity style={{width: 223, height: 58, backgroundColor: '#03BD60',borderRadius: 13}} onPress = {() => navigation.navigate('Home')}><Text style={{color: '#fff'}}>Entrar</Text></TouchableOpacity>
      </View>
    </View>
  );
}


