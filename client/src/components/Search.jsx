import React, {Component} from "react";

class Search extends Component {
    state = {
        name: '',
        responseToPost: ''
    };

    handleSearch = async e => {
        e.preventDefault();
        const response = await fetch('/search', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: this.state.name }),
        });
        const body = await response.text();    
        this.setState({ responseToPost: body });
    };

    render() {
        return (
        <div className="item">
            <p>Search for stock by name</p>
            <form onSubmit={this.handleSearch}>
            <input
                type="text"
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })}
                placeholder="Stock name?"
                required="true"

            />
            <button type="submit">Search</button>
            </form>
            <p>{this.state.responseToPost}</p>
        </div>
        );
    }
}

export default Search;