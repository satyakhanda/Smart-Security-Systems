import React, { Component } from 'react';
import favicon from '../favicon.svg';
import NavigationBar from '../components/NavigationBar';

const butStyle = {
    margin: '20px',
    width: '200px',
    background: '#D3D3D3',
    color: 'black',
};

const AppStyle = {
    justifyContent: "center"
};

export default class HomePage extends Component {

    state = {
        showResults: true
    };

    onClick() {
        this.setState({ showResults: !showResults });
    }

    render() {
        return (
            <div>
                <div className="Container">
                    <NavigationBar></NavigationBar>
                    <body className="App-header" style={AppStyle}>
                        <h1>Optimized security footage storage, analysis, and archival.</h1>
                        <br></br>
                        <img src={favicon} className="App-logo" alt="logo" />
                        <br></br>
                        <input type="submit" value="Search" onClick={this.onClick} />
                        {this.state.showResults ?
                            <div>
                                <a type="button" href="/about" class="btn btn-secondary btn-lg" style={butStyle}>Learn More</a>
                                <a type="button" href="/signUp" class="btn btn-secondary btn-lg" style={butStyle}>Sign Up!</a>
                            </div>
                            : null}


                    </body>
                </div>
            </div>
        );
    }
}



