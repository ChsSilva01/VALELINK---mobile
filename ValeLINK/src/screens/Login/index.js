import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { styles } from './styles';
import { useNavigation } from "@react-navigation/core";
import React, {useEffect, useState} from "react";
// import { useFonts, Poppins_300Light, Poppins_100Thin} from '@expo-google-fonts/poppins';
// import fonts from "../../styles/fonts";
import logo from '../../../assets/logo.png';
import {Ionicons} from '@expo/vector-icons';

import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../../services/api';

export default function Login() {
  const navigation= useNavigation();

  const [logged, setLogged] = useState(0);

  const [email, setemail] = useState('');
  const [senha, setSenha] = useState('');
  
  // const [fontLoaded] = useFonts({
  //   Poppins_300Light,
  //   Poppins_100Thin
  // });
  // if (!fontLoaded){
  //   return null;
  // }

  async function login(){      
    const obj = { email, senha };
    const res = await api.post('apiVALELINK/login/login.php', obj);

    if(res.data.result === 'Dados Incorretos!'){
      Alert.alert('Ops!', 'Dados Incorretos!');
    }else{
      await AsyncStorage.setItem('@user', JSON.stringify(res.data.result[0].cod_login));
      await AsyncStorage.setItem('@senha', JSON.stringify(res.data.result[0].senha));
      
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }]
      });
    }
  }

  const checkLogin = async () => {
    const user = await AsyncStorage.getItem('@user');
    
    if(user){
      setLogged(1);

      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    } else {
      setLogged(2)
    }
  }

  useEffect(() => {
    checkLogin();
  }, []);
  
  return (
    <View style={styles.container}>
      <View style={styles.containergrid}>
        <View style={styles.headerlogin}>
          <Image source={logo} style={styles.logologin} resizeMode='stretch'></Image>
          <Text style={styles.headerlabel}>VALELINK</Text>
        </View>

          <Image source={require('../../../assets/login_image.png')} style={styles.imagedimensions} resizeMode='stretch'></Image>
        
        <View style={styles.inputslogin}>
          <Text style={styles.tittlelogin}>Login</Text>
          <TextInput style={styles.cx_email}
            Ionicons = 'lock-closed-outline'
            placeholder='Email'
            placeholderTextColor={'#696969'}
            value={email}
            onChangeText={ (email) => setemail(email)}
            rightIcon={<Ionicons name='user' type='font-awesome' size={50} />}
          ></TextInput>
          <TextInput
          secureTextEntry={true} 
            style={styles.cx_senha}
            placeholder='Senha'
            placeholderTextColor={'#696969'}
            value={senha}
            onChangeText={ (senha) => setSenha(senha)}
          ></TextInput>
          <TouchableOpacity style={styles.buttonlogin} onPress={login}><Text style={styles.buttonlogintext}>Entrar</Text></TouchableOpacity>
          {/* onPress = {() => navigation.navigate('Home')} */}

        </View>
      </View>
    </View>
  );
}


