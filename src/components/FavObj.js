import React, {Component} from 'react';

class FavObj extends Component {

    render(){
        
        return (
             <div className={this.props.favorito} >
                <a>FAVORITO</a>
             </div>
        )
    }
}


export default FavObj;