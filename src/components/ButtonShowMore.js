import React, {Component} from 'react';

class ButtonShowMore extends Component {
    constructor(props){
        super(props);

        this.state = {

        }
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
export default ButtonShowMore;
