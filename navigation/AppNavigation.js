import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SettingScreen from "../screens/SettingScreen/SettingScreen";


const Stack = createNativeStackNavigator();
export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={"Setting"} options={{ headerShown: false }} component={SettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
