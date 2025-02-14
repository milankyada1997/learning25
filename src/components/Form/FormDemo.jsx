import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo = () => {

    const {register,handleSubmit} = useForm()

    const submitHandler = (data)=> {
        console.log("data.....",data)
    }


  return (
    <div style={{textAlign:"center"}}>
        <h1>FORM DEMO</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div>
            <label>NAME</label>
            <input type='text' placeholder='enter name' {...register("first name:")}></input>
          </div>
          <div>
                <label>AGE</label>
                <input type='number' placeholder='enter age' {...register("age")}></input>
            </div>
            <div>
                <select {...register("country")}>
                    <option value="india">INDIA</option>
                    <option value="usa">USA</option>
                    <option value="fail">UK</option>
                </select>
            </div>
            <div>
                <input type='submit' ></input>
            </div>

            
        </form>
    </div>
  )
}
