import './App.css';
import React from 'react';
import CardList from './Components/CardList/CardList';
import SearchBox from './Components/SearchBox/SearchBox';
import Scroll from "./Components/Scroll/Scroll"
import Error from './Components/Error/Error';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      robots: [], 
      searchfield: ""
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users =>this.setState({ robots : users }));
  }

  onSearchChange = (e) => {
    this.setState({ searchfield: e.target.value})
    
  }
  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
  
    if (!robots.length) {
      return <h1>Loading</h1>
    } else {
      return (
        <div className="App tc">
          <h1 className="f1">Robots</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <Error>
              <CardList robots={filteredRobots}/>
            </Error>
          </Scroll>
        </div>
      )
    }
  }
}

export default App;
