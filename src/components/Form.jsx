import React from 'react';
import PropTypes from 'prop-types';
class Form extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            title:''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        let title = this.state.title;

        if(title){
            this.props.onAdd(title);
        }
        this.setState({ title:'' });
    }
    handleChange(event){
        let title = event.target.value;
        this.setState({ title });
    }
    render(){
        return(
            <form className="todos-form" onSubmit={this.handleSubmit}>

                <input type="text" value={this.state.title} onChange={this.handleChange} placeholder="Что нужно сделать?"/>
                <button type="submit">Add</button>

            </form>
        );
    }

}
Form.PropTypes = {
    onAdd: PropTypes.func.isRequired
}
export default Form; 