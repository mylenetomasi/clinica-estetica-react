import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { View, Image, StyleSheet, Text } from "react-native";

function Card(props) {
  return (
    <View style={styles.card}>
      <FontAwesome name="user" size={60} color="#333" />
      <View style={{ marginLeft: 20 }}>
        <Text style={{ fontSize: 20, color: "#333", fontWeight: "600" }}>
          {props.agendamento.nome}
        </Text>
        <Text style={{ fontSize: 18, color: "#666"}}>
          {props.agendamento.data_hora}
        </Text>
        <View style={{flexDirection: "row", alignItems: "center", gap: 10}}>
          <Text>
            Status:
          </Text>
        <Text style={{ fontSize: 18, color: "#666", fontWeight: "600" }}>{props.agendamento.confirmacao}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "auto",
    height: 150,
    borderRadius: 10,
    padding: 15,
    paddingLeft: 30,
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: "white",
  },
});

export default Card;
