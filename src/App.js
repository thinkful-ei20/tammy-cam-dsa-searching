import React from 'react';
import SearchForm from './Form';
import './App.css';


//search box, two buttons
//this.props will hold data set

//pass dataset as a prop into input?
//input ('10') component pass in the input back to here

//button 1 linear
//onClick => run the linear search on the dataset, toggle = 0


//button 2 binary
//onClick => run the binary search on the dataset, toggle = 1


export default class App extends React.Component {
  
  data = this.props.data
  
  render() {
    // console.log(this.data)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Search two ways</h1>
        </header>
        <SearchForm data={this.data}/>
        <p>This is where the results will go</p>
      </div>
    );
  }
}

