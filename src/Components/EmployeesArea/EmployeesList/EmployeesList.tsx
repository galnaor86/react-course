import { useEffect, useState } from 'react';
import Employee from '../../../Models/Employee';
import employeesService from '../../../Services/EmployeesService';
import './EmployeesList.css';
import EmployeeRow from '../EmployeeRow/EmployeeRow';
import useTitle from '../../../Utils/useTitle';

function EmployeesList(): JSX.Element {
  useTitle('Employees');
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    employeesService
      .getAllEmployees()
      .then((employees) => setEmployees(employees))
      .catch((err) => alert(err.message));
  }, []);

  return (
    <div className='EmployeesList'>
      {employees.map((employee) => (
        <EmployeeRow key={employee.id} employee={employee}></EmployeeRow>
      ))}
    </div>
  );
}

export default EmployeesList;
