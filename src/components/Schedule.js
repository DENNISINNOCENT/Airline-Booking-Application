import React,{useEffect,useState} from 'react'


function Schedule() {
const[scheduledata,setScheduleData]=useState([])
    useEffect(()=>{
        fetch(" https://sheltered-lake-59954.herokuapp.com/schedule")
        .then((response)=>response.json())
        .then((scheduledata)=>setScheduleData(scheduledata))

    },[]);


  return (
    <div>
     {scheduledata.map((scheduledatas)=>{
           return   <div key={scheduledatas.id}>
            <table border= "2 border black" className='tableData'>
             <tbody>
              <th>Date</th>
              <th>Depature</th>
               <th>Depature Time</th>
               <th>Destination</th>
               <th>Arrival Time</th>
             </tbody>
            <tbody>
              <td>{scheduledatas.date}</td>
              <td>{scheduledatas.depature}</td>
              <td>{scheduledatas.depatureTime}</td>
              <td>{scheduledatas.destination}</td>
              <td>{scheduledatas.arrivalTime}</td>
            </tbody>
             

               
              </table>
              </div>
     })}
    </div>
  )
}

export default Schedule