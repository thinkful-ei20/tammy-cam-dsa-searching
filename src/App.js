import React, { Component } from 'react';
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


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm:'',
      searchToggle: ''
      //0 = linear, 1 = binary
    }
    //this.onLinearClick = this.onLinarClick(this);
  }

  onLinearClick = (e) =>{
    e.preventDefault();
    console.log('linear button clicked')
    this.setState({
      searchToggle: 'linear'
    });
    console.log(this.state.searchToggle)
  }

  onBinaryClick = (e) => {
    e.preventDefault();
    console.log('binary button clicked')
    this.setState({
      searchToggle: 'binary'
    });
    console.log(this.state.searchToggle)
  }

  //data = this.props.data
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Search two ways</h1>
        </header>
        <SearchForm 
          onChange={(value) => this.setState({searchTerm: value})} 
          onClick={(e) => this.onLinearClick(e)} 
          onBinaryClick={(e) => this.onBinaryClick(e)}
        />
        <p>This is where the results will go</p>
      </div>
    );
  }
}

