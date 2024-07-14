import React, { useState } from 'react';
import './EmployeeForm.css';

const EmployeeForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [department, setDepartment] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'title':
        setTitle(value);
        break;
      case 'department':
        setDepartment(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newEmployee = { name, email, title, department };
    onSubmit(newEmployee); // Call the onSubmit prop with the new employee data
    setName('');
    setEmail('');
    setTitle('');
    setDepartment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Employee Form</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={name} onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" value={title} onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="department">Department:</label>
        <input type="text" id="department" name="department" value={department} onChange={handleInputChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default EmployeeForm;
