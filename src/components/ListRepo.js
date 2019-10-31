import React, {Component} from 'react';

class ListRepo extends Component {
    constructor(props){
        super(props);

        this.state = {
        
        }
    }
    
    render(){
        let response = this.props.response;
        console.log(response.length);
    	return (
                <ul className="list-repo">
                    {response.map(item => (
                        <li key={item.name}>
                            {item.name}
                        </li>
                    ))}
                </ul>
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
export default ListRepo;
