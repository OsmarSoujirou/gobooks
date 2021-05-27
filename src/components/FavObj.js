import React, {Component} from 'react';

class FavObj extends Component {
    constructor(){
        super();
        this.state = {
            clicked: false
        }
    }

    changeColor(){
        this.setState({clicked: !this.state.clicked})
    }

    render(){
        var btn_class = this.state.clicked ? "fill-star fas fa-star" : "void-star fas fa-star";

        return (
             <div>
                <i className={btn_class} onClick={this.changeColor.bind(this)}></i>
             </div>
        )
    }
}


export default FavObj;