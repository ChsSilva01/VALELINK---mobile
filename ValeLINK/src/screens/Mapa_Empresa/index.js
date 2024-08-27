import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { styles } from "./styles";

import mapa from '../../../assets/imagem_mapa.png'

import {Ionicons} from '@expo/vector-icons';

export default function MapaEmpresa({ navigation }){
    return(
        <View style={styles.container}>
            <ImageBackground source={mapa} style={{width: '100%', height: 392}}>
                <TouchableOpacity onPress = {() => navigation.navigate("Mapa")} style={{top: 35, left: 24}}><Ionicons name="arrow-back" size={30} color={'#ffff'}></Ionicons></TouchableOpacity>
            </ImageBackground>
            <View style={{width: 390, height: 510, position: 'absolute', bottom: 10, zIndex: 999, backgroundColor: '#fff', borderTopEndRadius: 28, borderTopStartRadius: 28}}>
                    <View style={{left: 31.76, top: 22, flexDirection: 'row', alignItems: 'center'}}>
                        <Ionicons name="business" size={29.77}></Ionicons>
                        <Text style={{fontSize: 24, fontWeight: 'bold', left: 8}}>Coca Cola</Text>
                        <TouchableOpacity style={{left: 130}}><Text style={{fontSize: 15, color: '#01E581'}}>Map</Text></TouchableOpacity>
                    </View>
                    <Text style={{left: 72, top: 20, fontSize: 15, color: '#696969'}}>Avenida paulista</Text>
                    <Text style={{fontSize: 14, color: '#696969', top: 30, width: 326.49, height: 206.05, left: 32}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets</Text>
                    <TouchableOpacity style={{backgroundColor: '#01E581', width: 342, height: 49, borderRadius: 7, left: 24, alignItems: 'center', justifyContent: 'center', top: 127}}><Text style={{color: '#ffff', fontSize: 20, elevation: 2}}>Se candidatar</Text></TouchableOpacity>
            </View>
        </View>
    )
}