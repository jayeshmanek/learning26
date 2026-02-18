import axios from "axios";
import { useState } from "react";   // ✅ added

export const ApiDemo1 = () => {

    const [message, setmessage] = useState("")
    const [users, setusers] = useState([])

    const getUsers = async () => {

        const response = await axios.get("https://node5.onrender.com/user/user/")
        console.log(response)
        console.log(response.data)
        console.log(response.data.message)
        setmessage(response.data.message)
        console.log(response.data.data)
        setusers(response.data.data)

        // ❌ removed get() (because it does not exist)
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>API DEMO 1</h1>
            <button onClick={() => { getUsers() }}>GET</button>
            <h1>MESSAGE = {message}</h1>

            {
                users.map((user) => {
                    return <li key={user._id || user.id}>{user.name}</li>
                })
            }

        </div>
    )
}
