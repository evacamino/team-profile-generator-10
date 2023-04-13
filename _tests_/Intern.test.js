const Intern = require('../lib/Intern')

describe('Employee Test Suite', ()=>{
        it("can get values from intern constructor", () => {
            const employee = new Intern('Jim','12','asifjasdfo@gmail.com','school name');
        
            expect(employee.getSchool()).toBe('school name');
            expect(employee.getRole()).toBe('Intern')
        })
        it("Can set values", () => {
            const employee = new Intern('Jim','12','asifjasdfo@gmail.com','school name');
            expect(typeof employee.email).toBe('string')
            expect(employee.school).toBe('school name');
        })

})