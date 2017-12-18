import React, { Component } from 'react';

export default class SampleThree extends Component{

  constructor(props){
    console.log(props);
    super(props);
      this.state ={
          hello : "hai"
      }
  }

  componentWillMount(){
    console.log("first LAtha");
  }

  render(){
      console.log("render latha");
      console.log();
      if(true){
        return(<div><p>{}</p><p>Latha</p></div>);
      }else{
        return(<div><p>Mohit</p><p>Prathiksha</p></div>);
      }
        
  }

  componentDidMount(){
        console.log("latha");
  }

  componentWillReceiveProps(newProps){
      console.log("second render");
  }

  shouldComponentUpdate(){
    return true;
  }

  componentWillUpdate(){

  }

//   render()

componentDidUpdate(){

}
  
}