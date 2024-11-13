import { Text, View, StyleSheet, Pressable } from "react-native";
// Importing responsive layout utilities
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
// Importing navigation hook
import { useNavigation } from "@react-navigation/native";

const MainScreen = () => {
  // Using the navigation hook to navigate between screens
  const navigation = useNavigation<any>();

  return (
    // Background view for the main screen
    <View style={styles.background}>
      {/* First row of sorting algorithm options */}
      <View style={styles.containerrow}>
        <Pressable
          style={styles.container}
          onPress={() => navigation.navigate("Bubble")}
        >
          <Text style={styles.containertext}>Bubble</Text>
          <Text style={styles.containertext}>Sort</Text>
        </Pressable>
        <Pressable
          style={styles.container}
          onPress={() => navigation.navigate("Selection")}
        >
          <Text style={styles.containertext}>Selection</Text>
          <Text style={styles.containertext}>Sort</Text>
        </Pressable>
      </View>

      {/* Second row of sorting algorithm options */}
      <View style={styles.containerrow}>
        <Pressable
          style={styles.container}
          onPress={() => navigation.navigate("Merge")}
        >
          <Text style={styles.containertext}>Merge</Text>
          <Text style={styles.containertext}>Sort</Text>
        </Pressable>
        <Pressable
          style={styles.container}
          onPress={() => navigation.navigate("Quick")}
        >
          <Text style={styles.containertext}>Quick</Text>
          <Text style={styles.containertext}>Sort</Text>
        </Pressable>
      </View>

      {/* Third row of sorting algorithm options */}
      <View style={styles.containerrow}>
        <Pressable
          style={styles.container}
          onPress={() => navigation.navigate("Insertion")}
        >
          <Text style={styles.containertext}>Insertion</Text>
          <Text style={styles.containertext}>Sort</Text>
        </Pressable>
        <Pressable
          style={styles.container}
          onPress={() => navigation.navigate("Bogo")}
        >
          <Text style={styles.containertext}>Bogo</Text>
          <Text style={styles.containertext}>Sort</Text>
        </Pressable>
      </View>
    </View>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "black", // Background color of the main screen
    padding: hp(1),
    paddingTop: hp(4),
  },
  container: {
    borderWidth: wp(0.5),
    borderColor: "#52de6f", // Border color for each sorting algorithm button
    height: hp(25),
    width: wp(42),
    margin: wp(2),
    justifyContent: "center", // Centering text within each button
    alignItems: "center",
  },
  containerrow: {
    flexDirection: "row", // Horizontal row of buttons
    marginVertical: hp(2),
    justifyContent: "space-between",
  },
  containertext: {
    color: "#11cd2f", // Text color for button labels
    fontSize: wp(7),
  },
});

export default MainScreen;
