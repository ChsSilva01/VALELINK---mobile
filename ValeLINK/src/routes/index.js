import { NavigationContainer } from '@react-navigation/native';
import DrawerRoutes from './drawer.routes.js';
import AuthStack from './login.routes.js';

const userLoggedIn = false;
export default function Routes(){

    return (
        <NavigationContainer>
             {userLoggedIn ? (
                <DrawerRoutes />
            ) : (
                <AuthStack />
            )}
        </NavigationContainer>
    )
}