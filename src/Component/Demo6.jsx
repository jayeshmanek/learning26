import React from 'react'

export const MapDemo6 = () => {
    var bank =[
        {id:1,name:"Shyam",balance:500000,city:"Junagadh",account:"current"},
        {id:2,name:"Jayesh",balance:400001,city:"okha",account:"saving"},
        {id:3,name:"prey",balance:400020,city:"dwarka",account:"current"},
        {id:4,name:"nandni",balance:300000,city:"ahmdavad",account:"saving"},
       

    ]

  return (
   <div style={{textAlign:"center"}}>
        <h1>Bank Details</h1>
          <table className='table' border="3" align='center'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>BALANCE</th>
                    <th>CITY</th>
                    <th>ACCOUNT</th>
                </tr>
            </thead>
            <tbody>
                {
                    bank.map((ba)=>{
                        return <tr style={{backgroundColor:ba.id ==5 && "orange"}}>
                            <td>{ba.id}</td>
                           <td style={{color: ba.name =="shyam" ? "red" :"black"}}>{ba.name}</td>
                           <td>{ba.balance}</td>
                             <td style={{backgroundColor:ba.city =="Upleta" && "gray"}}>{ba.city}</td>
                           
                             <td style={{color: ba.account =="saving" ? "green" :"black"}}>{ba.account}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>

  )
}