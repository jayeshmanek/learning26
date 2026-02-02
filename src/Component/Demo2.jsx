import React from 'react'

export const Demo2 = () => {

    var users =[
        {student:1,name:'jayesh',age:22,gender:"male"},
        {student:2,name:"prey",age:22,gender:"male"},
        {student:3,name:"shyam",age:20,gender:"female"}
    ]
  return (
    <div style={{textAlign:"center"}}>
        <h1> DEMO2</h1>
        {
            users.map((user)=>{
                return <li>{user.id} -{user.name} {user.age} -{user.gender}</li>
            })
        }
    </div>
  )
}