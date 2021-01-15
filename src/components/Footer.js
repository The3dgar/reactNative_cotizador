import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../utils/colors";

export const Footer = ({ onSubmit }) => {
  return (
    <View style={styles.viewFooter}>
      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={styles.text}>CALCULAR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  viewFooter: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: colors.PRIMARY,
    height: 100,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: colors.PRIMARY_DARK,
    padding: 16,
    borderRadius: 20,
    width: "75%",
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },
});
