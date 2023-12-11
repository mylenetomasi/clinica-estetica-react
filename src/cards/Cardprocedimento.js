import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

function Card(props) {
  return (
    <View style={styles.card}>
      {/* <Image
        style={{ width: "40%", height: "100%", borderRadius: 10 }}
        source={{ uri: props.movel.foto.url }}
        /> */}
      <View>
        <Text style={{ fontSize:20, color: "#333", fontWeight: "600"}}>{props.procedimento.nome}</Text>
        <Text style={{ fontSize:18, color: "#666"}}>{props.procedimento.descricao}</Text>
        <Text style={{ fontSize:18, color: "#666", fontWeight: "500"}}>R${props.procedimento.preco}</Text>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  card: {
    width: "auto",
    height: 170,
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