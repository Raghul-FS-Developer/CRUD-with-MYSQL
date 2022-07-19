import axios from 'axios';
import React,{useState,useContext,useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup'
import './Allstudents.css'
import {ToastContainer,toast}  from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function AddStudent() {

    let navigate = useNavigate();
    
 const formik = useFormik({
     initialValues:{
         name:'',
         email:'',
         mobile:'',
         degree:'',
         dept:''
     },
     onSubmit(values) {
        // Do stuff here...
        handleSave(values)
      
    },validationSchema:yup.object({
         name:yup.string().required('required'),
         email:yup.string().email('Give a valid email guys').required('Tell us your mail ID'),
         mobile:yup.string().matches(/^\d{10}$/,"Seriously, do you think this is ryt?").required("Tell us your mobile number then how we'll call you").length(10),
         degree:yup.string().required("Tell us your qualification"),
         dept:yup.string().required("which department?")
     }),
     
     
 })
    let handleSave =async(data)=>{
       try { let d=await axios.post('https://crud-with-mysql.herokuapp.com/post',data)
       if(d.status === 200){
        toast.success("posted successfully")
        setTimeout(()=> navigate('/all-students'),2000)
         
        }
         
       } catch (error) {
           window.alert(error)
       }
    }
    return (
      <><ToastContainer autoClose={2000} limit={1}/>
        <div className='add-student'>
            <h1 className='add-style'>Add Student</h1>
           <form onSubmit={formik.handleSubmit}>
           <label htmlFor='name'>Name</label>
            <input
                id='name'
                name='name'
                type='name'
                className="form-control"
                placeholder="name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.name}
                style={{width:'400px'}}
                            />

         {formik.touched.name && formik.errors.name?(<div style={{color:"red"}}>Necessary,this is how we will call you hereafter</div>) : null}
         { formik.touched.name && !formik.errors.name?(<div style={{color:"green"}}>Hello {formik.values.name}</div>) : null}  
         <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className="form-control"
              placeholder="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
              style={{width:'400px'}}
          
              />
      {formik.touched.email && formik.errors.email ? (<div style={{color:"red"}}>{formik.errors.email}</div>): null}
      { formik.touched.email && !formik.errors.email?(<div style={{color:"green"}}>Looks good</div>) : null}  
               <label htmlFor="mobile">Mobile</label>
             <input
              id="mobile"
              name="mobile"
              type="mobile"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.mobile}
              className="form-control"
              placeholder="mobile"
              style={{width:'400px'}}
              />
            {formik.touched.mobile && formik.errors.mobile ? (<div style={{color:"red"}}>{formik.errors.mobile}</div>): null}
            {formik.touched.mobile && !formik.errors.mobile ? (<div style={{color:"green"}}>You got a nice mobile number</div>): null}
              <label htmlFor="degree">Degree</label>
            <input
              id="degree"
              name="degree"
              type="degree"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.degree}
              className="form-control"
              placeholder="degree"
              style={{width:'400px'}}
              />
            {formik.touched.degree && formik.errors.degree ? (<div style={{color:"red"}}>{formik.errors.degree}</div>): null}
            {formik.touched.degree && !formik.errors.degree ? (<div style={{color:"green"}}>you studied {formik.values.degree}</div>): null}
              <label htmlFor="dept">Department</label>
            <input
              id="dept"
              name="dept"
              type="dept"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.department}
              className="form-control"
               placeholder="dept"
               style={{width:'400px'}}
              />
                   {formik.touched.dept && formik.errors.dept ? (<div style={{color:"red"}}>{formik.errors.dept}</div>): null}
                   {formik.touched.dept && !formik.errors.dept ? (<div style={{color:"green"}}>wow! Nice department</div>): null}
     <button type="submit" className="btn btn-success mt-4" >Submit</button>
           </form>
        </div>
        </>
    )
}

export default AddStudent
