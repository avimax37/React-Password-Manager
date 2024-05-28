import React, { useEffect, useState } from "react";
import "./passwords.css";

const Passwords = () => {
  const [rows, setRows] = useState([]);
  const allPasswords = async () => {
    try {
      const data = await fetch("http://localhost:5000/api/v1/passwords");
      const jsondata = await data.json();
      setRows(jsondata.passwords);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    allPasswords();
  }, []);
  return (
    <div className="table-container">
      <h2>Stored Passwords</h2>
      <table>
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Title</th>
            <th>Description</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={row.id}>
              <td className="serial-no">{index + 1}</td>
              <td>{row.title}</td>
              <td>{row.description}</td>
              <td>{row.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Passwords;
