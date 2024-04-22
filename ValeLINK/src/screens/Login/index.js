import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ImageBackground } from 'react-native';

import {Ionicons} from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{width: '100%', height: '10%', top: '7%'}}>
        <Text style={{bottom: '5%', color: '#04BD66', fontWeight: 'bold', fontSize: 25}}>VALELINK</Text>
      </View>

      <View style={{width: "100%", height: '40%', display: 'flex', alignItems: 'center'}}>
      <Image source={require('../../../assets/meio.png')} style={{width: '75%', height: "100%", top: '4%'}}></Image>
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
        <TouchableOpacity style={{width: 223, height: 58, backgroundColor: '#03BD60',borderRadius: 13}}><Text style={{color: '#fff'}}>Entrar</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFFF9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cx_email: {
    width: 303,
    height: 58,
    backgroundColor: '#F5F5F5',
    borderRadius: 13
  },
  cx_senha: {
    width: 303,
    height: 58,
    backgroundColor: '#F5F5F5',
    borderRadius: 13
  }
});
