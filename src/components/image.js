import React, {Component} from 'react';

class Image extends Component {
    onPlus(){

    }
    onMinus(){

    }
    render() {
        return (
            <div>
                <div className="container">
                    <h1>Image Zone</h1>
                    <img src ={this.props.picture}/>
                    <br/>
                    <button value="plus"> + </button>
                    <button value="minus"> - </button>
                </div>
            </div>
        );
    }
}

export default Image;