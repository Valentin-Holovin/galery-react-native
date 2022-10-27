import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const RenderItem = ({ item }) => {
  const formatDate = new Date(item.created_at).toDateString();

  const navigation = useNavigation();

  const handlePressDatailedPhoto = React.useCallback(
    () =>
      navigation.navigate("Datailed photo", {
        id: item.id,
        src: item.urls.full,
      }),
    []
  );

  return (
    <Pressable
      style={styles.container}
      onPress={() => handlePressDatailedPhoto()}
    >
      <View>
        <Image style={styles.image} source={{ uri: item.urls.small }} />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>{item.user.name}</Text>
        <Text style={styles.text}>{formatDate}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  image: {
    width: 260,
    height: 190,
    borderRadius: 10,
  },
  textWrapper: {
    width: "65%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  text: {
    fontSize: 16,
    maxWidth: "50%",
  },
});
