import React, { useState } from 'react';
import ReactDOM from "react-dom";
import MovieList from './Movies/MovieList';
import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie';
import MovieCard from './Movies/MovieCard';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list = {savedList} />
      <Route exact path = "/" Component = {MovieList} />
      <Route path = "/Movie/:id" Component = {Movie} exact />
    </div>
  );
};

export default App;
