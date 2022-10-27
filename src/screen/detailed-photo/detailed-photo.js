import { View, Image, StyleSheet } from "react-native";
import React from "react";

const DetailedPhoto = ({ route }) => {
  const { src } = route.params;

  return (
    <View>
      <Image style={styles.image} source={{ uri: src }} />
    </View>
  );
};

export default DetailedPhoto;

const styles = StyleSheet.create({
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
});
