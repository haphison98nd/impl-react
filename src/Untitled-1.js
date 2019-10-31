import React, { Component } from 'react';
import './App.css';
// import ListRepo from './components/ListRepo';
// import ButtonShowMore from './components/ButtonShowMore';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            response: [],
            value: '',
            length: '',
            isShowButton: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    // handleChange(event) {
    //     alert('A name was submitted: ' + this.state.value);
    //     event.preventDefault();
    // }
    handleChange(event){
        this.setState({
            value : event.target.value,
        });
    }

    handleSubmit() {
        let currentPage = 1;
        fetch("https://api.github.com/users/" + this.state.value + "/repos" + "?page=" + currentPage)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    response: result,
                });
                // console.log(this.state.response.length);
            },

            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    render() {
        let response = this.state.response;

        // let error = this.state.error;
        let i = 2;
        let j = 1;
        let elmButton;
        
        // this.handleSubmit(1);
        // if (response.length !== 0) {
        //     this.setState({
        //         isShowButton: true,
        //     });
        // }

        // if (this.state.isShowButton === true) {
        //     elmButton =  <button type="button" className="btn btn-block btn-success"> Show More </button>;
        // }


        return (
            <div className="container">
                <div className="form-inpt">
                    <form>
                        <label>
                            Name:
                            <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <input type="button" onClick={this.handleSubmit()} value="Submit" />
                    </form>

                </div>
                <div>
                    <ul className="list-repo">
                        {response.map(item => (
                            <li key={item.name}>
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>
                
                {/* {elmButton} */}
                
            </div>
        );

        // const { error, isLoaded, items } = this.state;
        // if(error){
        //     const { error, isLoaded, items } = this.state;
        // }
        // else if (!isLoaded) {
        //     return <div>Loading...</div>;
        // }
        // else{
        //     return (
        //         <ul>
        //             {items.map(item => (
        //                 <li key={item.name}>
        //                     {item.full_name}
        //                 </li>
        //             ))}
        //         </ul>
        //     );
        // }
    }
}
export default App;