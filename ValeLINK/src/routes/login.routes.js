
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/Login';
import HomeScreen from '../screens/Home';
import DrawerRoutes from './drawer.routes';
import ProfileScreen from '../screens/Perfil';
import ConfigScreen from '../screens/Configuracoes';
import FeedbackScreen from '../screens/FeedBack';
import HelpScreen from '../screens/Ajuda';
import PersonalinformationScreen from '../screens/Informacoes_pessoais';
import SecurityScreen from '../screens/Seguranca';
import FilteringScreen from '../screens/Filtragem';
import CompanyprofileScreen from '../screens/Perfil da empresa';
// import MapScreen from '../screens/Mapa';
import SearchScreen from '../screens/Pesquisar';
import WaveScreen from '../screens/Vagas';
import AddressScreen from '../screens/Endereco';

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
    <Stack.Screen name="InformacoesPessoais" component={PersonalinformationScreen} />
    <Stack.Screen name="Seguranca" component={SecurityScreen} />
    <Stack.Screen name="Filtragem" component={FilteringScreen} />
    <Stack.Screen name="Perfildaempresa" component={CompanyprofileScreen} />
    {/* <Stack.Screen name="Mapa" component={MapScreen} /> */}
    <Stack.Screen name="Pesquisar" component={SearchScreen} />
    <Stack.Screen name="Vagas" component={WaveScreen} />
    <Stack.Screen name="Endereco" component={AddressScreen} />
  </Stack.Navigator>
);

export default AuthStack;
