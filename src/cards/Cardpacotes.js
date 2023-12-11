import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

function Card(props) {
  return (
    <View style={styles.card}>
      <View>
        <View style={{flexDirection: 'row', alignItems: "center", gap: 10}}>
          <Text style={{ fontSize: 20, color: "#333", fontWeight: "600" }}>{props.pacote.nome}</Text>
          <Text style={{ fontSize: 18, color: "#333" }}>R${props.pacote.preco}</Text>
        </View>
        <Text style={{ fontSize: 18, color: "#666" }}>{props.pacote.descricao}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "auto",
    height: 100,
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
