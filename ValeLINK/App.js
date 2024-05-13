import 'react-native-gesture-handler';

import Routes from "./src/routes";

import {
  useFonts,
  Poppins_400Regular
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Poppins_400Regular
  })

  if(!fontsLoaded){
    <AppLoading />
  }
  return (
    <Routes />
  );
}