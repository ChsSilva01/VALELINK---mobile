import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Home from '../screens/Home';
import Configuracoes from '../screens/Configuracoes';
import Pesquisar from '../screens/Pesquisar';
import Notificacoes from '../screens/Notificacoes';
import Empresas from '../screens/Empresas';

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return (
     <Tab.Navigator
        screenOptions={({ route }) => ({
        headerShown:false,
         tabBarStyle:{
        backgroundColor: '#00C16C'
        },
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        //Cores do icone
        color = "#fff",
        size = 35
    
        if (route.name === 'Home') {
          //quando estive em foco coloca uma casa caso não esteja uma cama
          iconName = focused
            ? 'home-sharp'
            : 'home-outline';
          // Bagulhete para verificar e o de cima e para mudar
        } else if (route.name === 'Pesquisar') {
            iconName = focused ? 'search-sharp' : 'search-outline';
        } else if (route.name === 'Empresas') {
            iconName = focused ? 'business-sharp' : 'business-outline';
        }else if (route.name === 'Notificações') {
            iconName = focused ? 'notifications-sharp' : 'notifications-outline';
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
      <Tab.Screen name= "Home" component={Home} options={{tabBarLabel: ''}}></Tab.Screen>
      <Tab.Screen name= "Pesquisar" component={Pesquisar} options={{tabBarLabel: ''}}></Tab.Screen>
      <Tab.Screen name= "Empresas" component={Empresas} options={{tabBarLabel: ''}}></Tab.Screen>
      <Tab.Screen name= "Notificações" component={Notificacoes} options={{tabBarLabel: ''}}></Tab.Screen>
    </Tab.Navigator>
    )
}