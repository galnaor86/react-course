import Employee from '../../../Models/Employee';
import './EmployeeRow.css';

interface EmployeeRowProps {
  employee: Employee;
}

function EmployeeRow({ employee }: EmployeeRowProps): JSX.Element {
  return (
    <div className='EmployeeRow'>
      <div>{employee.firstName}</div>
      <div>{employee.lastName}</div>
      <div>{employee.title}</div>
      <div>{employee.country}</div>
      <div>{employee.city}</div>
      <div>{employee.birthDate}</div>
      <div>
        <img
          src={employee.imageUrl}
          width={80}
          height={80}
          style={{ borderRadius: '50px' }}
        ></img>
      </div>
    </div>
  );
}

export default EmployeeRow;
