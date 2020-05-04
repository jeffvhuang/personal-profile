import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header'

class App extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div>Hello World</div>
            </>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))