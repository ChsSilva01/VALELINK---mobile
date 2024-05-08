
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/Login';
import HomeScreen from '../screens/Home';
import DrawerRoutes from './drawer.routes';
import ProfileScreen from '../screens/Perfil';
import ConfigScreen from '../screens/Configuracoes';
import FeedbackScreen from '../screens/FeedBack';
import HelpScreen from '../screens/Ajuda';

const Stack = createStackNavigator();

const AuthStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Home" component={DrawerRoutes} />
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="Perfil" component={ProfileScreen} />
    <Stack.Screen name="Configuracoes" component={ConfigScreen} />
    <Stack.Screen name="FeedBack" component={FeedbackScreen} />
    <Stack.Screen name="Ajuda" component={HelpScreen} />
  </Stack.Navigator>
);

export default AuthStack;
