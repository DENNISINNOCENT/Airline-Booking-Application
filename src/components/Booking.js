import React,{ useEffect,useState} from 'react'


function Booking() {
const[formData,setFormData] =useState({
    id:"",
    firstName:"",
    middleName:"",
    lastName:"",
    email:"",
    idNo:"",
    passportNo:"",
    mobileNo:"",
    depature:"",
    destination:"",
    travelDate:"",
})
const[formErrors,setFormErrors]=useState({})
const[isSubmit,setIsSubmit]=useState(false)
function handleSubmit(event){
event.preventDefault()
fetch("http://localhost:8000/formData",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(formData)
    
    
})
setFormErrors(validate(formData))
setIsSubmit(true)
};
useEffect(()=>{
    console.log(formErrors)
    if(Object.keys(formErrors).length===0 && isSubmit){
        setFormErrors({formData})
    }
},[formErrors])

function handleChange(event){
    const name =event.target.name
    const value =event.target.value
    
    setFormData({
        ...formData,[name]:value
    })
    console.log(formData)

}
const validate=(values)=>{
    const errors={};
    // const regex ="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"

    if(!values.firstName){
        errors.firstName="Firstname is required!";
    }
     if(!values.middleName){
        errors.middleName="MiddleName is required!";
    }
     if(!values.lastName){
        errors.lastName="Lastname is required!";
    }
     if(!values.email){
        errors.email="Email is required!";
    }
    // else if(regex){
    //     errors.email="Use the correct format"
    // }
     if(!values.passportNo){
        errors.passportNo="Passport number is required!";
    }
     if(!values.idNo){
        errors.idNo="Identification number is required!";
    }
     if(!values.idNo){
        errors.mobileNo="Mobile number is required!";
    }
     if(!values.depature){
        errors.depature= " Depature is required!";
    }
     if(!values.idNo){
        errors.destination="Destination  is required!";
    }
     if(!values.idNo){
        errors.travelDate="Travel Date is required!";
    }
    return errors
};

  return (
    <div>
        {Object.keys(formErrors).length===0 && isSubmit?(<div className='ui message'>Booked Successfully</div>):null}
       
        <form className='bookingform' onSubmit={handleSubmit}>
            <div>
           <label htmlFor="firstname">FirstName</label>
           </div>
           
            <input type="text"name='firstName' placeholder='Enter your Firstname' value={formData.firstName}onChange={handleChange}autoComplete="off"/>
            <p>{formErrors.firstName}</p>
            <div>
             <label htmlFor="middlename">MiddleName</label>
             </div>
            <input type="text"name='middleName' placeholder='Enter your Middlename' value={formData.middleName}onChange={handleChange} autoComplete="off"/>
            <p>{formErrors.middleName}</p>
            <div>
            <label htmlFor="lastname">LastName</label>
            </div>
            <input type="text"name='lastName' placeholder='Enter your Last name'  value={formData.lastName}onChange={handleChange}autoComplete="off"/>
            <p>{formErrors.lastName}</p>
            <div>
                <label htmlFor="email">Email</label>
            </div>
            <input type="email"name='email'placeholder='Enter your Email'value={formData.email} onChange={handleChange}autoComplete="off"/>
            <p>{formErrors.email}</p>

            <div>
                <label htmlFor="idno">Identification Number</label>
           </div>
            <input type="text"name='idNo'placeholder='Enter your countrys Identification Number' value={formData.idNo}onChange={handleChange}autoComplete="off" />
            <p>{formErrors.idNo}</p>
            <div>
            <label htmlFor="passportno">Passport Number</label>
            </div>
            <input type="text" name='passportNo' placeholder='Enter your Passport Number' value={formData.passportNo}onChange={handleChange}autoComplete="off"  />
            <p>{formErrors.passportNo}</p>
            <div>
            <label htmlFor="mobileno">Mobile Number</label>
            </div>
            <input type="text" name='mobileNo' placeholder='Enter your Mobile No'value={formData.mobileNo} onChange={handleChange}autoComplete="off"/>
            <p>{formErrors.mobileNo}</p>
            <div>
           <label htmlFor="depature">Depature</label>
           </div>
            <input type="text"name='depature' placeholder='Enter your depature' value={formData.depature}onChange={handleChange}autoComplete="off"/>
            <p>{formErrors.depature}</p>
              <div>
           <label htmlFor="destination">Destination</label>
           </div>
           
            <input type="text"name='destination' placeholder='Enter your destination' value={formData.destination}onChange={handleChange}autoComplete="off"/>
            <p>{formErrors.destination}</p>

              <div>
           <label htmlFor="travelDate">Travel Date</label>
           </div>
           
            <input type="date"name='travelDate' value={formData.travelDate}onChange={handleChange}autoComplete="off"/>
            <p>{formErrors.travelDate}</p>
            
            <div></div>
           
            <div className='button'>
            <input type="submit" value="BOOK FLIGHT" className='button'/>
            </div>
            

        </form>
    </div>
  )
}

export default Booking
