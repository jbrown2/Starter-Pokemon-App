import React, { Component } from 'react';
import { DropdownButton, MenuItem} from 'react-bootstrap';
import './App.css';
import List from './list';
import Header from './header';

class Filter extends Component {
    constructor(props) {
    	
        super(props);
        this.sortAlph = this.sortAlph.bind(this);
        this.sortNum= this.sortNum.bind(this);
        this.state = {
            search: "",
            type: "All Types",
            gen: "All Generations",
            sort: "Select Sort",

        };


    }

     // Sets the state whenever the user types on the search bar
    onSearch = (event) => {
        this.setState({search: event.target.value.trim().toLowerCase()});
    }

     filterAll = (item) => {

     	if(this.state.gen === "All Generations" && 
     	 	this.state.type === item.type ){

     	 	//If only the type is selected
        	return item.name.toLowerCase().search(this.state.search) !== -1;
            	
        }else if (this.state.type === "All Types" &&
        	this.state.gen === item.gen ){
        	//If only the generation is selected
        
            return item.name.toLowerCase().search(this.state.search) !== -1;

        } else if (this.state.type === item.type && 
        	this.state.gen === item.gen ){
        	//If both the type and generation are selected

        	return item.name.toLowerCase().search(this.state.search) !== -1;

        }
        else if(this.state.gen === "All Generations" && this.state.type === "All Types" ) {
        	//If neither the type not the generation is selected
        	return item.name.toLowerCase().search(this.state.search) !== -1;
        } 		

        
    }


 

// Sort Alphabetically
    sortAlph = (items) => {

		items.sort(function(a, b){
		    if(a.name < b.name){ 
		    	
		    	return -1;
		    }
		    if(a.name > b.name) {
		    	
		    	return 1;
		    }
   		 	return 0;
		})

		return items;	    

    }

// Sort Numerically
    sortNum(items) {

		items.sort(function(a, b){

		    if(a.num < b.num){ 
		    	
		    	return -1;
		    }
		    if(a.num > b.num) {
		    	
		    	return 1;
		    }
   		 	return 0;
		})
		
		return items;
		    
    }

//Methods to change the corresponding states

    changeStateType = (eventKey: any, event: Object) => {
        this.setState({type: eventKey});
    }

    changeStateGen = (eventKey: any, event: Object) => {
        this.setState({gen: eventKey});
    }

    changeStateSort= (eventKey: any, event: Object) => {
        this.setState({sort: eventKey});
    }
    
//Function that is called to filter and sort all of the items in the list

    processItems = ()=> {
    	
    	//filters the list
    	const finalList= this.props.items.filter(this.filterAll);
    	

    	//sorts the list if necessary
    	if(this.state.sort === "A-Z"){
    		this.sortAlph(finalList)

    	}else if(this.state.sortNum === "Numerically"){
    		this.sortNum(finalList)
    	}

    	return finalList;
	
    }

    render() {
        return (
            <div className="filter-list">

              <Header curr_Gen={this.state.gen}/>
          
                <div className="buttons">
                <DropdownButton id="typeDropdown" title={this.state.type}>
                  <MenuItem eventKey="All Types" onSelect={this.changeStateType}>All Types</MenuItem>
                  <MenuItem eventKey="Fire" onSelect={this.changeStateType}>Fire</MenuItem>
                  <MenuItem eventKey="Grass" onSelect={this.changeStateType}>Grass</MenuItem>
                  <MenuItem eventKey="Electric" onSelect={this.changeStateType}>Electric</MenuItem>
                  <MenuItem eventKey="Water" onSelect={this.changeStateType}>Water</MenuItem>
                </DropdownButton>


                <DropdownButton id="typeDropdown" title={this.state.gen}>
                  <MenuItem eventKey="All Generations" onSelect={this.changeStateGen}>All Generations</MenuItem>
                  <MenuItem eventKey="Kanto" onSelect={this.changeStateGen}>Kanto</MenuItem>
                  <MenuItem eventKey="Hoenn" onSelect={this.changeStateGen}>Hoenn</MenuItem>
                  <MenuItem eventKey="Johto" onSelect={this.changeStateGen}>Johto</MenuItem>
                  <MenuItem eventKey="Sinnoh" onSelect={this.changeStateGen}>Sinnoh</MenuItem>
                  <MenuItem eventKey="Unova" onSelect={this.changeStateGen}>Unova</MenuItem>
                  <MenuItem eventKey="Kalos" onSelect={this.changeStateGen}>Kalos</MenuItem>
                  <MenuItem eventKey="Alola" onSelect={this.changeStateGen}>Alola</MenuItem>
                </DropdownButton>

                <DropdownButton id="typeDropdown" title={this.state.sort}>
                	<MenuItem>Select Sort</MenuItem>
                  <MenuItem eventKey="A-Z" onSelect={this.changeStateSort}>A-Z</MenuItem>
                  <MenuItem eventKey="Numerically" onSelect={this.changeStateSort}>Numerically</MenuItem>
                  
                </DropdownButton>

			 
                <input type="text" placeholder="Search" onChange={this.onSearch} />
                </div>
                <List items={this.processItems()} />
            </div>
        );
    }
}
export default Filter;