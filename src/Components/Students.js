import React from 'react'
import {Link} from 'react-router-dom'
import './Components.css'
import { useSelector } from 'react-redux'


const Students = () => {

  const arr=useSelector((state)=>state.Slice.value)
  return (
   <>
    <div className="cls1">
      <h1> Students Details </h1>
      <Link to='/newstudent'><button className='add'>Add new student</button></Link>
    

      <br />
      < table border="1" cellSpacing="0" className="table">
  <thead>
    <tr>
      <th >Name</th>
      <th >Age</th>
      <th >Course</th>
      <th >Batch</th>
      <th >Change</th>
    </tr>
  </thead>

      {
        arr.map((value,index)=>{
        return(
   <tbody key={index}>
     <tr>
      <td>{value.Name}</td>
      <td>{value.Age}</td>
      <td>{value.Course}</td>
      <td>{value.Batch}</td>
      <td><Link to='/edit' state={{data:index}}>Edit</Link></td>
    </tr>
   </tbody>

        )
        })
        
        }
      </table>
     </div>
     </>
  )
}

export default Students