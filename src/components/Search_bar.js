import React, { Component } from 'react';

class SearchBar  extends Component{

    constructor(props){
        super(props);

        this.state = { term: ''};
    }



    render(){
        return (
            <div className="search-bar">
                <input
                    placeholder={"Search"}
                    value={this.state.term}
                    onChange={ e => this.onInputChange(e.target.value)}
                       style={{ textAlign: "center"}}
                />

            </div>

        );
    }
    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;