import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Pokemons from "./components/Pokemons";
import Detalhes from "./components/Detalhes";
import Abertura from "./components/Abertura";

//Criacao das rotas de navegacao
const stackNavigator = createStackNavigator(
  {
    Abertura: {
      screen: Abertura,
      navigationOptions: { headerShown: false },
    },
    Inicio: {
      screen: Pokemons,
    },
    Detalhes: {
      screen: Detalhes,
    },
  },
  {
    initialRouteName: "Abertura",
  }
);

//Atribuindo a funcao de criacao de rotas a um componente AppContainer
const AppContainer = createAppContainer(stackNavigator);

//Renderizando App.jsx com o componente AppContainer
class App extends Component {
  render() {
    return <AppContainer />;
  }
}

export default App;
