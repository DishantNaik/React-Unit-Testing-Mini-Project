import React, { Component } from 'react';
import './Home.css';
import axios from 'axios';
import Warning from '../Warning/Warning';

class Home extends Component {

    state = {
        projName: 'not available',
        openComp: false
    }

    getName = ()=>{
        axios.get('https://reqres.in/api/users/2').then((res)=>{
            this.setState({projName: res.data.data.first_name});
        },
        err=>{
            this.setState({projName: 'not available'});
        });
    }

    reset = ()=>{
        this.setState({openComp: true});
    }

    render() {
        return (

            <div id='mainDiv2'>
                <div className='txtDiv'>Owner of this coffee shop is <span id='txtSpan'>{this.state.projName}</span></div>
                <div className='btnDiv'>
                    <button className="asyncBtn" style={{backgroundColor: "#585656"}} onClick={this.reset} >Click Me</button>
                    <button className="asyncBtn" style={{marginLeft: "15%"}} onClick={this.getName}>Get Name</button>
                </div>
                {this.state.openComp && <Warning onClose={()=>this.setState({openComp:false})} ></Warning>}
            </div>

        );
    }
}

export default Home;
