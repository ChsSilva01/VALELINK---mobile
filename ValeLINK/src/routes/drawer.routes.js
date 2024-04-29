import { Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import TabRoutes from './tab.routes.js';
import ProfileScreen from '../screens/Perfil';
import HomeScreen from '../screens/Home';
import ConfigScreen from '../screens/Configuracoes';
import FeedbackScreen from '../screens/FeedBack';
import HelpScreen from '../screens/Ajuda'

const Drawer = createDrawerNavigator();  

const DrawerRoutes = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen 
                name = "ValeLINK"
                component={TabRoutes}
                options = {{
                    drawerIcon: ({ color, size }) => <Ionicons name='home' color={color} size={size} />,
                    drawerLabel: 'Início'
                }}
            />

            <Drawer.Screen name='ProfileScreen' component={ProfileScreen} options={{ drawerIcon: ({ color, size }) => <Ionicons name='person' color={color} size={size} />,
                    drawerLabel: 'Perfil',
                    headerShown: false}}/>

            <Drawer.Screen name='HomeScreen' component={HomeScreen} options={{ drawerIcon: ({ color, size }) => <Ionicons name='map' color={color} size={size} />,
                    drawerLabel: 'Mapa'}}/>

            <Drawer.Screen name='ConfigScreen' component={ConfigScreen} options={{ drawerIcon: ({ color, size }) => <Ionicons name='settings' color={color} size={size} />,
                    drawerLabel: 'Mapa'}}/>

            <Drawer.Screen name='FeedbackScreen' component={FeedbackScreen} options={{ drawerIcon: ({ color, size }) => <Ionicons name='chatbox' color={color} size={size} />,
                    drawerLabel: 'FeedBack'}}/>

            <Drawer.Screen name='HelpScreen' component={HelpScreen} options={{ drawerIcon: ({ color, size }) => <Ionicons name='help-circle' color={color} size={size} />,
                    drawerLabel: 'Ajuda e FAQs'}}/>
        </Drawer.Navigator>
    )
}
export default DrawerRoutes;
