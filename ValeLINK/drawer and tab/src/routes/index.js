import { NavigationContainer } from '@react-navigation/native';
import DrawerRoutes from './drawer.routes.js';

export default function Routes(){
    return (
        <NavigationContainer>
            <DrawerRoutes />
        </NavigationContainer>
    )
}

//O drawer chama o tab e depois chamamos ele lá no app.js