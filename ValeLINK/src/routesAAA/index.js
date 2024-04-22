import { NavigationContainer } from "@react-navigation/native";
import TabRoutes from "./tab";

export default function Routes(){
    return (
        <NavigationContainer>
            <TabRoutes />
        </NavigationContainer>
    )
}