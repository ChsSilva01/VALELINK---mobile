import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../screens/Home/index.js';
import AuthRoutes from './tab.routes';
import Usuario from '../screens/Pesquisar/index.js';




const Stack = createNativeStackNavigator();

function StackNavigator(){
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          
           <Stack.Screen name="Home" component={Home} /> 
            <Stack.Screen name="Auto" component={AuthRoutes} />
            <Stack.Screen name="Usuario" component={Usuario} /> 
      
          
        </Stack.Navigator>
    )
}

function AppRoutes(){
    return(
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    )
}
export default AppRoutes;