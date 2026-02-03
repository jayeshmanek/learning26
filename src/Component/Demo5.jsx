import React from 'react'




export const Demo5 = () => {



  var students =[
        {id:1,name:"jayesh",age:22,marks:99,city:"dwarka",gender:"male"},
        {id:2,name:"prey",age:26,marks:81,city:"dwarka",gender:"male"},
        {id:3,name:"shayam",age:21,marks:55,city:"junaghad",gender:"male"},
        {id:3,name:"nandni",age:25,marks:45,city:"ahemdabad",gender:"female"},
    ]
  return (

<div style={{textAlign:"center"}}>
        <h1>MAP DEMO 3</h1>
        <table className='table' align='center'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>MARKS</th>
                    <th>CITY</th>
                    <th>GENDER</th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map((st)=>{
                        return <tr style={{backgroundColor:st.gender =="female" && "pink"}}>
                            <td>{st.id}</td>
                            <td>{st.name}</td>
                            <td style={{color: st.age>24 ? "red" :"black"}}>{st.age}</td>
                            {/* <td style={{backgroundColor:st.marks>80 ? "yellow":"white"}}>{st.marks}</td> */}
                            <td style={{backgroundColor:st.marks>80 && "yellow"}}>{st.marks}</td>
                            <td>{st.city}</td>
                            <td>{st.gender}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}