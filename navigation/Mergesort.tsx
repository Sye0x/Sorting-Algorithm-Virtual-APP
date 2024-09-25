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

const Mergesort = () => {
  // State to hold the line widths
  const [lineWidths, setLineWidths] = useState(generateRandomWidths());
  const [isSorting, setIsSorting] = useState(false); // State to track if sorting is in progress
  const navigation = useNavigation<any>();

  // Merge Sort Helper Functions
  const merge = async (arr: any, l: any, m: any, r: any) => {
    let n1 = m - l + 1;
    let n2 = r - m;

    // Create temp arrays
    let L = arr.slice(l, m + 1);
    let R = arr.slice(m + 1, r + 1);

    let i = 0,
      j = 0,
      k = l;

    // Merge the temp arrays back into arr[l..r]
    while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
        arr[k] = L[i];
        i++;
      } else {
        arr[k] = R[j];
        j++;
      }
      // Update the state for each step of merge
      setLineWidths([...arr]);
      await new Promise((resolve) => setTimeout(resolve, 1)); // Visualize with delay
      k++;
    }

    // Copy the remaining elements of L[], if any
    while (i < n1) {
      arr[k] = L[i];
      i++;
      k++;
      setLineWidths([...arr]);
      await new Promise((resolve) => setTimeout(resolve, 1));
    }

    // Copy the remaining elements of R[], if any
    while (j < n2) {
      arr[k] = R[j];
      j++;
      k++;
      setLineWidths([...arr]);
      await new Promise((resolve) => setTimeout(resolve, 1));
    }
  };

  const mergeSort = async (arr: any, l: any, r: any) => {
    if (l >= r) {
      return; // Base case
    }
    let m = l + Math.floor((r - l) / 2);

    // Sort first and second halves
    await mergeSort(arr, l, m);
    await mergeSort(arr, m + 1, r);

    // Merge the sorted halves
    await merge(arr, l, m, r);
  };

  // Merge Sort function with UI update
  const handleMergeSort = async () => {
    if (isSorting) return; // Prevent multiple clicks
    setIsSorting(true); // Set sorting state

    let arr = [...lineWidths];
    await mergeSort(arr, 0, arr.length - 1);

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
        <Pressable style={styles.playbutton} onPress={handleMergeSort}>
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

export default Mergesort;
