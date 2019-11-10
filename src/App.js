import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';

// import {store} from './store';

// import reducer from "./reducers";
// import { createStore } from "redux";


// const initialState = {
//     error: '',
//     isLoaded: false,
//     response: [],
//     value: '',
//     isShowButton: false,
//     currentPage : 1,
// }
// const store = createStore(reducer, initialState);

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }
    render() {
        return (
            <div className="container wrapper">      
                <Form  />
            </div>
        ); 
    }
}
export default App;