import { Text, View, StyleSheet } from "react-native";
// Importing React Native components for styling and layout.

import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Importing the function to create a stack navigator for navigation.

import MainScreen from "@/navigation/MainScreen";
// Importing the main screen component.

import Bubblesort from "@/navigation/Bubblesort";
import Selectionsort from "@/navigation/Selectionsort";
import Mergesort from "@/navigation/Mergesort";
import Quicksort from "@/navigation/Quicksort";
import InsertionSort from "@/navigation/Insertionsort";
import BogoSort from "@/navigation/Bogosort";
// Importing different sorting algorithm components for navigation.

import { NavigationContainer } from "@react-navigation/native";
// Importing the container that wraps the navigation stack.

const Stack = createNativeStackNavigator();
// Creating a stack navigator instance to manage screens.

export default function Index() {
  return (
    <Stack.Navigator>
      {/* Defining the navigation stack and its screens */}

      {/* Main Screen */}
      <Stack.Screen
        name="Home"
        component={MainScreen}
        options={{ headerShown: false }}
        // Hides the header for a clean UI on the main screen.
      />

      {/* Bubble Sort Screen */}
      <Stack.Screen
        name="Bubble"
        component={Bubblesort}
        options={{ headerShown: false }}
        // Navigates to the Bubble Sort implementation.
      />

      {/* Selection Sort Screen */}
      <Stack.Screen
        name="Selection"
        component={Selectionsort}
        options={{ headerShown: false }}
        // Navigates to the Selection Sort implementation.
      />

      {/* Merge Sort Screen */}
      <Stack.Screen
        name="Merge"
        component={Mergesort}
        options={{ headerShown: false }}
        // Navigates to the Merge Sort implementation.
      />

      {/* Quick Sort Screen */}
      <Stack.Screen
        name="Quick"
        component={Quicksort}
        options={{ headerShown: false }}
        // Navigates to the Quick Sort implementation.
      />

      {/* Insertion Sort Screen */}
      <Stack.Screen
        name="Insertion"
        component={InsertionSort}
        options={{ headerShown: false }}
        // Navigates to the Insertion Sort implementation.
      />

      {/* Bogo Sort Screen */}
      <Stack.Screen
        name="Bogo"
        component={BogoSort}
        options={{ headerShown: false }}
        // Navigates to the Bogo Sort implementation.
      />
    </Stack.Navigator>
  );
}
