import React from 'react'


var cities = [
    { id: 1, name: "Ahmedabad", pop: 8000000, AQI: 302 },
    { id: 2, name: "dwarka", pop: 3000000, AQI: 250 },
    { id: 3, name: "jamnagar", pop: 5000000, AQI: 300 },
  ];

export const Demo4 = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>MAP DEMO 4</h1>
      <table className="table" align="center">
        <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>POPULATION</th>
                <th>AQI</th>
            </tr>
        </thead>
        <tbody>
            {
                cities.map((city)=>{
                    return <tr>
                        <td>{city.id}</td>
                        <td>{city.name}</td>
                        <td>{city.pop}</td>
                        <td>{city.AQI}</td>
                    </tr>
                })
            }
        </tbody>
      </table>
    </div>
  );
};
