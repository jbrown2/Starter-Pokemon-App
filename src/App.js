import React, { Component } from 'react';
import './App.css';
import Filter from './filter';



const pokemon = [
  {name: "Bulbasaur", type: "Grass", gen: "Kanto", num: "#001", img: require("./images/Bulbasaur.png")},
  {name: "Charmander", type: "Fire", gen: "Kanto", num: "#004", img: require("./images/Charmander.png")},
  {name: "Squirtle", type: "Water", gen: "Kanto", num: "#007", img: require("./images/Squirtle.png")},
  {name: "Pikachu", type: "Electric", gen: "Kanto", num: "#025", img: require("./images/Pikachu.png")},
  {name: "Chikorita", type: "Grass", gen: "Johto", num: "#152", img: require("./images/Chikorita.png")},
  {name: "Cyndaquil", type: "Fire", gen: "Johto", num: "#155", img: require("./images/Cyndaquil.png")},
  {name: "Totodile", type: "Water", gen: "Johto", num: "#158", img: require("./images/Totodile.png")},
  {name: "Treecko", type: "Grass", gen: "Hoenn", num: "#252", img: require("./images/Treecko.png")},
  {name: "Torchic", type: "Fire", gen: "Hoenn", num: "#255", img: require("./images/Torchic.png")},
  {name: "Mudkip", type: "Water", gen: "Hoenn", num: "#258", img: require("./images/Mudkip.png")},
  {name: "Turtwig", type: "Grass", gen: "Sinnoh", num: "#387", img: require("./images/Turtwig.png")},
  {name: "Chimchar", type: "Fire", gen: "Sinnoh", num: "#390", img: require("./images/Chimchar.png")},
  {name: "Piplup", type: "Water", gen: "Sinnoh", num: "#393", img: require("./images/Piplup.png")},
  {name: "Snivy", type: "Grass", gen: "Unova", num: "#495", img: require("./images/Snivy.png")},
  {name: "Tepig", type: "Fire", gen: "Unova", num: "#498", img: require("./images/Tepig.png")},
  {name: "Oshawott", type: "Water", gen: "Unova", num: "#501", img: require("./images/Oshawott.png")},
  {name: "Chespin", type: "Grass", gen: "Kalos", num: "#650", img: require("./images/Chespin.png")},
  {name: "Fennekin", type: "Fire", gen: "Kalos", num: "#653", img: require("./images/Fennekin.png")},
  {name: "Froakie", type: "Water", gen: "Kalos", num: "#656", img: require("./images/Froakie.png")},
  {name: "Rowlet", type: "Grass", gen: "Alola", num: "#722", img: require("./images/Rowlet.png")},
  {name: "Litten", type: "Fire", gen: "Alola", num: "#725", img: require("./images/Litten.png")},
  {name: "Popplio", type: "Water", gen: "Alola", num: "#728", img: require("./images/Popplio.png")},
  
];

class App extends Component {
    render() {
        return (
            <div className="App">
                <Filter items={pokemon} />
            </div>
        );
    }
}

export default App;
