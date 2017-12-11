import React, { Component } from 'react';
import './App.css';
import Filter from './filter';



const pokemon = [
  {name: "Bulbasaur", type: "Grass", gen: "Kanto", num: "#001", height: "2ft 4in.", m: .71, weight: 15.2, atck: 49, def: 49, hp: "45", img: require("./images/Bulbasaur.png")},
  {name: "Charmander", type: "Fire", gen: "Kanto", num: "#004", height: "2ft", m: .61, weight: 18.7, hp: "39", atck: 52, def: 43, img: require("./images/Charmander.png")},
  {name: "Squirtle", type: "Water", gen: "Kanto", num: "#007", height: "1ft 8in.", m: .51, weight: 19.8, hp: "44", atck: 48, def: 65, img: require("./images/Squirtle.png")},
  {name: "Pikachu", type: "Electric", gen: "Kanto", num: "#025", height: "1ft 4in.", m: .41, weight: 13.2, hp: "35", atck: 55, def: 40, img: require("./images/Pikachu.png")},
  {name: "Chikorita", type: "Grass", gen: "Johto", num: "#152", height: "2ft 11in.", m: .89, weight: 14.1, hp: "45", atck: 49, def: 65, img: require("./images/Chikorita.png")},
  {name: "Cyndaquil", type: "Fire", gen: "Johto", num: "#155", height: "1ft 8in.", m: .51, weight: 17.4, hp: "39", atck: 52, def: 43, img: require("./images/Cyndaquil.png")},
  {name: "Totodile", type: "Water", gen: "Johto", num: "#158", height: "2ft", m: .61, weight: 20.9, hp: "50", atck: 65, def: 64, img: require("./images/Totodile.png")},
  {name: "Treecko", type: "Grass", gen: "Hoenn", num: "#252", height: "1ft 8in.", m: .51, weight: 11, hp: "40", atck: 45, def: 35, img: require("./images/Treecko.png")},
  {name: "Torchic", type: "Fire", gen: "Hoenn", num: "#255", height: "1ft 4in.", m: .41, weight: 5.5, hp: "45", atck: 60, def: 40, img: require("./images/Torchic.png")},
  {name: "Mudkip", type: "Water", gen: "Hoenn", num: "#258", height: "1ft 4in.", m: .41, weight: 16.8, hp: "50", atck: 70, def: 50, img: require("./images/Mudkip.png")},
  {name: "Turtwig", type: "Grass", gen: "Sinnoh", num: "#387", height: "1ft 4in.", m: .41, weight: 22.5, hp: "55", atck: 68, def: 64, img: require("./images/Turtwig.png")},
  {name: "Chimchar", type: "Fire", gen: "Sinnoh", num: "#390", height: "1ft 8in.", m: .51, weight: 13.7, hp: "44", atck: 58, def: 44, img: require("./images/Chimchar.png")},
  {name: "Piplup", type: "Water", gen: "Sinnoh", num: "#393", height: "1ft 4in.", m: .41, weight: 11.5, hp: "53", atck: 51, def: 53, img: require("./images/Piplup.png")},
  {name: "Snivy", type: "Grass", gen: "Unova", num: "#495", height: "2ft", m: .61, weight: 17.9, hp: "45", atck: 45, def: 55, img: require("./images/Snivy.png")},
  {name: "Tepig", type: "Fire", gen: "Unova", num: "#498", height: "1ft 8in.", m: .51, weight: 21.8, hp: "65", atck: 63, def: 45, img: require("./images/Tepig.png")},
  {name: "Oshawott", type: "Water", gen: "Unova", num: "#501", height: "1ft 8in.", m: .51, weight: 13, hp: "55", atck: 55, def: 45, img: require("./images/Oshawott.png")},
  {name: "Chespin", type: "Grass", gen: "Kalos", num: "#650", height: "1ft 4in.", m: .41, weight: 19.8, hp: "56", atck: 61, def: 65, img: require("./images/Chespin.png")},
  {name: "Fennekin", type: "Fire", gen: "Kalos", num: "#653", height: "1ft 4in.", m: .41, weight: 20.7 , hp: "40", atck: 45, def: 40, img: require("./images/Fennekin.png")},
  {name: "Froakie", type: "Water", gen: "Kalos", num: "#656", height: "1ft", m: .3, weight: 15.4, hp: "41",atck: 56, def: 40, img: require("./images/Froakie.png")},
  {name: "Rowlet", type: "Grass", gen: "Alola", num: "#722", height: "1ft", m: .3, weight: 3.3, hp: "68", atck: 55, def: 55, img: require("./images/Rowlet.png")},
  {name: "Litten", type: "Fire", gen: "Alola", num: "#725", height: "1ft 4in.", m: .41, weight:9.5, hp: "45", atck: 65, def: 40, img: require("./images/Litten.png")},
  {name: "Popplio", type: "Water", gen: "Alola", num: "#728", height: "1ft 4in.", m: .41, weight: 16.5, hp: "50", atck: 54, def: 54, img: require("./images/Popplio.png")},
  
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
