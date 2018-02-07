import React from 'react';
import PropTypes from 'prop-types';

import changeIcon from '../checkbox-pen-outline.svg'
import completeIcon from '../completed-tasks.svg';
import deleteIcon from '../rubbish-bin.svg'


class TodosBody extends React.Component{
    constructor(props){
        super(props);

        this.state={ 
            editing: false
         }
         this.renderDisplay = this.renderDisplay.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        let title = this.refs.title.value;
        let subTitle = this.refs.subTitle.value;
        if(title && subTitle){
            this.props.onEdit(this.props.id,title,subTitle);
        }
        this.setState({ editing:false });
    }
    renderDisplay(){
        return(
            <form className="task-option" onSubmit={this.handleSubmit}>

                <label className="task-option-label">Task title</label>
                <input type="text" ref="title" className="task-option-input"/>

                <label for="task-option-input" className="task-option-label">Task description</label>
                <input type="text" ref="subTitle" className="task-option-input"/>

                <button type="submit" className="task-change_btn">Изменить</button>
            </form>
        )
    }
    render(){
        return(
            <div className={this.props.complete ? "task task--off" : "task"}>
                <div className="task-name">
                    <h3 className="task-name-title">
                    { this.props.id + 1}. {this.props.title}
                    </h3>
                    <span className="task-name-description">
                        {this.props.subtitle}
                    </span>
                </div> 
                    
                <div className="task-tools">
                    <div className="task-complete" onClick={() => this.props.onStatusChange(this.props.id)}>
                        <img src={completeIcon} alt="deleteIcon" />
                    </div>
                    <div className="task-change" onClick={() => this.setState({ editing:!this.state.editing })}>
                        <img src={changeIcon} alt="deleteIcon" />
                    </div>
                    <div className="task-delete" onClick={() => this.props.onDelete(this.props.id)}>
                        <img src={deleteIcon} alt="deleteIcon" />
                    </div>
                </div>
                {this.state.editing ? this.renderDisplay() : ''}
                
            </div>
        );
    }
}
TodosBody.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    onStatusChange: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete:PropTypes.func.isRequired
  };


export default TodosBody;