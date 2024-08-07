import { Text, View, TouchableOpacity, Image, TextInput, Dimensions } from 'react-native';
import { styles } from './styles';
import { useNavigation } from "@react-navigation/core";
import React, {useEffect, useState} from "react";
// import { useFonts, Poppins_300Light, Poppins_100Thin} from '@expo-google-fonts/poppins';
// import fonts from "../../styles/fonts";
import logo from '../../../assets/logo.png';
import {Ionicons} from '@expo/vector-icons';
import Svg,{Path} from 'react-native-svg';

import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../../services/api';

export default function Login() {
  const navigation= useNavigation();

  const [logged, setLogged] = useState(0);

  const [CPF, setCPF] = useState('');
  const [senha, setSenha] = useState('');
  
  // const [fontLoaded] = useFonts({
  //   Poppins_300Light,
  //   Poppins_100Thin
  // });
  // if (!fontLoaded){
  //   return null;
  // }
  // const CPFplaceholder = <Ionicons name='house'><Text>|  CPF</Text></Ionicons>
  async function login(){      
    const obj = { CPF, senha };
    const res = await api.post('apiVALELINK/login/login.php', obj);

    if(res.data.result === 'Dados Incorretos!'){
      Alert.alert('Ops!', 'Dados Incorretos!');
    }else{
      await AsyncStorage.setItem('@user', JSON.stringify(res.data.result[0].cod_usuario));
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
      {/* <View style={styles.containergrid}>
        <View style={styles.headerlogin}>
          <Image source={logo} style={styles.logologin} resizeMode='stretch'></Image>
          <Text style={styles.headerlabel}>VALELINK</Text>
        </View>
        <View>
          <Text>Login Aqui</Text>
        </View>

        
        {/* <View style={styles.inputslogin}>
          <Text style={styles.tittlelogin}>Login</Text>
          <TextInput style={styles.cx_email}
            Ionicons = 'lock-closed-outline'
            placeholder='CPF'
            placeholderTextColor={'#696969'}
            value={CPF}
            onChangeText={ (CPF) => setCPF(CPF)}
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

        {/* </View> */}
      {/* </View> */}
      <View style={styles.margin}>
          <View style={{flexDirection: 'row', alignItems: 'center', top: 10}}>
            <Svg
              height={453.62}
              width={1000.45}
              viewBox='0 0 1440 320'
              style={{transform: [{rotateX: '45deg'}, {rotateZ: '3.9 rad'}],position: 'absolute', right: -405}}
            >
              <Path
                fill='#01E581'
                d='M0,32L18.5,64C36.9,96,74,160,111,160C147.7,160,185,96,222,74.7C258.5,53,295,75,332,96C369.2,117,406,139,443,165.3C480,192,517,224,554,234.7C590.8,245,628,235,665,218.7C701.5,203,738,181,775,197.3C812.3,213,849,267,886,250.7C923.1,235,960,149,997,138.7C1033.8,128,1071,192,1108,186.7C1144.6,181,1182,107,1218,96C1255.4,85,1292,139,1329,138.7C1366.2,139,1403,85,1422,58.7L1440,32L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z'
              />
            </Svg>
            <Image source={logo} style={{width: 55, height: 38}} resizeMode='stretch'></Image>
            <Text style={styles.texttitle}>VALELINK</Text>
          </View>
          <View style={{alignItems: 'center', top: 57}}>
            <Text style={styles.texttitlelogin}>Login Aqui</Text>
            <Text style={styles.textwelcome}>Bem-vindo de volta bom te ver aqui!</Text>
          </View>

          <View style={styles.inputslogin}>
          <TextInput style={styles.cx_email}
            Ionicons = 'lock-closed-outline'
            placeholder="  | CPF"
            placeholderTextColor={'#696969'}
            value={CPF}
            onChangeText={ (CPF) => setCPF(CPF)}
            rightIcon={<Ionicons name='user' type='font-awesome' size={50} />}
          ></TextInput>
          <TextInput
          secureTextEntry={true} 
            style={styles.cx_senha}
            placeholder='  | Senha'
            placeholderTextColor={'#696969'}
            value={senha}
            onChangeText={ (senha) => setSenha(senha)}
          ></TextInput>
          <TouchableOpacity onPress= {() => navigation.navigate("Inicial")}><Text style={styles.textnohaveacount}>Ainda não tenho uma conta </Text></TouchableOpacity>
          <TouchableOpacity style={styles.buttonlogin} onPress={login}><Text style={styles.buttonlogintext}>Entrar</Text></TouchableOpacity>
          {/* onPress = {() => navigation.navigate('Home')} */}

        </View>
        <Svg
              top={548.25}
              height={453.62}
              width={1000.45}
              viewBox='0 0 1440 320'
              style={{transform: [{rotateX: '45deg'}, {rotateZ: '0.9 rad'}],position: 'absolute', right: -250}}
            >
              <Path
                fill='#01E581'
                d='M0,224L24,197.3C48,171,96,117,144,112C192,107,240,149,288,170.7C336,192,384,192,432,170.7C480,149,528,107,576,117.3C624,128,672,192,720,202.7C768,213,816,171,864,176C912,181,960,235,1008,240C1056,245,1104,203,1152,208C1200,213,1248,267,1296,266.7C1344,267,1392,213,1416,186.7L1440,160L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z'
              />
            </Svg>
      </View>
    </View>
  );
}


