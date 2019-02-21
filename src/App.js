import React, {Component} from 'react';
/*import Home from './components/Home'*/
import New from './components/New'
import List from './components/List'
import Date from './components/Date'
/*import logo from './assets/images/logo.svg';*/

/*import './assets/css/App.css';*/

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    {/*<Home></Home>*/}
                    <New></New>
                    <List></List>
                    <Date>  </Date>
                </header>
            </div>
        );
    }
}

export default App;
