import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Header from "../../components/Header";
import Cardpacotes from "../../cards/Cardpacotes";
import PacoteService from "../../services/pacotes";

export default function Home() {
  const [Pacotes, setPacotes] = useState([]);

  async function BuscarDados2() {
    const data = await PacoteService.getAllPacotes();
    setPacotes(data);
  }

  useEffect(() => {
    BuscarDados2();
  }, []);

  return (
    <ScrollView>
      <View>
        <Header />
      </View>

      <ScrollView style={{ backgroundColor: "#f4f4f4" }}>
        {Pacotes.map((Pacote) => (
          <Cardpacotes key={Pacote.id} pacote={Pacote} />
        ))}
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f4f4f4",
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  procedureContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  procedureBox: {
    width: "48%",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  procedureTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  procedureImage: {
    width: "100%",
    height: 150,
    marginBottom: 10,
  },
  procedureDescription: {
    fontSize: 14,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "purple",
    padding: 10,
    borderRadius: 8,
    alignItems: "flex-end",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
