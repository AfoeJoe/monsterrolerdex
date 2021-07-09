import React, {Suspense, lazy, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { CardList } from './components/card-list/card-list-component';
import { Search } from './components/search/search-component';
import { setSearchField, requestRobots } from './action';
import Page1 from './components/page1/Page1';

const Page2 = lazy(()=> import('./components/page2/Page2'))

function App(props) {
  //toggle pages
  const [togglePage, setTogglePage] = useState(true);
  const { searchField, onSearchChange, monsters } = props;
  useEffect(() => {
    props.onRequestRobots();
  }, []);
  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
  );
  return (
    <div className="App">
       <Suspense fallback={<div>Loading...</div>}>
      {togglePage ? (
        <Page1 onRoute={setTogglePage} />
      ) : (
        <Page2 onRoute={setTogglePage} />
      )}
      </Suspense>

      <h1>Monsteers</h1>
      <Search
        placeholder="search monsteers"
        handleChange={onSearchChange}
      ></Search>
      <CardList monsters={filteredMonsters} />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    monsters: state.requestRobots.robots,
    error: state.requestRobots.error,
    isPending: state.requestRobots.isPending,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onRequestRobots: () => dispatch(requestRobots()),
    onSearchChange: (e) => dispatch(setSearchField(e.target.value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
