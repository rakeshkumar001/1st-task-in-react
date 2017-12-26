import React, { Component } from 'react';
import './App.css';

export default class task extends Component {
  constructor( props ){
         super( props )
         this.state = { showdiv : true };  {/*default showdiv variable with value as true, div will be shown */}

         this.toggleDiv = this.toggleDiv.bind(this);    {/* for binding with the toggleDiv , this method will get called after render is called, we need to bind this to the method. */}
     }

     toggleDiv = () => {                     {/* function to give the new value of the showdiv*/}
         const { showdiv } = this.state;
         this.setState( { showdiv : !showdiv } );    {/*invert the current result */}
     }

     render() {
         return (
           
             <div className="App-intro">
                 <br />
                 <button className="btn-tog" onClick={ this.toggleDiv }>click here to toggle text-Box</button>   {/*on click it will call function togglediv */}
                 <br /><br />
                 { this.state.showdiv && <Box /> }         {/* based on this condition... box component will toggle*/}
             </div>
         );
     }
 }

 class Box extends Component{
     render(){
         return(
           <textarea className="text-tog" rows="4" cols="50">
           Text box .....
            </textarea>
         )
     }
 }

