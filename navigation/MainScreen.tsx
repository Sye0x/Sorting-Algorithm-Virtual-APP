import { Text, View, StyleSheet, Pressable } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
const MainScreen = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.background}>
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

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "black",
    padding: hp(1),
    paddingTop: hp(4),
  },
  container: {
    borderWidth: wp(0.5),
    borderColor: "#52de6f",
    height: hp(25),
    width: wp(42),
    margin: wp(2),
    justifyContent: "center",
    alignItems: "center",
  },
  containerrow: {
    flexDirection: "row",
    marginVertical: hp(2),
    justifyContent: "space-between",
  },
  containertext: {
    color: "#11cd2f",
    fontSize: wp(7),
  },
});

export default MainScreen;
