import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';

import Home from '../screens/Home/index.js';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){
    return (
        <Drawer.Navitor>
            <Drawer.Screen 
                name = "home"
                component = {Home}
                options = {{
                    drawerIcon: ({ color,size }) => <Feather name='home' color={color} size={size}/>,
                    drawerLabel: 'icon'
                }}
            />
        </Drawer.Navitor>
    )
}