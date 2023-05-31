import React from "react";
import { StyleSheet, ScrollView, SafeAreaView, Text } from "react-native";

const Untitled2 = () => {
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <Text style={styles.text}>List of Pets:</Text>
        <Text style={styles.text}>1. Max</Text>
        <Text style={styles.text}>2. Bella</Text>
        <Text style={styles.text}>3. Charlie</Text>
        <Text style={styles.text}>4. Lucy</Text>
        <Text style={styles.text}>5. Daisy</Text>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  }
});
export default Untitled2;