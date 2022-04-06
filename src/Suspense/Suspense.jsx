import React,{Suspense, useEffect,useState,SuspenseList} from 'react'
import getData from '../utils'
import ErrorBoundaryPage from './ErrorBoundaryPage'
import CustomFtch from './custom/Ftch'
import CustomPrms from './custom/Prms'
import Btn from './Button'

const initData = getData();
export default function MySuspense() {
    const [resource,setResource] = useState(initData);
  return (
    <>
    <ErrorBoundaryPage>
      <Suspense fallback={<div style={{color:'red'}}>Fetch Data Loading...</div>}>
        <CustomFtch resource = {resource} />
      </Suspense>
      <Suspense fallback={<div style={{color:'green'}}>Fetch Data Loading...</div>}>
        <CustomPrms resource = {resource} />
      </Suspense>
      <button onClick={()=>{setResource(getData())}} >Refrash</button>
      <br/>
      <Btn refresh={()=>{setResource(getData())}} />
    </ErrorBoundaryPage>

    </>
  )
}
