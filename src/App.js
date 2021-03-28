import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list-component";
import { Search } from "./components/search/search-component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsteers</h1>
        <Search
          placeholder="search monsteers"
          handleChange={this.handleChange}
        ></Search>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
