import React from "react";

function Stats (props){
    let total = props.todos.length;
    let completed = props.todos.filter(todo=>todo.complete).length;
    let notCompleted = total - completed;
    return(
        <div className="todos-stats">
            <span className="todos-all-items">
                Total todos: <b> {total}</b>
            </span>

            <span className="todos-all-items">
                Completed todos: <b> {completed}</b>
            </span>
                
            <span className="todos-all-items">
                Todos not made: <b> {notCompleted}</b> 
            </span>
        </div>
    );
}
export default Stats;