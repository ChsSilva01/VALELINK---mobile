import { NavigationContainer } from '@react-navigation/native';
import DrawerRoutes from './drawer.routes.js';
import LoginScreen from './login.routes.js';

const userLoggedIn = false;
export default function Routes(){

    return (
        <NavigationContainer>
             {/* {userLoggedIn ? ( */}
                <DrawerRoutes />
            {/* ) : (
                <LoginScreen />
            )} */}
        </NavigationContainer>
    )
}
//Aqui eu deixo bagulhado eu tiro esse Drawer ae, e coloco no login para quando clicar ir para esse lugar. bruh sei la