import React from "react";
import { View, StyleSheet } from "react-native";

const BlackScreen = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  }
});
export default BlackScreen;