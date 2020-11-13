import React, {Component} from "react";

class New extends Component {
    state = {
        newname: '',
        newprice: '',
        responseToNew: ''
    };

    handleNew = async e => {
        e.preventDefault();
        const response = await fetch('/new', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ newname: this.state.newname, newprice: this.state.newprice }),
        });
        const body = await response.text();    
        this.setState({ responseToNew: body });
        alert(this.state.responseToNew);
    };

    render() {
        return( 
        <div className="item">
            <p>Insert new stock</p>
            <form onSubmit={this.handleNew}>
                <input
                    type="text"
                    value={this.state.newname}
                    onChange={e => this.setState({newname: e.target.value})} 
                    placeholder="Stock name?" 
                    required="true"
                />
                <input 
                    type="text"
                    value={this.state.newprice}
                    onChange={e => this.setState({newprice: e.target.value})}
                    placeholder="Stock price?" 
                    required="true"
                />
                <button type="submit">Add</button>
            </form>
        </div>
        );
    }
}

export default New;