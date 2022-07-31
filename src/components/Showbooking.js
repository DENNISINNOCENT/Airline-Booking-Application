// import React,{useEffect,useState} from 'react'

// function Showbooking(id) {
// const[formData,setFormData]=useState([])
//  const[showForm,setShowForm]=useState(false)

//      useEffect(()=>{
//         fetch(`http://localhost:8000/formData`)
//         .then((response)=>response.json())
//         .then((formData)=>setFormData(formData))

//     },[]);

//  function toggleForm(){
// setShowForm(showForm => !showForm)

//  }
// //  function handleDelete(id){
// //   const bookingList =formData.filter((data)=>data.id !==id)
// //   setFormData(bookingList)
// // }


//   return (
//     <div className='booklist'>
//      {formData.map((data,index)=>{
//            return   <div key={index}>
//             <table border= "2 border black" className='tableData'>
//               <tbody>
//               <th>Firstname</th>
//               <th>MiddleName</th>
//                <th>LastName</th>
//                <th>Passport Number</th>
//                <th>Identification Number</th>
//                 <th>Depature</th>
//                  <th>Destination</th>
//                   <th>Travel Date</th>


//               </tbody>
//               <tbody>
//               <td>{data.firstName}</td>
//               <td>{data.middleName}</td>
//               <td>{data.lastName}</td>
//               <td>{data.passportNo}</td>
//               <td>{data.idNo}</td>
//               <td>{data.depature}</td>
//               <td>{data.destination}</td>
//               <td>{data.travelDate}</td>

//               <button onClick={toggleForm} className ="buttonlist">{showForm  ? "verified":"Pending Verification"}</button>
//               {/* <button onClick={handleDelete}>CANCEL</button> */}
//               </tbody>
             

               
//               </table>
//               </div>
//      })}
//     </div>
//   )
// }

// export default Showbooking