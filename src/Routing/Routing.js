import React, { createContext, useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import ContactUs from '../Components/ContactUs'
import Home from '../Components/Home'
import Students from '../Components/Students'
import NewStudent from '../Components/NewStudent'
import Edit from '../Components/Edit'

const data=createContext()

const Routing = () => {
  const[arr,setarr]=useState([
    {Name:"John",Age:26,Course:"MERN",Batch:"October"},
    {Name:"Doe",Age:25,Course:"MERN",Batch:"November"},
    {Name:"Biden",Age:26,Course:"MERN",Batch:"Septembar"},
    {Name:"Barar",Age:22,Course:"MERN",Batch:"Septembar"},
    {Name:"Chris",Age:23,Course:"MERN",Batch:"October"},
    {Name:"Elent",Age:24,Course:"MERN",Batch:"November"}
  ]) 
  return (
    <div>
       <data.Provider value={{array:arr,setdata:setarr}}>
        <Routes>
          
           <Route path='/' element={<Home/>}></Route>
            <Route path='/student' element={<Students/>}></Route>
            <Route path='/Contact' element={<ContactUs/>}></Route>
            <Route path='/newstudent' element={<NewStudent/>}></Route>
            <Route path='/edit' element={<Edit/>}></Route>
         
        </Routes>
        </data.Provider>
    </div>
  )
}

export default Routing
export {data}