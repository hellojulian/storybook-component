import React from "react";
import { View } from "react-native";
import Card from "./Card";

export default function App() {
  const handlePress = () => {
    console.log("Button clicked");
  };

  return (
    <View style={{ padding: 20 }}>
      <Card
        imageSource={{ uri: "./assets/image.png" }}
        title="Dogs are the greatest"
        buttonLabel="Find out about dogs"
        onPress={handlePress}
      />
    </View>
  );
}
