import React from 'react'

export const SalesData = () => {

    var sales = [
        {
            id:201,
            day:"Mon",
            sales:1200,
            discount: "10%",
            profit:350,
        },
        {
            id:202,
            day:"Tue",
            sales:5410,
            discount: "55%",
            profit:2650,
        },
        {
            id:203,
            day:"Wed",
            sales:67000,
            discount: "30%",
            profit:10000,
        },
        {
            id:204,
            day:"Sat",
            sales:6500,
            discount: "70%",
            profit:1000,
        },
        {
            id:205,
            day:"Sun",
            sales:15000,
            discount: "40%",
            profit:3500,
        },
    ];

  return (
    <div style={{ textAlign: "center"}}>
        <h1 style={{ color: "yellow"}}>SalesData</h1>
        <table class="table table-bordered">
            <thead class="thead-dark">
                <tr>
                    <th>ID</th>
                    <th>DAY</th>
                    <th>SALES</th>
                    <th>DISCOUNT</th>
                    <th>PROFIT</th>                
                </tr>
            </thead>
            <tbody>
                {sales.map((sal) =>{
                    return (
                        <tr>
                            <td>
                                <span style={{color:sal.discount > "50%" ? "red" : ""}}>
                                    {sal.id}
                                </span>
                            </td>
                            <td>
                                <span>{sal.day}</span>
                            </td>
                            <td>
                                <span>{sal.sales}</span>
                            </td>
                            <td>
                                <span>{sal.discount}</span>
                            </td>
                            <td>
                                <span>{sal.profit}</span>
                            </td>
                        </tr>
                    
                    );

                })}

            </tbody>
        </table>
    </div>
  )
}
