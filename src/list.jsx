import React, { Component } from 'react';


class List extends Component {
    renderList() {

        const items = this.props.items.map(item => {
            // returns an image, the pokemon name, and the pokemon number
            return <div key ={item.name} className="pokemon"> 
                 <img alt={item.name} src={item.img}/>
                  <p> {item.num} </p>
                  <li key={item.name}>  {item.name} </li> 

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
