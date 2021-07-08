import React, { useEffect } from "react";
import {connect} from 'react-redux'
import "./App.css";
import { CardList } from "./components/card-list/card-list-component";
import { Search } from "./components/search/search-component";
import { setSearchField,requestRobots} from './action'

function App(props){
  
   const {searchField,onSearchChange,monsters} = props;
  useEffect(()=>{
    props.onRequestRobots();
  },[])
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsteers</h1>
        <Search
          placeholder="search monsteers"
          handleChange={onSearchChange}
        ></Search>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
const mapStateToProps = state =>{
  return {
    searchField:state.searchRobots.searchField,
    monsters:state.requestRobots.robots,
    error:state.requestRobots.error,
    isPending:state.requestRobots.isPending,
  }
}
const mapDispatchToProps = dispatch=>{
  return {
    onRequestRobots:()=>dispatch(requestRobots()),
    onSearchChange:e=>dispatch(setSearchField(e.target.value))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)
