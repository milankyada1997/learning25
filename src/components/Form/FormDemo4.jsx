import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo4 = () => {

    const {register,handleSubmit,formState:{errors}} = useForm()
    console.log("errors....",errors)

    const submitHandler = (data)=>{
        alert("submitted")
        console.log("data..",data)
    }

    const validationschema ={
        ageValidator:{
            required:{
                value:true,
                message:"Age is required"
                
            },

            min:{
                value:18,
                message:"min age is 18"
            },
            max:{
                value:60,
                message:"max age is 60"
            }

        },
        emailValidator:{
            required:{
                value:true,
                message:"email is reqired "

            }
         }
     }



  return (
    <div style={{textAlign:"center"}}>

        <h1>FORM DEMO 4</h1>
        <form onSubmit={handleSubmit(submitHandler)}>

            <div>
                <label>NAME</label>
                <input type='text'placeholder='name'{...register("name",{required:{value:true,message:"Name is Required"}})}></input>
                {/* {errors.name.message} */}
                
                {/* {  errors.name && errors.name.message} */}

                { errors.name?.message}
            </div>

            <div>
                <label>AGE</label>
                <input type='text'{...register("age",validationschema.ageValidator)}></input>
                <span style={{color:"red"}}>{errors.age?.message}</span>
            </div>

            <div>
                <label>EMAIL</label>
                <input type='text' {...register("email",validationschema.emailValidator)}></input>
                <span style={{color:"red"}}>{errors.email?.message}</span>
            </div>

            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
