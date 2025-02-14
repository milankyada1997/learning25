import React from 'react'
import { useForm } from 'react-hook-form'

export const LoginForm = () => {
        
        const {register,handleSubmit,formState:{errors}} = useForm()
        console.log("errors...",errors)

        const submitHandler = (data)=>{
            console.log("data..",data)
        }

        const validationschema ={
            emailValidator:{
                required:{
                    value:true,
                    message:"email is required"
                },
                minLength:{
                    value:3,
                    message:"min length  is not valid"
                },
                maxLength:{
                    value:5,
                    message:"max length  is not valid"
                }
            },
            passwordValidator:{
                required:{
                    value:true,
                    message:"password is required"
                },
                minLength:{
                    value:5,
                    message:"min length  is not valid"
                },
                // maxLength:{
                //     value:50,
                //     message:"max length  is not valid"
                // }
            }

        }
  return (
    <div style={{textAlign:"center"}}>

        <h1>LOGIN FORM</h1>
        <form onSubmit={handleSubmit(submitHandler)}>

        <div>
        <label>EMAIL</label>
        <input type='text' {...register("email",validationschema.emailValidator)}></input>
        {/* <input type='text' minLength="5" required {...register("email",validationschema.emailValidator)}></input> */}
        <span style={{color:"red"}}>
            {errors.email?.message}
        </span>
        </div>

        <div>
            <label>PASSWORD</label>
            <input type='password' {...register("password",validationschema.passwordValidator)}></input>
            <span style={{color:"red"}}>
                {errors.password?.message}
            </span>
        </div>

        <div>
            <input type='submit' value="login"></input>
        </div>

        </form>
    </div>
  )
}
