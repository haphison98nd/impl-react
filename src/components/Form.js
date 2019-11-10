import React, {Component} from 'react';
import List from './List';
import ButtonShowMore from './ButtonShowMore';

class Form extends Component {
    constructor(props){
        super(props);

        this.state = {
            error: '',
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

    handleChange(event){
        this.setState({
            value : event.target.value,
            currentPage : 1,
            isShowButton: false,
            response: [],
        });
    }

    handleSubmit() {
        fetch("https://api.github.com/users/" + this.state.value + "/repos" + "?page=" + this.state.currentPage)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        response: this.state.response.concat(result),
                        currentPage: this.state.currentPage+1,
                    });
                    this.handleCheck();
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
        fetch("https://api.github.com/users/" + this.state.value + "/repos" + "?page=" + this.state.currentPage)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isShowButton: result.length !==0 
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    render(){
        let elmButton = null;
        if (this.state.isShowButton) {
            elmButton = <ButtonShowMore onClickShowMore = {this.handleSubmit} />
        }
        return(
            <div>
                <div className="form-input">
                    <form>
                        <label>
                            Name:
                            <input className="username" type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <input className="btn-submit btn-success" type="button" onClick={this.handleSubmit} value="Submit" />
                    </form>
                </div>
                <List response = {this.state.response} />;
                {elmButton}
            </div>
            
        );
    }
} 
export default Form;
