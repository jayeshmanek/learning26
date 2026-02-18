import React, { useState } from "react";
import axios from "axios";

export const ApiDemo2 = () => {

    const [message, setMessage] = useState("");
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        try {
            const response = await axios.get("https://node5.onrender.com/user/user/");
            
            setMessage(response.data.message);
            setUsers(response.data.data);

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "30px" }}>
            
            <h1>API DEMO 1</h1>

            <button 
                onClick={getUsers}
                style={{ padding: "8px 15px", cursor: "pointer" }}
            >
                GET
            </button>

            <h2 style={{ marginTop: "20px" }}>
                MESSAGE = {message}
            </h2>

            {users.length > 0 && (
                <table 
                    border="1" 
                    style={{ 
                        margin: "20px auto", 
                        width: "60%", 
                        borderCollapse: "collapse" 
                    }}
                >
                    <thead>
                        <tr>
                            <th style={{ padding: "8px" }}>SR NO</th>
                            <th style={{ padding: "8px" }}>Name</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id || user.id}>
                                <td style={{ padding: "8px" }}>
                                    {index + 1}
                                </td>
                                <td style={{ padding: "8px" }}>
                                    {user.name}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

        </div>
    );
};
