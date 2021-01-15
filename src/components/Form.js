import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { colors } from "../utils/colors";
import { Picker } from "@react-native-picker/picker";

export const Form = ({ setCapital, setInterest, setMonths }) => {
  const [internalData, setInternalData] = useState("");
  const handleMonthChange = (e) => {
    setMonths(e);
    setInternalData(e);
  };
  return (
    <View style={styles.viewForm}>
      <View style={styles.viewInput}>
        <TextInput
          placeholder="Monto"
          keyboardType="numeric"
          style={styles.input}
          onChange={(e) => setCapital(e.nativeEvent.text)}
        />
        <TextInput
          placeholder="Interés%"
          keyboardType="numeric"
          style={[styles.input, styles.inputPercentage]}
          onChange={(e) => setInterest(e.nativeEvent.text)}
        />
      </View>

      <Picker
        selectedValue={internalData}
        style={pickerStyle}
        onValueChange={handleMonthChange}
        placeholder={{}}
        
      >
        <Picker.Item label="Plazos" value=""/>
        <Picker.Item label="3 meses" value={3} />
        <Picker.Item label="6 meses" value={6} />
        <Picker.Item label="9 meses" value={9} />
        <Picker.Item label="12 meses" value={12} />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  month: {},
  viewForm: {
    position: "absolute",
    bottom: 0,
    width: "85%",
    paddingHorizontal: 50,
    backgroundColor: colors.PRIMARY_DARK,
    borderRadius: 30,
    height: 180,
    justifyContent: "center",
  },
  viewInput: {
    flexDirection: "row",
  },
  input: {
    height: 50,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: colors.PRIMARY,
    borderRadius: 5,
    width: "60%",
    marginRight: 5,
    marginLeft: -5,
    marginBottom: 10,
    color: "#000",
    paddingHorizontal: 20,
  },
  inputPercentage: {
    width: "40%",
    marginLeft: 5,
  },
});

const pickerStyle = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 4,
    color: "black",
    paddingRight: 30,
    backgroundColor: "white",
    marginLeft: -5,
    marginRight: 5,
  },
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 0.5,
    borderColor: "grey",
    borderRadius: 8,
    color: "black",
    paddingRight: 30,
    backgroundColor: "white",
  },
});
