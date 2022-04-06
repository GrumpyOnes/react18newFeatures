import React,{useState,useCallback} from 'react'
import { flushSync } from 'react-dom'
export default function Index() {

    const [count,setCount] = useState(0)

    const changeCount = useCallback(()=>{
        setCount(count+1)
        
    },[count])
  return (<><div>{count}</div>
  <button onClick={changeCount}>changecount</button>
  </>
    
  )
}
