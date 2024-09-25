import React, { useState } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { useNavigation } from "@react-navigation/native";

// Initial random widths for the bars
const generateRandomWidths = () =>
  Array.from({ length: 70 }, () => Math.floor(Math.random() * 85) + 1);

const Quicksort = () => {
  // State to hold the line widths
  const [lineWidths, setLineWidths] = useState(generateRandomWidths());
  const [isSorting, setIsSorting] = useState(false); // State to track if sorting is in progress
  const navigation = useNavigation<any>();

  // Quick Sort Helper Functions
  const partition = async (arr: any, low: any, high: any) => {
    let pivot = arr[high]; // Pivot element is taken as the last element
    let i = low - 1; // Index of the smaller element

    for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
        i++;

        // Swap arr[i] and arr[j]
        [arr[i], arr[j]] = [arr[j], arr[i]];
        setLineWidths([...arr]); // Update UI
        await new Promise((resolve) => setTimeout(resolve, 1)); // Visual delay
      }
    }

    // Swap arr[i+1] with arr[high] (pivot element)
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    setLineWidths([...arr]); // Update UI
    await new Promise((resolve) => setTimeout(resolve, 1)); // Visual delay

    return i + 1; // Return partition index
  };

  const quickSort = async (arr: any, low: any, high: any) => {
    if (low < high) {
      // Find partition index
      let pi = await partition(arr, low, high);

      // Recursively sort elements before and after partition
      await quickSort(arr, low, pi - 1);
      await quickSort(arr, pi + 1, high);
    }
  };

  // Quick Sort function with UI update
  const handleQuickSort = async () => {
    if (isSorting) return; // Prevent multiple clicks
    setIsSorting(true); // Set sorting state

    let arr = [...lineWidths];
    await quickSort(arr, 0, arr.length - 1);

    setIsSorting(false); // Sorting complete
  };

  // Reset function to reset the state
  const handleReset = () => {
    setIsSorting(false); // Stop sorting if ongoing
    setLineWidths(generateRandomWidths()); // Reset line widths
    navigation.navigate("Home"); // Navigate to home
  };

  return (
    <View style={styles.background}>
      {/* Render the lines dynamically */}
      {lineWidths.map((width, index) => (
        <View
          key={index}
          style={[styles.lines, { width: wp(width) }]} // Dynamic width
        />
      ))}

      {/* Play and Return buttons */}
      <View style={styles.buttoncontainer}>
        <Pressable style={styles.playbutton} onPress={handleQuickSort}>
          <Feather name="play" size={50} color="#11cd2f" />
        </Pressable>
        <Pressable style={styles.returnbutton} onPress={handleReset}>
          <Ionicons name="return-down-back-outline" size={50} color="#11cd2f" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lines: {
    height: hp(0.65), // Set height to 0 since you're using borders for the line
    borderWidth: hp(0.1),
    borderColor: "#11cd2f",
    marginBottom: hp(0.4),
  },
  background: {
    flex: 1,
    backgroundColor: "black",
    padding: hp(1),
    paddingTop: hp(9),
    paddingBottom: hp(2),
  },
  buttoncontainer: {
    justifyContent: "flex-end",
    marginVertical: hp(6),
    flexDirection: "row",
  },
  playbutton: {
    borderWidth: wp(0.5),
    borderColor: "#52de6f",
    borderRadius: hp(10),
    height: hp(10),
    width: wp(42),
    justifyContent: "center",
    alignItems: "center",
  },
  returnbutton: {
    borderWidth: wp(0.5),
    borderColor: "#52de6f",
    borderRadius: hp(10),
    height: hp(10),
    width: hp(10),
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: wp(8),
  },
});

export default Quicksort;
