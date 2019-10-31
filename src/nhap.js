import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            items: [],
        }

    }

    // componentDidMount() {
    //     fetch("https://api.github.com/users/hatrunguet98/repos")
    //     .then(res => res.json())
    //     .then(
    //         (result) => {
    //             this.setState({
    //             isLoaded: true,
    //             items: result,
    //             });
    //         },
    //     // Note: it's important to handle errors here
    //     // instead of a catch() block so that we don't swallow
    //     // exceptions from actual bugs in components.
    //         (error) => {
    //             this.setState({
    //                 isLoaded: true,
    //                 error
    //             });
    //         }
    //     )
    // }

    render(){
        return(
            <div className="container">
                <div className="input-group">
                    <input type="text" name placeholder="Nhập username" />
                    <button type="button" className="btn btn-success">Success</button>
                </div>
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
