import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Child1 from './Child1.js';
import Child2 from './Child2.js';
import Child3 from './Child3.js';
import Task from './task1.js';

  class App extends Component {
    constructor(props){
        super(props);
       this.getColor=this.getColor.bind(this);
       this.state={
         color:'#fff'
       }
    }
   getColor(e)
   {
     this.setState({
         color:e.target.value   
     });
   }
 render() {
         return (<div className="App">
                   <div className="App-intro">
                       <select onChange={(e)=>this.getColor(e)}>   
                           <option value="">Select color</option>
                            <option value="red">Red</option>
                            <option value="red">Red</option>
                            <option value="blue">Blue</option>
                            <option value="yellow">Yellow</option>
                        </select>
                           <Child1 data={this.state.color}/>      
                            <Child2 data={this.state.color}/>
                            <Child3 data={this.state.color}/>
                            
                            <Task/>
                   </div>
           </div>
         );
     }
}
 export default App;
