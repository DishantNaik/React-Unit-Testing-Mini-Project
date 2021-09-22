import React, { Component } from 'react';
import './Warning.css';
import axios from 'axios';

class Warning extends Component {

    state= {
        txt: 'Boogeyman'
    }

    onClose = ()=>{
        this.props.onClose();
    }
    
    onUpdate = ()=>{
        if(this.props.someProp === 'TCS'){
            this.setState({txt: 'someone'});
        }
    }

    render() {
        return (

            <div className='mainDiv'>
                <div className='txtDivWarning'>Achieve 100% coverage or {this.state.txt} will attack you !!!</div>
                <div className='btnDivWarning'>
                    <button className="asyncBtnWarning" style={{backgroundColor: "#3d994f"}} onClick={this.onUpdate} >Update</button>
                    <button className="asyncBtnWarning" style={{backgroundColor: "#ff7a41", marginLeft: '2%'}} onClick={this.onClose} >Close</button>
                </div>
            </div>

        );
    }
}

export default Warning;
