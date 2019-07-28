import React, { Component } from 'react';
import SearchResults from '../components/SearchResults';
import AcctNavBar from '../components/AcctNavBar';

class Search extends Component {

    constructor(props){
        super(props);
        this.state = {
            showResults: false
        };
        this.onClick = this.onClick.bind(this);
      }

    onClick() {
        this.setState({ showResults: !this.state.showResults })
    }

    render() {
        return (
            <div>
                <AcctNavBar></AcctNavBar>
            <div className="search container pt-2 my-1">
                <div className="form-group mb-4">
                    <div className="row">
                        <div className='col-sm-6'>
                            <label for="Profile" className>Begin time</label>
                            <input type="text" class="form-control" placeholder="Begin time"/>
                        </div>
                        <div className="col-sm-6">
                            <label for="Profile">End Time</label>
                            <input type="text" class="form-control" placeholder="End Time"/>
                        </div>
                    </div>
                    <b><label className="text-info" htmlFor="cook">What are you searching for?</label></b>
                    <input
                        name="cook"
                        type="text"
                        className="form-control"
                        placeholder="Camera 1..."
                        id="cook"
                    />
                    <button onClick={this.onClick} className="btn btn-info mt-3 mb-2">Search</button>
                </div>
            </div>
            {this.state.showResults ?
                            <SearchResults></SearchResults>
                            : null}

        </div>

        
        )
        
    }
}

export default Search