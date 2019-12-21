import React from 'react';
//import Card from './component/card/Card.js';
import {CardList} from './component/cardList/CardList.js';
import './App.css';

class App extends React.Component {

  constructor()
  {
    super();
    this.state={
      users:[],
      serchField:''
    }
  }
     //"homepage":"https://www.github.io/ManuMhetre/RoboFriend;
  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(data=>this.setState({users:data},console.log(this.state.users)))
  }
  render()
  {   
    const filteredRobot=this.state.users.filter(serchField=>serchField.name.toLowerCase().includes(this.state.serchField));
     
  return (
    <div className="App">
      <h1 id="headers">Robo Friend</h1>
      <input type="text" placeholder="Search Robots" onChange={(e)=>this.setState({serchField:e.target.value} ) }/>
      <CardList users={filteredRobot}/>
      
    </div>
  );
  }
}

export default App;
