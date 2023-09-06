import axios from "axios";
import appConfig from "../Utils/AppConfig";
import Employee from "../Models/Employee";

class EmployeesService {
    public async getAllEmployees(): Promise<Employee[]> {
        const response = await axios.get<Employee[]>(appConfig.employeesUrl);
        return response.data;
    }
}

const employeesService = new EmployeesService();

export default employeesService;