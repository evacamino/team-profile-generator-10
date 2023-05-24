const Manager = require('../lib/Manager')

describe('Employee Test Suite', ()=>{
        it("can get values from manager constructor", () => {
            const employee = new Manager('Jim','12','asifjasdfo@gmail.com','1234567890');
            
            expect(employee.getofficeNumber()).toBe('1234567890');
            expect(employee.officeNumber.length).toEqual(10)
            expect(employee.getRole()).toBe('Manager')
        })
        it("Can set values", () => {
            const employee = new Manager('Jim','12','asifjasdfo@gmail.com','1234567890');
            expect(typeof employee.id).toBe('string')
            expect(employee.officeNumber).toBe('1234567890');
        })

})