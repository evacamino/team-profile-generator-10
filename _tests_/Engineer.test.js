const Engineer = require('../lib/Engineer')

describe('Employee Test Suite', ()=>{
        it("can get values from engineer constructor", () => {
            const employee = new Engineer('Jim','12','asifjasdfo@gmail.com','git username');
            
            expect(employee.getGithub()).toBe('git username');
            expect(employee.getRole()).toBe('Engineer')
        })
        it("Can set values", () => {
            const employee = new Engineer('Jim','12','asifjasdfo@gmail.com','git username');
            expect(typeof employee.name).toBe('string')
            expect(employee.github).toBe('git username');
        })

})