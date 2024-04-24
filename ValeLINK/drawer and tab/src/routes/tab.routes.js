import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons'
import Carlos from '../screens/Carlos';
import SeiLa from '../screens/SeiLa';

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>            
            <Tab.Screen 
                name='Carlos'
                component={Carlos}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name='home' color={color} size={size} />,
                    tabBarLabel: ''
                }}
            />

            <Tab.Screen 
                name='SeiLa'
                component={SeiLa}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name='search' color={color} size={size} />,
                    tabBarLabel: ''
                }}
            />
        </Tab.Navigator> 
    )
}