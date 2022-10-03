import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";

const Pokemons = (props) => {
  //Implementacao do useState para apresentacao dos pokemons
  const [pokemons, setPokemons] = useState([]);
  //Implementacao do useState para realizar busca dos pokemons
  const [busca, setBusca] = useState("");

  //Execucao do useEffect sempre que o componente for atualizado
  useEffect(() => {
    fetchPokemons();
  }, []);

  //Funcao que busca os 151 pokemons na API
  const fetchPokemons = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((resposta) => resposta.json())
      .then((pokemons) => setPokemons(pokemons.results));
  };

  //Renderizando e formatando o retorno das informacao obtidas
  return (
    <View>
      <View style={styles.containerBusca}>
        <TextInput
          style={styles.campoBusca}
          placeholder="Buscar Pokemon"
          onChangeText={(value) => setBusca(value)}
          value={busca}
        />
      </View>
      <ScrollView>
        <View style={styles.container}>
          {pokemons
            .filter((pokemon) =>
              pokemon.name.toLowerCase().includes(busca.toLowerCase())
            )
            .map((pokemon, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.5}
                  key={index}
                  style={styles.card}
                  onPress={() =>
                    props.navigation.navigate("Detalhes", {
                      pokemon: pokemon.name,
                    })
                  }
                >
                  <Image
                    style={{ width: 150, height: 150 }}
                    source={{
                      uri: `https://img.pokemondb.net/sprites/home/normal/${pokemon.name}.png`,
                    }}
                  />
                  <Text>{pokemon.name.toUpperCase()}</Text>
                </TouchableOpacity>
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
};

//Exportando componente como padrao
export default Pokemons;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 30,
  },
  card: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  containerBusca: {
    position: "absolute",
    marginBottom: 70,
    alignSelf: "center",
    zIndex: 1,
    marginTop: 10,
  },
  campoBusca: {
    height: 40,
    borderWidth: 1,
    borderColor: "#000",
    textAlign: "center",
    width: 250,
    borderRadius: 50,
  },
});
