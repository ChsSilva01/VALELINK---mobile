import React from 'react';
import { Image, TouchableOpacity, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import logo from '../../../assets/logo.png'

const DadosProps = {
    title: string=""    
}

export const Header = ({ title }= DadosProps) => {
    const navigation= any= useNavigation();

    return(
        <View style={styles.header}>
                <View style={styles.containerHeader}>    
                    <View style={styles.containerheader}>  
                        <TouchableOpacity style={styles.menuheaderbutton} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
                            <Ionicons name='menu' size={30}></Ionicons>
                        </TouchableOpacity>
                        <View style={styles.logoheader}>
                            <Image source={logo} style={{width: 55, height: 30}} resizeMode='stretch'></Image>
                            <Text style={{color: '#00C16C', fontSize: 25}}>VALELINK</Text>
                        </View>
                    </View>
                </View>
            </View>
    )

}
export default Header;

