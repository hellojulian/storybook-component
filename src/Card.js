import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

const Card = ({ imageSource, title, buttonLabel, onPress }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={imageSource} />
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonLabel}>{buttonLabel}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 15
  },
  image: {
    height: 200,
    width: 300,
    borderRadius: 10,
    marginBottom: 10
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 30
  },
  button: {
    backgroundColor: "#007AFF",
    borderRadius: 16,
    padding: 16
  },
  buttonLabel: {
    color: "#fff",
    fontWeight: "regular",
    textAlign: "center"
  }
});

export default Card;
