import React, { useState, useEffect } from 'react';
import EmployeeForm from './components/EmployeeForm';

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const storedEmployees = localStorage.getItem('employees');
    if (storedEmployees) {
      setEmployees(JSON.parse(storedEmployees));
    }
  }, []);

  const addEmployee = (newEmployee) => {
    const updatedEmployees = [...employees, newEmployee];
    setEmployees(updatedEmployees);
    saveData(updatedEmployees); // Save updated employees after adding
  };

  const saveData = (data) => {
    localStorage.setItem('employees', JSON.stringify(data));
  };

  return (
    <div className="App">
      <EmployeeForm onSubmit={addEmployee} /> {/* Pass addEmployee as onSubmit prop */}
    </div>
  );
}

export default App;
