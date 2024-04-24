import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import Home from '../screens/Home';
import Configuracoes from '../screens/Configuracoes';
import Pesquisar from '../screens/Pesquisar';

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>            
            <Tab.Screen 
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name='home' color={color} size={size} />,
                    tabBarLabel: ''
                }}
            />

            <Tab.Screen 
                name='Configurações'
                component={Configuracoes}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name='search' color={color} size={size} />,
                    tabBarLabel: ''
                }}
            />
        </Tab.Navigator> 
    )
}