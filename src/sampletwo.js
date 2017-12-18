import React, { Component } from 'react';

export default class Sampletwo extends Component{

  constructor(props){
    console.log(props);
    super(props);
      this.state ={
          hello : "hai"
      }
  }

  componentWillMount(){
    console.log("first");
  }

  render(){
      console.log("render");
      console.log();
      if(true){
        return(<div><p>{this.props.class}</p><p>Rakesh</p></div>);
      }else{
        return(<div><p>Mohit</p><p>Prathiksha</p></div>);
      }
        
  }

  componentDidMount(){
        console.log("kishore");
  }

  componentWillReceiveProps(newProps){
    console.log("Hey you got new props"+newProps.class);
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log(nextProps.class,this.props.class);
    if(nextProps.class == "madhuri"){
      return false;
    }else{
      return true;
    }
  }

  componentWillUpdate(){
    console.log("its going to get update");
  }

//   render()

  componentDidUpdate(){
    console.log("it's updated");
  }
  
}