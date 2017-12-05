import React, { Component } from 'react';


class Header extends Component {
      renderGen() {

        const curr_Gen = "All Generation Starter Pokemon"; 

        return curr_Gen;


    }



    render() {
        return (
          
            
                <h1>{this.renderGen()} </h1>

        );
    }
}

export default Header;
