import React, { Component } from 'react';

export default class Child2 extends Component{
constructor(props){
     super(props);
     this.state={
       data:''
     }
  }
  componentWillReceiveProps (child2data) {

  if(child2data.data!='')
    {
      if( child2data.data == this.props.data )
        {
          this.setState({
            data:'green'                   /* assigning the color to green if same color choosen*/
          })
        }
        else {
          this.setState({                 /* assigning the color white if new color choosen*/
            data:'#fff'
          })
      }
  }
  else{
    this.setState({                             /* assigning the color white by default if nothing choosen*/
      data:'#fff'
    })
  }
}
render(){

          return(<div className="box" style={{backgroundColor:this.state.data}}>
                 <p>CHILD 2</p>
          </div>);
      }
  }
