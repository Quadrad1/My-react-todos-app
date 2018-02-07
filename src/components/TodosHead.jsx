import React, { Component } from 'react';
import logo from '../checkbox-pen-outline.svg';
//import PropTypes from 'prop-types';

class Head extends Component{
    constructor(){
        super()
        this.state={
            newHeadings:'',
            headings:'My Todos App',
            newTaskName:'none',
            newTaskDescription:'none',
            toggleChange: true,

        }     
    }
    toggleChange=()=>{
        this.setState({
            toggleChange: !this.state.toggleChange
        });
    }
    setHeadings=(e)=>{
        this.setState({
            newHeadings:e.target.value 
        });
    }
    setNewTitle=()=>{
        this.setState({
            headings:this.state.newHeadings,
            toggleChange:true
        });
    }
    render(){
        return(
            <div className="todos-head"> 
                <div className="todos-title"> 
                    {this.state.headings}
                    <div className="change-title-btn" htmlFor="Change head title" onClick={this.toggleChange}>
                        <img src={logo} alt="qwerty"/>
                    </div> 
                </div>
                   
                <div className="todos-change" hidden={this.state.toggleChange}>
                    <div className="todos-change-tools head-tools">
                        <label htmlFor="head-tools-input" className="head-tools-label">New Title</label>
                        <input type="text" className="head-tools-input" onChange={this.setHeadings}/> 
                        <button onClick={this.setNewTitle}>Ok</button>
                    </div>
                </div>
                <div className="todos-change" hidden={true}>
                    <div className="todos-change-tools head-tools">
                        <label for="head-tools-input" className="head-tools-label">New Task Name</label>
                        <input type="text" className="head-tools-input" onChange={this.setTask}/>
                        <label for="head-tools-input" className="head-tools-label">New Task Description</label>
                        <input type="text" className="head-tools-input" onChange={this.setTask}/> 
                        <button onClick={this.setNewTask}>Add</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Head;