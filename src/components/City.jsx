import React from 'react'

export const City = () => {
  var city = [
    {
        id:101,
        cityname:"Delhi",
        population:310000,
        aqi:310, 
    },
    {
        id:102,
        cityname:"Mumbai",
        population:200000,
        aqi:163, 
    },
    {
        id:103,
        cityname:"Kolkata",
        population:450000,
        aqi:325, 
    },
    {
        id:104,
        cityname:"Bengaluru",
        population:420000,
        aqi:110, 
    },
    {
        id:105,
        cityname:"Jaipur",
        population:70000,
        aqi:195, 
    },
    {
        id:106,
        cityname:"Hyderabad",
        population:100000,
        aqi:300,
    },
  ];
  return (
    <div style={{ textAlign: "center" }}>
        <h1 style={{color: "yellowgreen"}}>Cities Details</h1>
        <table style={{marginTop:"100px"}} class="table table-striped table-dark">
        <thead>
            <tr>
                <th>ID</th>
                <th>CITYNAME</th>
                <th>POPULATION</th>
                <th>AQI</th>
            </tr>
        </thead>
        <tbody>
            {city.map((user) =>{
                return(
                <tr>
                    <td>{user.id}</td>
                    <td>{user.cityname}</td>
                    <td>
                        <span style={{color:user.population > 200000 ? "red" : ""}}>
                            {user.population}
                        </span>
                    </td>
                    <td>
                        <span style={{backgroundColor:user.aqi >= 300 ? "red" : "green"}}>
                            {user.aqi}
                        </span>
                    </td>
                </tr>
                )
            })}
        </tbody>
    </table>
    </div>
  )
}
