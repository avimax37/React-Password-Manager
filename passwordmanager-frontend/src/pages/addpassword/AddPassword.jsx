import React, { useState, useEffect } from "react";

const AddPassword = () => {
  return (
    <div className="table-container">
      <h2>Add New Password</h2>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AddPassword