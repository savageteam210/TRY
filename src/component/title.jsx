import { useState } from 'react'
import shape from '.././assets/Combined.svg'
export const Title = ({title,change}) => {
  
    const onClickHere = ()=>{
        change('TODO')
    }

    return (
        <header onClick={onClickHere}>
        <h1>TODO</h1>
        <img src={shape} className='forme'/>
    </header>
    )
}