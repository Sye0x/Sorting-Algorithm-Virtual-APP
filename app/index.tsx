import { Text, View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "@/navigation/MainScreen";
import Bubblesort from "@/navigation/Bubblesort";
import { NavigationContainer } from "@react-navigation/native";
import Selectionsort from "@/navigation/Selectionsort";
import Mergesort from "@/navigation/Mergesort";
import Quicksort from "@/navigation/Quicksort";
import InsertionSort from "@/navigation/Insertionsort";
import BogoSort from "@/navigation/Bogosort";

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
      <Stack.Screen
        name="Selection"
        component={Selectionsort}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Merge"
        component={Mergesort}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Quick"
        component={Quicksort}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Insertion"
        component={InsertionSort}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Bogo"
        component={BogoSort}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
