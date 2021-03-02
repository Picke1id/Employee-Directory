import React, { useEffect, useState } from 'react';
import EmployeeTable from './components/EmployeeTable/EmpTable';
import FilterEmployees from './components/FilterEmployees/employees';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
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
