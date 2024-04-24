import { NavigationContainer } from '@react-navigation/native';
import DrawerRoutes from './drawer.routes.js';

export default function Routes(){
    return (
        <NavigationContainer>
            <DrawerRoutes />
        </NavigationContainer>
    )
}