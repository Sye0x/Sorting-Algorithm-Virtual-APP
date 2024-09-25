import { View, StyleSheet } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Bars = () => {
  // Generate random widths between 1 and 85 for 100 lines
  const lineWidths = Array.from(
    { length: 550 },
    () => Math.floor(Math.random() * 85) + 1
  );

  return <View></View>;
};

export default Bars;

const styles = StyleSheet.create({});
