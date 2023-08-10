import { useState } from "react"

const InputTodo = ({change}) => {
   
    const changeValue = (e)=>{
        const {value} = e.target
       change(value)
    }

    return(
        <form className="todo" >
          <input onChange={changeValue} type="text" name='Create a new todo' placeholder='Create a new todo' className='newTodo'/>
        </form> 
    )
}
export default InputTodo