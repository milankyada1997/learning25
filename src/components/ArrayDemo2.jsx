import React from 'react'

export const ArrayDemo2 = () => {

    var student =[
        {
            name:"samir",
            age:"21",
            mark:"84"
        },
        {
            name:"amir",
            age:"24",
            mark:"44"
        },
        {
            name:"ram",
            age:"23",
            mark:"54"
        }
    ]
  return (
    <div style={{ textAlign: "center"}}>
        <h1 style={{ color:"blue" }}> ArrayDemo2</h1>
    {
        student.map((stu)=>{
            return <div>
                <h1>Name = {stu.name}</h1>
                <h2>Age = {stu.age}</h2>
                <h3>Mark = {stu.mark}</h3>

            </div>
        })
        }

        </div>
  )
}
