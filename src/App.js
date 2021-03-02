import React, { useEffect, useState } from 'react';
import EmployeeTable from './components/EmpTable.js';
import FilterEmployees from './components/employees.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import { getEmployees } from './utils/api';

function App() {
  const [initialEmployees, updateAvailableEmployees] = useState([]);
  const [employeesToRender, updateEmployeesToRender] = useState([]);

  useEffect(() => {
    getEmployees().then(({ data: { results } }) => updateAvailableEmployees(results));
  }, []);

  return (
    <div className="App">
      <Header />
      <FilterEmployees employees = { initialEmployees } updateEmployees = { updateEmployeesToRender } />
      <EmployeeTable employees = { employeesToRender} />
      <Footer />
    </div>
  );
}
    
export default App;
