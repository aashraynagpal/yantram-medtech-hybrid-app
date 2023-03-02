import HomeScreen from "./screens/HomeScreen";
import SecondScreen from "./screens/SecondScreen";
import ThirdScreen from "./screens/ThirdScreen";
import FourthScreen from "./screens/FourthScreen";
import FifthScreen from "./screens/FifthScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Second"
          component={SecondScreen}
          options={{headerShown: false}}
          
        />
        <Stack.Screen 
          name="Third"
          component={ThirdScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Fourth"
          component={FourthScreen}
          options={{headerShown: false}}
        /> 
        <Stack.Screen 
          name="Fifth"
          component={FifthScreen}
          options={{headerShown: false}} 
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
