import { View, Text, StyleSheet } from "react-native";
import React from "react";

export const EmptyPhotos = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {"There are no pictures at the moment :("}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 26,
    textAlign: "center",
  },
});
