import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GaleryScreen from "../screen/galery-screen/galery-screen";
import DetailedPhoto from "../screen/detailed-photo/detailed-photo";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Galery">
        <Stack.Screen name="Galery" component={GaleryScreen} />
        <Stack.Screen name="Datailed photo" component={DetailedPhoto} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
