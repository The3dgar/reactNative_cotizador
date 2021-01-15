import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar as StatusBarRN,
  Button,
} from "react-native";
import { Footer } from "./src/components/Footer";
import { Form } from "./src/components/Form";
import Result from "./src/components/Result";
import { colors } from "./src/utils/colors";

export default function App() {
  const [capital, setCapital] = useState(null);
  const [interest, setInterest] = useState(null);
  const [months, setMonths] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    months && interest && capital ? calculate() : reset();
  }, [months, interest, capital]);

  const calculate = () => {
    reset();

    if (!capital) return setErrorMsg("Falta cantidad");
    if (!interest) return setErrorMsg("Falta interes");
    if (!months) return setErrorMsg("Falta plazos");

    const i = interest / 100;
    const fee = capital / ((1 - Math.pow(i + 1, -months)) / i);
    setTotal({
      monthlyFeed: fee.toFixed(2).replace(".", ","),
      totalPayable: (fee * months).toFixed(2).replace(".", ","),
    });
  };

  const reset = () => {
    setErrorMsg("");
    setTotal(null);
  };

  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.background} />
        <Text style={styles.titleApp}>Cotizador de Préstamos</Text>
        <Form
          setCapital={setCapital}
          setInterest={setInterest}
          setMonths={setMonths}
        />
      </SafeAreaView>
      <Result
        errors={errorMsg}
        capital={capital}
        interest={interest}
        months={months}
        total={total}
      />
      <Footer onSubmit={calculate} />
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    paddingTop: Platform.OS === "android" ? StatusBarRN.currentHeight : 0,
    height: 290,
    alignItems: "center",
  },
  background: {
    backgroundColor: colors.PRIMARY,
    height: 200,
    width: "100%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: "absolute",
    zIndex: -100,
  },
  titleApp: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 15,
  },
});
