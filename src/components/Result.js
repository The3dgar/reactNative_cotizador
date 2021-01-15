import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Result({ errors, capital, interest, months, total }) {
  return (
    <View style={styles.content}>
      {total && (
        <View style={styles.boxResult}>
          <Text style={styles.title}>Resumen</Text>
          <DataResult title="Cantidad solicitada:" value={`${capital} $`} />
          <DataResult title="Interés %" value={`${interest} %`} />
          <DataResult title="Plazos" value={`${months} meses`} />
          <DataResult title="Pago Mensual" value={`${total.monthlyFeed} $`} />
          <DataResult title="Total a pagar" value={`${total.totalPayable} $`} />
        </View>
      )}

      <View>
        <Text style={styles.error}> {errors} </Text>
      </View>
    </View>
  );
}

const DataResult = ({ title, value }) => {
  return (
    <View style={styles.value}>
      <Text>{title}</Text>
      <Text>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 40,
  },
  boxResult: {
    padding: 30,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 30,
  },
  error: {
    textAlign: "center",
    color: "#f00",
    fontWeight: "bold",
    fontSize: 20,
  },
  value: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
});
