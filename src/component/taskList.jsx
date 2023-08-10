import { useEffect } from "react"
import { useState } from "react"

const TaskList = (props) => {
  const [checked,setChecked] = useState()
  const [countValue, setCountValue]= useState()
  const [filteredTask,setFilteredTask]=useState(props.tap)
  
  const check = (indexValue,event)=>{
      props.changeDone(prev=>{
        return props.tap.map((elem,index)=>{
            if(index == indexValue){
               return {...elem, done:event.target.checked}
            }
            return elem;
        })
      })
  }

  const getTaskFilteredByStatus=(status)=>{
    let completedTask=[]
    completedTask = props.tap.filter((task)=>task.done === status)
    setFilteredTask( completedTask);
  }

  useEffect(()=>{
    setFilteredTask(props.tap)
    countleft()
  },[props.tap])

  const countleft=()=>{
    let count =0;
    for (let i=0; i < props.tap.length; i++){
      if( props.tap[i].done == false){
        count++;
      }
    }
    setCountValue(count)
  }

  return (

    <div className='liste'>
      {filteredTask.map((tap, index) => {
        return (
            tap.done ? <div key={index} className="trait">
            <input onChange={(event)=>check(index,event)} type="radio" value={tap.done} className='test' id={tap.done}/>{tap.libelle} <hr />
          </div> : 
           <div key={index}>
            <input onChange={(event)=>check(index,event)} type="radio" value={tap.done} className='test' id={tap.done}/>{tap.libelle}<hr />
          </div>
        )
      })}
      <div className="all">
        <p>{countValue+"  "} 
           items left</p>
        <div className="three">
        <p className="fleche" onClick={()=>setFilteredTask(props.tap)}>All</p>
        <p className="fleche" onClick={()=>getTaskFilteredByStatus(false)}>Active</p>
        <p className="fleche" onClick={()=>getTaskFilteredByStatus(true)}>Completed</p>
        </div>
        <p>clear completed</p>
      </div>
    </div>

  )

}
export default TaskList