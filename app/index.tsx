import { Text, View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "@/navigation/MainScreen";
import Bubblesort from "@/navigation/Bubblesort";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={MainScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Bubble"
        component={Bubblesort}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
