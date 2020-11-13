import React, {Component} from "react";
import Table from "./Table";

class Filter extends Component {
    state = {
        price: '',
        order: '',
        responseToFilter: ''
    };

    handleFilter = async e => {
        e.preventDefault();
        const response = await fetch('/filter', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ price: this.state.price, order: this.state.order }),
        });
        const body = await response.json();    
        this.setState({ responseToFilter: body });
    };

    render() {
        return (
            <div className="item">
                <p>Filter stock by price</p>
                <form onSubmit={this.handleFilter}>
                    <input 
                        type="text"
                        value={this.state.price}
                        onChange={e => this.setState({ price: e.target.value })}
                        placeholder="Minimum Stock Price?" 
                        required="true"
                    />
                    
                    <input 
                        type="text"
                        value={this.state.order}
                        onChange={e => this.setState({ order: e.target.value })}
                        placeholder="Order(1: Asc; 0: Desc)" 
                        required="true"
                    />

                    <button type="submit">Filter</button>
                </form>
                <Table Tdata={this.state.responseToFilter} />
            </div>
        );
    }
}

export default Filter;