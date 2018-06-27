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
    // console.log('handle search ran')
    // console.log(this.state.value)
  }

  onLinearClick = (e) =>{
    e.preventDefault();
    // console.log('linear button clicked')
    this.setState({ counter: 0 });
    this.linearSearch(parseInt(this.state.value, 10));
  }

  linearSearch = (num) => {
  //[89, 30, 25, 32, 72]
    // console.log('this.linearSearch ran')
    // console.log('this is value inserted to function', num);
    let data = this.state.data;
    // console.log('this is data', data)
    
    let currentCount = this.state.counter;
    for(let i=0; i<data.length; i++){
      this.setState({counter: currentCount++});
      if(data[i] === num){
        console.log(`Search result: ${data[i]}`);
        console.log(`Turns it took: ${currentCount}`);
        return data[i]
      } 
    }
    console.log('Value not found');
  }

  onBinaryClick = (e) => {
    e.preventDefault();
    console.log('binary button clicked')
    let data = this.state.data; 
    let value =  parseInt(this.state.value, 10);
    this.binarySearch(data, value);
  }

  binarySearch = (array, value, start, end) => {
    array = array.sort();
    start = (start === undefined) ? 0 : start
    end = (end === undefined) ? array.length : end;

    if (start > end) {
        return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    // console.log(start, end);
    // console.log('this is item', item)
    // console.log('this is index', index)
    //[89, 30, 25, 32, 72]
    if (item === value) {
        return index;
    }
    else if (item < value) {
        return this.binarySearch(array, value, index + 1, end);
    }
    else if (item > value) {
        return this.binarySearch(array, value, start, index - 1);
    }

    return 'value not found'
};
  render() {
    //console.log('this is data', this.state.data)
    // console.log('this is state', this.state)

    return(
      <form>
        <label>Search:
        <input
          type='search'
          placeholder='write a number'
          onChange={(e) => this.handleChange(e)}
          //value={this.state.value} 
        />
        </label>
        <button type='submit' className='linear' 
        onClick={(e)=> this.onLinearClick(e)}>
        Linear</button>
        <button type='submit' className='binary' 
        onClick={(e) => this.onBinaryClick(e)}>
        Binary</button>
      </form>
    )
  }
}