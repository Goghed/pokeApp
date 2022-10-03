//App.js
import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Pokemons from "./components/Pokemons";
import Detalhes from "./components/Detalhes";
import Abertura from "./components/Abertura";

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

const AppContainer = createAppContainer(stackNavigator);

class App extends Component {
  render() {
    return <AppContainer />;
  }
}

export default App;
