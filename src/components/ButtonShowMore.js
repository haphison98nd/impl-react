import React, {Component} from 'react';

class ButtonShowMore extends Component {
    constructor(props){
        super(props);

        this.state = {
            
        }
        
    }
    render(){
        let response = this.props.response;
        return(
            <button onClick={this.props.onClickShowMore} type="button" className="btn btn-success showmore"> Show More </button>
        );
    }
}

export default ButtonShowMore;