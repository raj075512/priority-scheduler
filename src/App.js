// import Todoform from './Components/Todoform';
import './index.css';
import React, { useState } from "react";
import Todolist from './Components/Todolist';

const App=()=> {
  const [inputt,setinputt] = useState(""); 
  const [items,setItems]=useState([]);//for storing the data//
  

 const change=(e)=>{
  setinputt(e.target.value);

 };
const additem=()=>{
    setItems((oldItems)=>{
          return[...oldItems,inputt];
    });
    
    setinputt('');
}
const deleteItems =(id)=>{
    //  console.log("deleted");
     setItems((oldItems)=>{
       return oldItems.filter((arrElem,index)=>{
          return index!==id;
       })
     })
}

  return (<>
   <div className="box">
    <div className="main_container">
        <div className="content">
           <br/>
           <h1> What TODO next..?</h1>
           <div className="input">
           <input type="text" value={inputt} placeholder=' next!!' onChange={change}  />
           <button id="button"  onClick={additem} > add  </button>
           </div>
           <ol>
            {
              items.map((itemval,index)=>{
                
                return <Todolist text={itemval} 
                id={index}
                 key={index}  
                 onSelect={deleteItems}
                  />;
                  
              })
            }
             
           </ol>
        </div>
    </div>
    </div> 
    </>
  );
}

export default App;
