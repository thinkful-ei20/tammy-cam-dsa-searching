import React from 'react';


export default class SearchForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: this.props.data,
      value: null,
      counter: 0,
    }
  }
  
  handleChange(e){
    this.setState({value: e.target.value})
  }

  onLinearClick = (e) =>{
    e.preventDefault();
    this.setState({ counter: 0 });
    this.linearSearch(parseInt(this.state.value, 10));
  }

  linearSearch = (num, counter = 0) => {
    let data = this.state.data;
    // let currentCount = 0;

    for(let i = 0; i < data.length; i++){
      counter++;
      if (data[i] === num) {
        this.setState({ counter: counter });
        console.log(`Search result: ${data[i]}`);
        console.log(`Turns it took: ${counter}`);
        return data[i];
      } 
    }
    console.log('Value not found');
  }

  onBinaryClick = (e) => {
    e.preventDefault();
    let data = this.state.data; 
    let value =  parseInt(this.state.value, 10);
    this.binarySearch(data, value);
  }

  binarySearch = (array, value, start, end, counter = 0) => {
    array = array.sort();
    start = (start === undefined) ? 0 : start
    end = (end === undefined) ? array.length : end;
    
    if (start > end) {
      return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    if (item === value) {
      console.log(`Index: ${index}`);
      console.log(`Turns it took: ${counter}`);
      this.setState({ counter: counter });
      return index;
    }
    else if (item < value) {
      counter++;
      return this.binarySearch(array, value, index + 1, end, counter);
    }
    else if (item > value) {
      counter++;
      return this.binarySearch(array, value, start, index - 1, counter);
    }
    console.log('Value not found!');
    return 'Value not found!';
};
  render() {
    console.log(this.state);
    return(
      <div>
        <form>
          <label>Search:
          <input
            type='search'
            placeholder='write a number'
            onChange={(e) => this.handleChange(e)}
          />
          </label>
          <button type='submit' className='linear' 
          onClick={(e)=> this.onLinearClick(e)}>
          Linear</button>
          <button type='submit' className='binary' 
          onClick={(e) => this.onBinaryClick(e)}>
          Binary</button>
        </form>
        {/* <span>{this.state.counter ? this.state.counter + 1 : 0}</span> */}
        <span>{this.state.counter}</span>
      </div>
    )
  }
}