import React, { Component } from 'react';

export default class Child3 extends Component{

  constructor(props){
    super(props);
    this.state={
      data:''
    }

  }

  componentWillReceiveProps (child3data) {

  if( child3data.data == this.props.data )
  {

    setTimeout(function() { this.setState({data:'#000'}); }.bind(this), 10000);  /* setting time interval*/
  }
  else {
    this.setState({
        data:child3data.data
    });
  }

}

render(){
          return(<div class="box" style={{backgroundColor:this.state.data}}><p>CHILD 3</p></div>);
      }

  }
