const Employee = require('../lib/Employee')

describe('Employee Test Suite', ()=>{
        it("can get values from employee constructor", () => {
            const employee = new Employee('Jim','12','asifjasdfo@gmail.com');
            
            expect(employee.getName()).toBe('Jim');
            expect(employee.getId()).toBe('12');
            expect(employee.getEmail()).toBe('asifjasdfo@gmail.com');
            expect(employee.getRole()).toBe('Employee')
        })
        it("Can set values", () => {
            const employee = new Employee('Jim','12','asifjasdfo@gmail.com');
            expect(typeof employee).toBe('object')
            expect(employee.name).toBe('Jim');
            expect(employee.id).toBe('12');
            expect(employee.email).toBe('asifjasdfo@gmail.com');
        })

})