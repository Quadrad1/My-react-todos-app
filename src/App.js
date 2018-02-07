import React, { Component } from 'react';

import TodosBody from './components/TodosBody.jsx';
import Head from './components/TodosHead.jsx';
import Stats from './components/Stats';
import Form from './components/Form';
import StopWatch from './components/StopWatch';

import './App.css';



class App extends Component {
  constructor(props) { 
    super(props);
    this.state = {
        todos:this.props.data
     }
  }
  handleEdit=(id,title,subTitle)=>{

    let todos = this.state.todos.map(index=>{
      if(index.id === id){
        index.title = title;
        index.description = subTitle;
      }
      return index;
    });
    
    this.setState({ todos });
    this.showState();

  }
  handleDelete=(id)=>{

      let todos = this.state.todos.filter((todo,i)=>{
        console.log(i);
        return todo.id !== id ? todo : 0;
     });
     for(let i=0; i<todos.length;i++){
      todos[i].id = i; 
     }
     this.setState({ todos });
     console.log(todos.length);
  }

  handleChange=(id)=>{
    let todos = this.state.todos.map(index=>{
      if(index.id === id){
        index.complete = index.complete ? false : true;
      }
      return index;
    });
    this.setState({ todos });
  }
  showState = ()=>{
    console.log(this.state.todos)
  }

  nextId(){
    //this._nextId = this._nextId || 4;
    return this.state.todos.length;
  }

  handleAdd = (title) =>{
    let todo = {
      id:this.nextId(),
      title:title,
      complete:false
    }
    let todos = [...this.state.todos, todo];
    this.setState({ todos });
  }
  

  render() {
    return (
      <div className="todos-wrap todos App">
        {this.showState()}
        <Head/>
        <Stats todos={this.state.todos}/>
        
        {
          this.state.todos.length > 0 
          ?
          this.state.todos.map(index =>{
            this.state.todos.length > 0
              return (
                <TodosBody className="todos-body" 
                          key={index.id} 
                          id={index.id} 
                          title={index.title} 
                          subtitle={index.description}
                          complete={index.complete}
                          onStatusChange={this.handleChange}
                          onEdit={this.handleEdit}
                          onDelete={this.handleDelete}
                />

              )
          })
          :
        <h2 className="no-task">{"Задач нет"}</h2>
        }
        
        <Form onAdd={this.handleAdd}/>
        <StopWatch />
      </div>
    );
  }
}

export default App;
