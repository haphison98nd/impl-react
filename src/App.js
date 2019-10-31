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
            isShowButton: false,
            currentPage : 1,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCheck = this.handleCheck.bind(this);

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
        
        fetch("https://api.github.com/users/" + this.state.value + "/repos" + "?page=" + this.state.currentPage)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    console.log(this.state.response);
                    this.setState({
                        isLoaded: true,
                        response: this.state.response.concat(result),
                        currentPage: this.state.currentPage+1,
                    });
                    this.handleCheck();
                    // console.log(this.state.response);
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
    handleCheck(){
        // let elmButton= null;
        // this.setState({currentPage:this.state.currentPage+1});
        fetch("https://api.github.com/users/" + this.state.value + "/repos" + "?page=" + this.state.currentPage)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isShowButton: result.length !==0 
                });
            },
            (error) => {
                // this.setState({
                //     isLoaded: true,
                //     error
                // });
            }
        )
        
    }

    render() {
        let response = this.state.response;
        let elmButton = null;
        if (this.state.isShowButton == true) {
            elmButton = <button onClick={this.handleSubmit} type="button" className="btn btn-block btn-success"> Show More </button>;
        }
        console.log(this.state.isShowButton);
        return (
            <div className="container">
                <div className="form-inpt">
                    <form>
                        <label>
                            Name:
                            <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <input type="button" onClick={this.handleSubmit} value="Submit" />
                    </form>

                </div>
                <div>
                    <ul className="list-repo">
                    {response.map(item => (
                        <li key={item.name}>
                            {item.full_name}
                        </li>
                    ))}

                    </ul>
                </div>
                {elmButton}
                {/* <button onClick={this.handleCheck} ></button> */}
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