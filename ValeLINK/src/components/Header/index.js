import React, {useState} from "react";
import { Image, TouchableOpacity, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import logo from '../../../assets/logo.png';
import fonts from '../../styles/fonts';

const DadosProps = {
    title: string="",  
}

export const Header = ({ title, navigation }= DadosProps) => {
    const nav = navigation || useNavigation();

    return(
        <View style={styles.header}>             
            <TouchableOpacity style={styles.menuheaderbutton} onPress={() => nav.dispatch(DrawerActions.toggleDrawer())}>
                <Ionicons name='menu' size={30}></Ionicons>
            </TouchableOpacity>
            <View style={styles.logoheader}>
                <Image source={logo} style={{width: 55, height: 30}} resizeMode='stretch'></Image>
                <Text style={{color: '#00C16C', fontSize: 25, fontFamily: fonts.title}}>ValeLINK</Text>
                <TouchableOpacity style={{left: 65}} onPress={() => nav.navigate('Pesquisar')}><Ionicons name="search" size={30} color={'#888686'}></Ionicons></TouchableOpacity>
            </View>
        </View>
    )

}
export default Header;

