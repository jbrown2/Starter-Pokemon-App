import React, { Component } from 'react';
import './App.css';



class List extends Component {

    renderList() {


        const items = this.props.items.map(item => {
            // returns an image, the pokemon name, and the pokemon number
            return <div onClick={this.handleClick} key ={item.name} className="pokemon"> 
                
                <li id="color" key={item.name}>  {item.name} </li> 
                 <p id="color"> {item.num} </p>
                 <img alt={item.name} src={item.img}/>

                 <table style={{width: "100%"}}  class="roundy" id="outer">
                 <tr id="spacing-head">
                  <th class="roundy" style={{width: "60%"}}> Height </th>
                  <th class="roundy" style={{width: "40%"}}> Weight </th>
                 </tr>
                 <tr id="spacing">
                   <td class="roundy" style={{backgroundColor: "#fff", width: "60%"}}> {item.height} ({item.m} m)</td>
                   <td class="roundy" style={{backgroundColor: "#fff", width: "33%"}}> {item.weight} lbs </td>
                 </tr>
                 <tr id= "spacing">
                  <th  class="roundy" style={{width: "33%", marginBottom: "0px"}}> Base Hp </th>
                  <th class="roundy" style={{width: "33%"}}> Base Attack </th>
                  <th class="roundy" style={{width: "33%"}}> Base Defense </th>
                 </tr>
                 <tr id="spacing">
                   <td class="roundy"  style={{backgroundColor: "#fff", width: "30%"}}> {item.hp} </td>
                   <td class="roundy" style={{backgroundColor: "#fff", width: "30%"}}> {item.atck} </td>
                   <td class="roundy" style={{backgroundColor: "#fff", width: "30%"}}> {item.def} </td>
                 </tr>
                 </table>
                 </div>

        });

        return items;


    }

    render() {
        return (
          
            <ul className="list-unstyled" >
                {this.renderList()}
            </ul>

        );
    }
}

export default List;
