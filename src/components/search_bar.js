import React, {Component} from 'react';
// import ReactDOM from

//new class and give it all functionality that react.component pass
class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = {term: ''};
  }
  //every component that is class based must have a render method.
  render(){
    // return <input onChange={this.onInputChange}/>;
    return (
      <div>
    
        <input
          value={this.state.term}
          onChange={(e)=> this.setState({term:e.target.value})}
        />
      </div>
    )
  }

  // onInputChange(e){
  //   console.log(e.target.value);
  // }
}


export default SearchBar;
