import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import { Row } from "react-bootstrap";
import Artist from "./components/Artist";
import Album from "./components/Album";
import { connect } from "react-redux";
import { getSongsAction } from "./redux/action/index";

const mapStateToProps = (state) => {
  return {
    searchResults: state.home.songs
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getSongs: (string) => dispatch(getSongsAction(string))
  };
};

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <Row>
            <Sidebar />
            <Route
              path="/"
              exact
              render={() => <Home searchResults={this.props.searchResults} />}
            />
            <Route path="/artist/:id" component={Artist} />
            <Route path="/album/:id" component={Album} />
          </Row>
        </div>
        <Player />
      </Router>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
