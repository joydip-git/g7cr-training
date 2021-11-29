import { employeeRepository } from "../data/employeerepository";
import { Employee } from "../models/employee";

export class EmployeeManager {
    getEmployees() {
        return [...employeeRepository];
    }
    addEmployee(emp: Employee) {
        const found = employeeRepository.find(e => e.id === emp.id)
        if (!found) {
            employeeRepository.push(emp)
            return true;
        }
        return false;
    }
}