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
      <div className="search-bar">

        <input
          value={this.state.term}
          onChange={(e)=> this.onInputChange(e.target.value)}
        />
      </div>
    );
  }


  onInputChange(term){
    this.setState({term});//or {term:term}
    this.props.onSearchTermChange(term);
  }
}


export default SearchBar;
