import React from 'react';
import favicon from '../favicon.svg';
import NavigationBar from '../components/NavigationBar';

const butStyle = {
    margin: '20px',
    width: '200px',
    background: '#D3D3D3',
    color: 'black'
};

function HomePage() {
    return (
        <div className="App">
            <NavigationBar></NavigationBar>
            <body className="App-header">
                <br></br>
                <br></br>
                <br></br>
                <h1>Optimized security footage storage, analysis, and archival.</h1>
                <br></br>
                <img src={favicon} className="App-logo" alt="logo" />
                <br></br>
                <div>
                    <a type="button" href="/about" class="btn btn-secondary btn-lg" style={butStyle}>Learn More</a>
                    <a type="button" href="/signUp" class="btn btn-secondary btn-lg" style={butStyle}>Sign Up!</a>
                </div>
            </body>

        </div>
    );
}

export default HomePage;
