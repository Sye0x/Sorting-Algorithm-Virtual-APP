import React, { useState } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

// Initial random widths for the bars
const initialWidths = Array.from(
  { length: 70 },
  () => Math.floor(Math.random() * 85) + 1
);

const Bubblesort = () => {
  // State to hold the line widths
  const [lineWidths, setLineWidths] = useState(initialWidths);
  const [isSorting, setIsSorting] = useState(false); // State to track if sorting is in progress

  // Bubble Sort Algorithm with visual updates
  const bubbleSort = async () => {
    if (isSorting) return; // Prevent multiple clicks on the button
    setIsSorting(true); // Set sorting state to true

    let arr = [...lineWidths]; // Copy the current line widths
    let n = arr.length;

    // Perform bubble sort with async to animate
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap adjacent elements
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

          // Update the state to trigger UI re-render
          setLineWidths([...arr]);

          // Add a delay for visualization
          await new Promise((resolve) => setTimeout(resolve, 5));
        }
      }
    }

    setIsSorting(false); // Sorting complete, set sorting state to false
    if (!isSorting) {
    }
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

      {/* Play button */}
      <View style={styles.buttoncontainer}>
        <Pressable style={styles.playbutton} onPress={bubbleSort}>
          <Feather name="play" size={50} color="#11cd2f" />
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
    alignItems: "center",
    marginVertical: hp(6),
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
});

export default Bubblesort;
