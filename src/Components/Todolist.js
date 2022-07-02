import React from 'react'

const Todolist = (props) => {


  return (
    <>
    <div className="list">
    <div className="todo_style">
         <li>  {props.text}     </li>
         <button className='delete_button' onClick={()=>{
          props.onSelect(props.id);
          }}> delete   </button> 
       
    </div>
    </div>
     
     </>
  );
}

export default Todolist;
