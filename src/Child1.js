import React, { Component } from 'react';

export default class Child1 extends Component{

  constructor(props){
     super(props);
  }

render(){
          return(<div class="box" style={{backgroundColor:this.props.data}}><p>CHILD 1</p></div>);
      }

  }
