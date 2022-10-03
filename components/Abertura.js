import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from "react-native";

//Criacao e exportacao do componente na mesma linha com a propriedade Navigation
export default function Abertura({ navigation }) {
  //Retorna a tela inicial interativa de pokebola
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} backgroundColor={"#ff043a"} />
      <ImageBackground
        source={require("../assets/background.png")}
        style={styles.background}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Inicio")}
        >
          <View style={styles.viewSuperior}>
            <View style={styles.pokebolSuperior}>
              <View style={styles.meioPokebolSuperior}></View>
            </View>
          </View>
          <View style={styles.viewInferior}>
            <View style={styles.pokebolInferior}>
              <View style={styles.meioPokebolInferior}></View>
            </View>
            <View style={styles.mensagem}>
              <Text style={styles.texto}>Aperte aqui para entrar</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },

  background: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  viewSuperior: {
    flex: 2,
    width: "100%",
    height: 250,
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "column",
    justifyContent: "flex-end",
  },

  viewInferior: {
    flex: 2,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },

  pokebolSuperior: {
    backgroundColor: "white",
    width: 180,
    height: 90,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderTopWidth: 8,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-end",
    backgroundColor: "white",
  },

  pokebolInferior: {
    width: 180,
    height: 90,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    borderBottomWidth: 8,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    alignItems: "center",
    backgroundColor: "white",
  },

  meioPokebolSuperior: {
    width: 120,
    height: 60,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderTopWidth: 8,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderColor: "#DCDCDC",
    backgroundColor: "white",
  },

  meioPokebolInferior: {
    width: 120,
    height: 60,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    borderBottomWidth: 8,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderColor: "#DCDCDC",
    backgroundColor: "white",
  },

  mensagem: {
    marginTop: 20,
  },

  texto: {
    fontSize: 16,
  },
});
