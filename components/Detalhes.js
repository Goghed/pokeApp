
import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, ActivityIndicator} from 'react-native';

const Detalhes = props => {
  const [detalhes, setDetalhes] = useState([]);

  useEffect(() => {
    fetchDetalhesPokemons();
  }, []);

  const fetchDetalhesPokemons = () => {
    const {state} = props.navigation;
    fetch(`https://pokeapi.co/api/v2/pokemon/${state.params.pokemon}`)
      .then(resposta => resposta.json())
      .then(detalhes => setDetalhes(detalhes));
  };

  return detalhes.name ? (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Image
        style={styles.imagem}
        source={{
          uri: `https://img.pokemondb.net/sprites/home/normal/${
            detalhes.name
          }.png`,
        }}
      />
      <Text style={styles.texto}>Nome: {detalhes.name.toUpperCase()}</Text>
      <Text style={styles.texto}>Altura: {detalhes.height/10} m</Text>
      <Text style={styles.texto}>Peso: {detalhes.weight/10} kg</Text>
      <Text style={styles.texto}>
        Habilidade: {detalhes.abilities[0].ability.name.toUpperCase()}
      </Text>
      <Text style={styles.texto}>Tipo: {detalhes.types[0].type.name.toUpperCase()}</Text>
    </View>
  ) : (
    <View style={styles.indicador}>
      <ActivityIndicator size="large" color="#E63F34" />
    </View>
  );
};

export default Detalhes;

const styles = StyleSheet.create({
  imagem: {
    width: 200,
    height: 200,
    marginBottom: 15,   
  },
  texto: {
    fontSize: 22,
    marginBottom: 15,
  },
  indicador: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});