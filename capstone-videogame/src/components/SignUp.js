import React, { useState } from "react";
import { useNavigate } from "react-router";
 
export default function Create() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        username: "",
        password: "",
        age: "",
    });
    const navigate = useNavigate();

 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new record to the database.
    const newPerson = { ...form };
 
   await fetch("http://localhost:5000/record/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newPerson),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ name: "", email: "", username: "", password: "", age: "" })
   navigate("/");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
    <div>
        <h3>Create New Record</h3>
        <form onSubmit={onSubmit}>
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
            type="text"
            className="form-control"
            id="name"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
            />
        </div>
        <div className="form-group">
            <label htmlFor="position">Email</label>
            <input
            type="text"
            className="form-control"
            id="email"
            value={form.email}
            onChange={(e) => updateForm({ email: e.target.value })}
            />
        </div>
        <div className="form-group">
            <label htmlFor="position">Username</label>
            <input
            type="text"
            className="form-control"
            id="username"
            value={form.username}
            onChange={(e) => updateForm({ username: e.target.value })}
            />
        </div>
        <div className="form-group">
            <label htmlFor="position">Password</label>
            <input
            type="text"
            className="form-control"
            id="password"
            value={form.password}
            onChange={(e) => updateForm({ password: e.target.value })}
            />
        </div>
        <div className="form-group">
            <label htmlFor="position">Age</label>
            <input
            type="text"
            className="form-control"
            id="age"
            value={form.age}
            onChange={(e) => updateForm({ age: e.target.value })}
            />
        </div>
        
        <div className="form-group">
            <input
            type="submit"
            value="Create person"
            className="btn btn-primary"
            />
        </div>
        </form>
    </div>
);
}