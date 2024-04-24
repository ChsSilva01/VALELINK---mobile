import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import TabRoutes from './tab.routes.js';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){
    return (
        <Drawer.Navigator>
            <Drawer.Screen 
                name = "home"
                component={TabRoutes}
                options = {{
                    drawerIcon: ({ color, size }) => <Ionicons name='home' color={color} size={size} />,
                    drawerLabel: 'Início'
                }}
            />
        </Drawer.Navigator>
    )
}