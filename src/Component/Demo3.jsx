import React from 'react'

export const Demo3 = () => {

var students =[
        {id:1,name:"jayesh",age:22,marks:99,city:"dwarka",gender:"male"},
        {id:2,name:"prey",age:26,marks:81,city:"dwarka",gender:"male"},
        {id:3,name:"shayam",age:21,marks:55,city:"junaghad",gender:"male"},
        {id:3,name:"nandni",age:25,marks:45,city:"ahemdabad",gender:"female"},
    ]



    
  return (
    
    <div style={{textAlign:"center"}}>
        <h1>MAP DEMO 3</h1>
        
        <table border="2" align='center'>
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
                        return <tr>
                            <td>{st.id}</td>
                            <td>{st.name}</td>
                            <td>{st.age}</td>
                            <td>{st.marks}</td>
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