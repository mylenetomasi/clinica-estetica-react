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
        <Text style={{ fontSize:20, padding: 10, marginRight: 145}}>{props.pacote.nome}</Text>
        <Text style={{ fontSize:18, paddingLeft: 10 }}>R${props.pacote.preco}</Text>
        <Text>{props.pacote.descricao}</Text>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  card: {
    width: 'auto',
    height: 150,
    borderRadius: 10,
    flexDirection: "row",
    margin: 20,
    backgroundColor: 'white'
  },
});

export default Card;