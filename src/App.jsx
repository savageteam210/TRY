import { useState } from 'react'
import mont from './Bitmap-2.png';
import viteLogo from '/vite.svg'
import './App.css'
import {Title} from './component/title'

import TaskList from './component/taskList'
import { Button } from './component/button'


function App() {
   const [todo, setTodo] = useState('TODO')
   const [valueInput, setValueInput] = useState('')
   const [tap, setTap]= useState([])
   


   function handlechange(e){
    setValueInput(e.target.value)
    
   }
  //  avec le const et le push cest pour envoyer une autre ligne lorsq'on appuye sur le bouton
   function handleClick(e){
    // celui là permet a ce que ça actualise pas tout seul
    e.preventDefault()
    // pour que le suivant input vienne a la ligne une fois qu'on appuye sur entrer
    // const tab=[]
    // tab.push({
    //   done : false,
    //   libelle : valueInput
    // }) 
  
    //pour vider le input apres avoir appuyer sur le button  
   setTap([...tap,{
    done : false,
    libelle : valueInput
  }])
   setValueInput("")
   
  }
  
    
  return (
    <>
    
    <div className='image'>
    <img src={mont}/>
    </div>
    <div className='app-todo-container'>
   <div className='todo-container-form'>
    <Title title={todo} change={setTodo}/>
    <div className="tout">
      {/* passer au suivant en tapant sur la touche entrer */}
    <form onSubmit={handleClick}>
    <input onChange={(e)=> handlechange(e)} type="text"  value={valueInput} name='Create a new todo' placeholder='Create a new todo' className='newTodo'/>
    </form>
      <TaskList tap={tap} changeDone={setTap}/>
    </div> 

    </div>
    </div>
    </>
  )
}

export default App
