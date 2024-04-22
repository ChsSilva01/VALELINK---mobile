import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import Home from '../screens/Home';
import Configuracoes from '../screens/Configuracoes';
import Pesquisar from '../screens/Pesquisar';

import {Ionicons} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function Tabs(){
  return(
    <Tab.Navigator
    
    screenOptions={({ route }) => ({
      headerShown:false,
      tabBarStyle:{
        backgroundColor: '#00C16C'
      },
      tabBarIcon: ({ color, size }) => {
        let iconName;
        //Cores do icone
        color = "#fff",
        size = 35
    
        if (route.name === 'Home') {
          //quando estive em foco coloca uma casa caso não esteja uma cama
          // iconName = focused
          //   ? 'home-sharp'
          //   : 'bed-outline';
          // Bagulhete para verificar e o de cima e para mudar
          // iconName = focused ? 'person-outline' : 'body-outline';
          iconName = 'home-sharp';
        } else if (route.name === 'Configurações') {
          iconName = 'person-sharp';
        }else if (route.name === 'Pesquisar') {
          iconName = 'search-sharp';
        }
        
        //aqui define os ícones que irão aparecer nas Tabs
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      labelStyle:{
        fontSize: 12,
        color: '#fff'
      },
      activeTintColor: '#fff',
      inactiveTintColor: 'black', 
    })}
    
    // tabBarOptions={{
      
    //   //estilo do texto, active quando estiver ativo e inactive e quando não estive como vai ficar seu estilol
      
       
    // }}  
      
    >
      {/* Cada tab direciona para a página que eu quiser' */}
      <Tab.Screen name= "Home" component={Home} Badge="3"></Tab.Screen>
      <Tab.Screen name= "Configurações" component={Configuracoes}></Tab.Screen>
      <Tab.Screen name= "Pesquisar" component={Pesquisar}></Tab.Screen>
    </Tab.Navigator>
  )
}

export default function App(){
  const Stack = createStackNavigator();
  return(
    
    <NavigationContainer style={{backgroundColor: '#fff'}}>
      {/* <Drawer.Navigator>
        <Drawer.Screen name = "Pesquisar" component={Pesquisar} />
        <Drawer.Screen name = "Configurações" component={Configuracoes} />
      </Drawer.Navigator> */}
    <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: true, headerTitle: null  }} >

      <Stack.Screen 
          name="Tabs" 
          component={Tabs}
          options={{
            title:'Meu Aplicativo',
            headerStyle:{
            backgroundColor: '#000',
            height: 75,
            
            },
            headerTintColor: '#000' , 
            headerShown: true,         
          }}
          >

      </Stack.Screen>
      {/* <Stack.Screen name="Configuracoes" component={Configuracoes} options={{headerTitle: null }}></Stack.Screen> */}
      <Stack.Screen name="Pesquisar" component={Pesquisar} ooptions={{headerTitle: null }} ></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>

  )
}

