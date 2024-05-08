import { Text, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { Header } from '../components/Header'

import TabRoutes from './tab.routes.js';


import CustomDrawer from '../components/DrawerHeader/index.js';

const Drawer = createDrawerNavigator();  



const DrawerRoutes = () => {
    return (
        <Drawer.Navigator screenOptions={{headerShown: true, header: () => <Header /> ,drawerStyle:{
            width: 250,
            height: '100%',
            justifyContent: 'center',
            backgroundColor: '#f2f2f2',
            zIndex: 11,
            
            }}} drawerContent={props => <CustomDrawer />}>
            
            <Drawer.Screen 
                name = "ValeLINK"
                component={TabRoutes}
                options = {{
                    drawerIcon: ({ color, size }) => <Ionicons name='home' color={color} size={size} />,
                    drawerLabel: 'Início'
                }}
            />
        </Drawer.Navigator>
    )
}
export default DrawerRoutes;
