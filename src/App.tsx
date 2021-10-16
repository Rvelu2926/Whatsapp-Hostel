import React from 'react';
import './App.css';

function App() {

  function getName(name : string){
    alert(name)
  }

  function add(a:number){
    alert(a+10)
  }

  function consoleName(name:string){
    console.log(name)
  }


  

  return (
    <div>
      <h1>New Heading</h1>
      <h3>function compoennt added</h3>
      <button onClick={()=> {add(1)}}>Click Me !</button>
      <button onClick={()=> {getName('vetri')}}>Click Me !</button>
    </div>
    );
}

export default App;


export function add(a:any,b:any){

}