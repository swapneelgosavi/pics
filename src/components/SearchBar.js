import React from "react";

class SearchBar extends React.Component {
  state = { term: ''};

  onFormSubmit = (event) => {
    event.preventDefault(); 
    //when you enter text in textbox and press enter, form get submited and page get refresh
    //to prevent form submit after pressing enter use above method.
    this.props.onSubmit(this.state.term);
  } 

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit}  className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input 
                type="text" 
                value={this.state.term}
                onChange={e => this.setState({term: e.target.value})} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
