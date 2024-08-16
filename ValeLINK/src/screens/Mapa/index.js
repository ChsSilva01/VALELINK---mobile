//npm install react-native-maps --save-exact
//expo install expo-location
//expo install expo-permissions

import React, {useState,useEffect,useRef} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { styles } from './styles';

import {Ionicons} from '@expo/vector-icons';

import marcador from '../../../assets/marcador.png';
import casa from '../../../assets/casa.png';
import cama from '../../../assets/cama.png';
import restaurante from '../../../assets/restaurante.png';
import escola from '../../../assets/escola.png';
import mercado from '../../../assets/mercado.png';
import prefeitura from '../../../assets/prefeitura.png';
import igreja from '../../../assets/igreja.png';
import hospital from '../../../assets/hospital.png';

import config from '../../config';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapViewDirections from 'react-native-maps-directions';

export default function Mapa({ navigation }) {
  const [origin,setOrigin]=useState(null);
  //2 parte busca e rotas
  const mapEl=useRef(null);
  const [distance,setDistance]=useState(null);
  const [destination,setDestination]=useState(null);
 

  useEffect(()=>{
    (async function(){      
      let { status } = await Location.requestForegroundPermissionsAsync(); 
        if (status === 'granted') {
            let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
            setOrigin({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.00922,
                longitudeDelta: 0.00421
            })
        } else {
            throw new Error('Location permission not granted');
        }
    })();
  },[]);


  return(
    <View style={styles.container}>
       <View style={styles.header}>
                <TouchableOpacity onPress = {() => navigation.navigate("Home")}><Ionicons name="arrow-back" size={30}></Ionicons></TouchableOpacity>
                <Text style={styles.tittle}>Mapa</Text>
        </View>  
            <MapView
          style={styles.map}
          initialRegion={origin}
          showsUserLocation={true}
          zoomEnabled={true}
          loadingEnabled={true} 
             /* 2 parte  busca e rotas */ 
          ref={mapEl}           
          >
          {/*MARCADOR NO MAPA*/}
          {/*1*/}
          <Marker
            coordinate={{latitude: -24.492119638680506, longitude: -47.83520075432022}} //lugar onde você quer marcar 
            title={'Casa do Carlos'} //titulo do marcador
            description={'Onde o aluno Carlos habita'}
          >
            <View style={styles.marcador}>
              <Image 
                source={casa}
                style={styles.marcadorImage}
              >
                
              </Image>

              <Text style={{color: 'white', fontSize: 13}}> Meu Local </Text>
            </View>
          </Marker>

          {/*2*/}
          <Marker
            coordinate={{latitude: -24.50292701656733, longitude: -47.84849244428356}} //lugar onde você quer marcar 
            title={'Hotel Valle Sul'} //titulo do marcador
            description={'Hotel para descanso'}
          >
            <View style={styles.marcador}>
              <Image 
                source={cama}
                style={styles.marcadorImage}
              >
                
              </Image>

              <Text style={{color: 'white', fontSize: 13}}> Meu Local </Text>
            </View>
          </Marker>
          
          {/*3*/}
          <Marker
            coordinate={{latitude: -24.49595145937353, longitude: -47.84123767327935}} //lugar onde você quer marcar 
            title={'Restaurante e Churrascaria Turismo'} //titulo do marcador
            description={'Local para se alimentar'}
          >
            <View style={styles.marcador}>
              <Image 
                source={restaurante}
                style={styles.marcadorImage}
              >
                
              </Image>

              <Text style={{color: 'white', fontSize: 13}}> Meu Local </Text>
            </View>
          </Marker>
          
          {/*4*/}
          <Marker
            coordinate={{latitude: -24.507352350241643, longitude: -47.841135602819016}} //lugar onde você quer marcar , 
            title={'Escola Adventista'} //titulo do marcador
            description={'Lugar para se aprender'}
          >
            <View style={styles.marcador}>
              <Image 
                source={escola}
                style={styles.marcadorImage}
              >
                
              </Image>

              <Text style={{color: 'white', fontSize: 13}}> Meu Local </Text>
            </View>
          </Marker>

          
          {/*5*/}
          <Marker
            coordinate={{latitude: -24.49866386400438, longitude: -47.84651210151832}} //lugar onde você quer marcar , 
            title={'Supermercados Magnânimo Registro'} //titulo do marcador
            description={'Descrição do local do marcador'}
          >
            <View style={styles.marcador}>
              <Image 
                source={mercado}
                style={styles.marcadorImage}
              >
                
              </Image>

              <Text style={{color: 'white', fontSize: 13}}> Meu Local </Text>
            </View>
          </Marker>
          
          {/*6*/}
          <Marker
            coordinate={{latitude: -24.49549491385862, longitude: -47.84524904401853}} //lugar onde você quer marcar , 
            title={'Prefeitura Municipal de Registro'} //titulo do marcador
            description={'Local para fazer reclamação sobre a cidade'}
          >
            <View style={styles.marcador}>
              <Image 
                source={prefeitura}
                style={styles.marcadorImage}
              >
                
              </Image>

              <Text style={{color: 'white', fontSize: 13}}> Meu Local </Text>
            </View>
          </Marker>

          
          {/*7*/}
          <Marker
            coordinate={{latitude: -24.492977533076342, longitude: -47.84923571250352}} //lugar onde você quer marcar , 
            title={'Igreja batista renovo'} //titulo do marcador
            description={'Lugar para se rezar'}
          >
            <View style={styles.marcador}>
              <Image 
                source={igreja}
                style={styles.marcadorImage}
              >
                
              </Image>

              <Text style={{color: 'white', fontSize: 13}}> Meu Local </Text>
            </View>
          </Marker>
          
          {/*8*/}
          <Marker
            coordinate={{latitude: -24.49637132877656, longitude: -47.84704417785808}} //lugar onde você quer marcar , 
            title={'Hospital'} //titulo do marcador
            description={'Lugar para se tratar'}
          >
            <View style={styles.marcador}>
              <Image 
                source={hospital}
                style={styles.marcadorImage}
              >
                
              </Image>

              <Text style={{color: 'white', fontSize: 13}}> Hospital </Text>
            </View>
          </Marker>
{/* 2 parte busca e rotas  */}


 



</MapView>






    </View>
  );
}


