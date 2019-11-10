import React, {Component} from 'react';

class List extends Component {
    constructor(props){
        super(props);

        this.state = {
            
        }
        
    }
    render(){
        let response = this.props.response;
        return(
            <div>
                <ul className="list-repo">
                    {response.map(item => (
                        <li key={item.name}>
                            {item.full_name}
                        </li>
                    ))}
                </ul> 
            </div>
        );
    }
}

export default List;