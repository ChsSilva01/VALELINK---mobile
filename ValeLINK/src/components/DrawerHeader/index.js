import React from 'react';
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { styles } from './styles';
import { DrawerActions, useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

import PictureProfile from '../../../assets/bonitão.jpg';

import logodrawer from '../../../assets/logo_drawer.png';

const CustomDrawer= FC = () => {
    const navigation=  any= useNavigation();

    async function logout() {
        Alert.alert('Sair', `Você tem certeza que quer sair?`, [
            {
                text: 'Não',
                style: 'cancel',
            },

            {
                text: 'Sim',
                onPress: async () => {
                    try {
                        await AsyncStorage.clear();
                        navigation.navigate('Login');
                    } catch (error) {
                        Alert.alert('Não foi possivel sair, tente novamente!')
                    }
                }
            }
        ])
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={styles.HeaderDrawer}>
                <View style={styles.logo}><Image source={logodrawer} size={57}></Image></View>      
                <View style={styles.boxpicture}><Image source={PictureProfile} style={styles.pictureprofile}></Image></View>
                <Text style={styles.nameprofile}>Carlos</Text>
            </View>

            <View style={styles.separate}></View>

            <ScrollView
                style={styles.container}
            >
                <View>
                    <TouchableOpacity
                        style={styles.Pages}
                        onPress={() => {
                            navigation.navigate("Perfil")
                            navigation.dispatch(DrawerActions.closeDrawer())
                        }}
                    >
                        <Ionicons style={styles.iconRegistered} name="person" size={30} color="gray" />

                        <Text style={styles.PagesText}>Perfil</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                        style={styles.Pages}
                        onPress={() => {
                            navigation.navigate("Mapa")
                            navigation.dispatch(DrawerActions.closeDrawer())
                        }}
                    >
                        <Ionicons style={styles.iconRegistered} name="map" size={30} color="gray" />

                        <Text style={styles.PagesText}>Mapa</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.Pages}
                        onPress={() => {
                            navigation.navigate("Configuracoes")
                            navigation.dispatch(DrawerActions.closeDrawer())
                        }}
                    >
                        <Ionicons style={styles.iconRegistered} name="flower" size={30} color="gray" />

                        <Text style={styles.PagesText}>Configurações</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.Pages}
                        onPress={() => {
                            navigation.navigate("FeedBack")
                            navigation.dispatch(DrawerActions.closeDrawer())
                        }}
                    >
                        <Ionicons style={styles.iconRegistered} name="chatbubble" size={30} color="gray" />

                        <Text style={styles.PagesText}>FeedBack</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.Pages}
                        onPress={() => {
                            navigation.navigate("Ajuda")
                            navigation.dispatch(DrawerActions.closeDrawer())
                        }}
                    >
                        <Ionicons style={styles.iconRegistered} name="help-circle" size={30} color="gray" />

                        <Text style={styles.PagesText}>Ajuda e FAQs</Text>
                    </TouchableOpacity>
                   
                </View>


       
            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity
                    onPress={() => logout()}
                    style={styles.Sair}
                >
                    <Ionicons name="exit" size={25} color="gray" />
                    <Text style={styles.SairText}>Sair da conta</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default CustomDrawer;