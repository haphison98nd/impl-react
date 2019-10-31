import React, {Component} from 'react';

class GetRepoFirst extends Component {
    constructor(props){
        super(props);

        this.state = {

        }
    }
    handleSubmit() {
        fetch("https://api.github.com/users/" + this.state.value + "/repos" + "?page=1")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        response: result,
                    });
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
    render(){
        let isShowButton = this.props.isShowButton;
        if (isShowButton){
            return (
                <button>
                    Show More
                </button>
            );
        }
        else{
            return 0;
        }
    	

    }
} 
export default GetRepoFirst;
