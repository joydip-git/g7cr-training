import { EmployeeManager } from "./manager/employeemanager";
import { Employee } from "./models/employee";

const manager = new EmployeeManager()
const status = manager.addEmployee(new Employee("anil", 1, 1000, 2000, 3000));
if (status)
    console.log("record added")
else
    console.log("failed")

const all = manager.getEmployees()
all.length > 0 ? all.forEach(e => console.log(e.calculateSalary())) : 'no records'

console.log(all)